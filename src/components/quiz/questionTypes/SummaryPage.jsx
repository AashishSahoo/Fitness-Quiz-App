import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

// Helper function to calculate BMI
const calculateBMI = (weightKg, heightCm) => {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  return bmi.toFixed(1);
};

// Helper function to get BMI category
const getBMICategory = (bmi) => {
  if (bmi < 18.5) return { category: "Underweight", color: "#3b82f6" };
  if (bmi < 25) return { category: "Normal", color: "#22c55e" };
  if (bmi < 30) return { category: "Overweight", color: "#f59e0b" };
  return { category: "Obese", color: "#ef4444" };
};

// ⭐ NEW BMI GRAPH (SEGMENTED + CENTER ANIMATION + POINTER)
const BMIGraph = ({ bmi }) => {
  const segments = [
    { start: 15, end: 18.5, color: "#3b82f6" },
    { start: 18.5, end: 25, color: "#22c55e" },
    { start: 25, end: 30, color: "#f59e0b" },
    { start: 30, end: 40, color: "#ef4444" },
  ];

  const maxBMI = 40;
  const pointerPos = Math.min((bmi / maxBMI) * 100, 100);

  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      {/* Segmented BMI bar */}
      <Box
        sx={{
          display: "flex",
          height: 26,
          borderRadius: "50px",
          overflow: "hidden",
          border: "2px solid #e5e7eb",
        }}
      >
        {segments.map((seg, i) => {
          const width = ((seg.end - seg.start) / maxBMI) * 100;

          return (
            <Box key={i} sx={{ width: `${width}%`, position: "relative" }}>
              {/* Animated fill expands from center */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                style={{
                  transformOrigin: "center",
                  width: "100%",
                  height: "100%",
                  backgroundColor: seg.color,
                }}
              />
            </Box>
          );
        })}
      </Box>

      {/* Pointer */}
      <Box sx={{ position: "relative", height: 35, mt: 1 }}>
        <Box
          sx={{
            position: "absolute",
            left: `${pointerPos}%`,
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: "14px solid #000",
          }}
        />

        {/* BMI value label */}
        <Typography
          sx={{
            position: "absolute",
            top: 16,
            left: `${pointerPos}%`,
            transform: "translateX(-50%)",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#000",
          }}
        >
          {bmi}
        </Typography>
      </Box>

      {/* Labels */}
      <Box
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "space-between",
          px: 1,
        }}
      >
        {[15, 18.5, 25, 30, 35, 40].map((val) => (
          <Typography
            key={val}
            variant="caption"
            sx={{ fontWeight: 600, color: "#000" }}
          >
            {val}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default function SummaryPage({ question, onContinue, answers, gender }) {
  // Calculate BMI
  const heightData = answers[10];
  const weightData = answers[11];
  let bmi = null;
  let bmiCategory = null;

  if (heightData && weightData) {
    let heightCm = parseFloat(heightData.value);
    let weightKg = parseFloat(weightData.value);

    if (heightData.unit === "FT") heightCm = heightCm * 30.48;
    if (weightData.unit === "LBS") weightKg = weightKg / 2.20462;

    bmi = calculateBMI(weightKg, heightCm);
    bmiCategory = getBMICategory(parseFloat(bmi));
  }

  const name = answers[25] || "Friend";
  const age = answers[24] || "N/A";

  return (
    <Box>
      <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            fontSize: {
              xs: "1.35rem",
              sm: "1.8rem",
              md: "2rem",
              lg: "2rem",
            },
            textAlign: "center",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: "#000",
            px: { xs: 2, sm: 4 },
            fontSize: {
              xs: "0.9rem",
              sm: "1rem",
              md: "1.05rem",
            },
            lineHeight: {
              xs: "1.45",
              sm: "1.55",
            },
            maxWidth: "900px",
            m: 2,
          }}
        >
          {question.description}
        </Typography>
        <Typography
          sx={{
            color: "#000",
            mb: 4,
            mx: 4,
            textAlign: "center",
            fontSize: {
              xs: "0.5rem",
              sm: "1rem",
              md: "1rem",
              lg: "1.1rem",
            },
          }}
        >
          {question.subDescription}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: 1,
            px: 2,
            fontSize: {
              xs: "1.35rem",
              sm: "1.8rem",
              md: "1.8rem",
              lg: "1.8rem",
            },
            lineHeight: {
              xs: "1.35",
              sm: "1.4",
            },
          }}
        >
          Here’s your current wellness profile:
        </Typography>

        <Typography
          sx={{
            color: "#000",
            px: { xs: 2, sm: 4 },
            fontSize: {
              xs: "0.9rem",
              sm: "1rem",
              md: "1.05rem",
            },
            lineHeight: {
              xs: "1.45",
              sm: "1.55",
            },
            maxWidth: "900px",
            m: 2,
          }}
        >
          Body Mass Index (BMI): <strong>{bmi}</strong>
        </Typography>
      </Box>

      {/* BMI DISPLAY CARD */}
      {bmi && bmiCategory && (
        <Paper
          elevation={2}
          sx={{
            p: 3,
            mb: 3,
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              color: "#000",
            }}
          >
            {bmiCategory.category}
          </Typography>

          {/* ⭐ NEW ANIMATED BMI GRAPH */}
          <BMIGraph bmi={parseFloat(bmi)} />
        </Paper>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 2,
          mb: 3,
          mt: 2,
          p: 2,
          borderRadius: 2,
          backgroundColor: "#F9FAFB",
          border: "1px solid #E5E7EB",
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            minWidth: 20,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4CAF50",
          }}
        >
          <Icon icon="fe:warning" width="24" height="24" />
        </Box>

        {/* Text Content */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#000" }}>
            Your BMI is considered {bmiCategory?.category} ({bmi})
          </Typography>

          <Typography
            sx={{
              fontSize: "0.9rem",
              mt: 0.5,
              color: "#555",
            }}
          >
            You are a healthy weight for your height according to your BMI.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={6}>
          <Box>
            <Icon icon="healthicons:body" width="48" height="48" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 1,
              }}
            >
              <Typography
                variant="h1"
                sx={{ fontSize: "0.85rem", color: "#666", mb: 0.5 }}
              >
                Body type
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "0.85rem", color: "#666", mb: 0.5 }}
              >
                Mesomorph
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6}></Grid>

        <Grid item xs={6}>
          <Paper sx={{ p: 2, textAlign: "center", borderRadius: 2 }}>
            <Typography sx={{ fontSize: "0.85rem", color: "#666", mb: 0.5 }}>
              Body Type
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
              {answers[4]?.label || answers[4] || "N/A"}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper sx={{ p: 2, textAlign: "center", borderRadius: 2 }}>
            <Typography sx={{ fontSize: "0.85rem", color: "#666", mb: 0.5 }}>
              Goal
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
              {answers[2]?.label || answers[2] || "N/A"}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* CONTINUE BUTTON */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={() => onContinue(question.id, "viewed")}
          sx={{
            mt: 4,
            width: { xs: "100%", sm: "100%", lg: "50%" },
            px: 5,
            py: 1.3,
            borderRadius: "10px",
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
