// SummaryPage.jsx
import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import CurrentBodyFemaleImg from "../../../assets/quizQuestion/Q13/Q13F_Currentbody.png";
import CurrentBodyMaleImg from "../../../assets/quizQuestion/Q13/Q13M_Currentbody.png";

import BMIGraph from "../BMIGraph";

const calculateBMI = (weightKg, heightCm) => {
  const heightM = heightCm / 100;
  return (weightKg / (heightM * heightM)).toFixed(1);
};

const getBMICategory = (bmi) => {
  if (bmi < 18.5) return { category: "Underweight", color: "#3b82f6" };
  if (bmi < 25) return { category: "Normal", color: "#22c55e" };
  if (bmi < 30) return { category: "Overweight", color: "#f59e0b" };
  return { category: "Obese", color: "#ef4444" };
};

const getBMIAlertBoxUI = (bmiValue) => {
  if (!bmiValue) return null;
  const bmi = Number(bmiValue);

  let alert = null;

  if (bmi < 18.5) {
    alert = {
      severity: "error",
      title: `Your BMI is considered underweight (${bmiValue}).`,
      desc: `You are underweight for your height. It’s important to aim for a healthy weight range.`,
    };
  } else if (bmi < 25) {
    alert = {
      severity: "success",
      title: `Your BMI is considered healthy (${bmiValue}).`,
      desc: `You are a healthy weight for your height according to your BMI.`,
    };
  } else if (bmi < 30) {
    alert = {
      severity: "warning",
      title: `Your BMI is considered overweight (${bmiValue}).`,
      desc: `You are overweight for your height. Being overweight can increase your risk of health issues.`,
    };
  } else {
    alert = {
      severity: "error",
      title: `Your BMI is considered obese (${bmiValue}).`,
      desc: `It is important to reduce your weight. Obesity increases the risk of heart disease and other conditions.`,
    };
  }

  return (
    <Box
      sx={{
        mt: 4,
        borderRadius: 3,
        overflow: "hidden",
        width: { xs: "95%", sm: "75%", md: "55%" },
        maxWidth: 520,
        mx: "auto",
        border: `2px solid ${
          alert.severity === "error"
            ? "#e57373"
            : alert.severity === "success"
            ? "#81c784"
            : "#ffb74d"
        }`,
        backgroundColor:
          alert.severity === "error"
            ? "#ffebee"
            : alert.severity === "success"
            ? "#e8f5e9"
            : "#fff3e0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", px: 3, pt: 2 }}>
        <Icon
          icon="mdi:information-outline"
          width={28}
          height={28}
          style={{
            marginRight: 10,
            color:
              alert.severity === "error"
                ? "#e57373"
                : alert.severity === "success"
                ? "#81c784"
                : "#ffb74d",
          }}
        />
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {alert.title}
        </Typography>
      </Box>

      <Box sx={{ px: 3, pb: 2, ml: "32px" }}>
        <Typography sx={{ color: "#000", fontSize: "0.85rem" }}>
          {alert.desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default function SummaryPage({ question, onContinue, answers, gender }) {
  const nowData = [
    {
      icon: "ion:body",
      label: "Body type",
      value: "Mesomorph",
      bgColor: "#b7b0d0",
      iconColor: "#7061a2",
    },
    {
      icon: "fa7-solid:person-running",
      label: "Lifestyle",
      value: "Active",
      bgColor: "#b7b0d0",
      iconColor: "#7061a2",
    },
    {
      icon: "entypo:bar-graph",
      label: "Fitness level",
      value: "Beginner",
      bgColor: "#b7b0d0",
      iconColor: "#7061a2",
    },
    {
      icon: "jam:battery-charging",
      label: "Metabolism",
      value: "Normal",
      bgColor: "#b7b0d0",
      iconColor: "#7061a2",
    },
  ];

  const heightData = answers[10];
  const weightData = answers[11];

  let bmi = null;
  let bmiCategory = null;

  if (heightData && weightData) {
    let heightCm = parseFloat(heightData.value);
    let weightKg = parseFloat(weightData.value);

    if (heightData.unit === "FT") heightCm *= 30.48;
    if (weightData.unit === "LBS") weightKg /= 2.20462;

    bmi = calculateBMI(weightKg, heightCm);
    bmiCategory = getBMICategory(parseFloat(bmi));
  }

  const name = answers[25] || "Friend";
  const age = answers[24] || "N/A";
  const ageRange = age[0] + 0;

  return (
    <Box>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>

        <Typography sx={{ color: "#000", px: 3 }}>
          {question.description}
        </Typography>

        <Typography sx={{ color: "#000", mt: 2, px: 4 }}>
          {`Based on Wall Pilates historical data, ${gender} in their ${ageRange}s can drastically improve their hormonal balance and burn off excess weight rapidly.`}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: "1.35rem",
              sm: "1.8rem",
              md: "2rem",
              lg: "2rem",
            },
            fontWeight: 600,
            mt: 3,
          }}
        >
          Here’s your current wellness profile:
        </Typography>

        <Typography sx={{ color: "#000", mt: 2 }}>
          Body Mass Index (BMI): <strong>{bmi}</strong>
        </Typography>
      </Box>

      {bmi && bmiCategory && (
        <Box
          sx={{
            p: 3,
            mb: 3,
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: 2,
          }}
        >
          <Typography sx={{ fontSize: "1rem", color: "#6f7780" }}>
            {bmiCategory.category.toUpperCase()}
          </Typography>

          <BMIGraph bmi={parseFloat(bmi)} />
        </Box>
      )}

      {bmi && getBMIAlertBoxUI(bmi)}

      <Grid
        container
        spacing={2}
        sx={{ mt: 4, mb: 3 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} sm={5} md={4}>
          {nowData.map((item, index) => (
            <Box key={index} sx={{ display: "flex", gap: 1, mb: 1.5 }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: item.bgColor,
                  borderRadius: 2.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 50,
                }}
              >
                <Icon
                  icon={item.icon}
                  width={28}
                  height={28}
                  color={item.iconColor}
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 600 }}>{item.label}</Typography>
                <Typography sx={{ color: "#000", fontSize: "0.85rem" }}>
                  {item.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>

        <Grid item xs={6} sm={5} md={4}>
          <Box
            component="img"
            src={
              gender === "female" ? CurrentBodyFemaleImg : CurrentBodyMaleImg
            }
            alt="Body"
            sx={{
              width: "100%",
              maxWidth: 300,
              mx: "auto",
              display: "block",
              borderRadius: 3,
            }}
          />
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={() => onContinue(question.id, "viewed")}
          sx={{
            width: { xs: "100%", lg: "50%" },
            py: 1.3,
            borderRadius: "12px",
            backgroundColor: "#F68D2B",
            fontSize: "18px",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#ac621e" },
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
