import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import { Icon } from "@iconify/react";

export default function MeasurementInput({ question, onContinue, answers }) {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState(question.toggleOptions[0]);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = answers[question.id];

    if (!saved) {
      setValue("");

      if (question.id === 10) setUnit("CM");
      if (question.id === 11 || question.id === 12) setUnit("KG");
    } else {
      setValue(saved.value || "");
      setUnit(saved.unit || (question.id === 10 ? "CM" : "KG"));
    }
  }, [question.id, answers]);

  const heightData = answers[10];
  const showBMI = question.id === 11 && heightData;

  const calculateBMI = () => {
    if (!heightData || !value) return null;

    let heightInMeters = 0;
    const hVal = Number(heightData.value);

    if (heightData.unit === "CM") {
      heightInMeters = hVal / 100;
    } else if (heightData.unit === "FT") {
      heightInMeters = hVal * 0.3048;
    }

    const weightInKg = unit === "KG" ? Number(value) : Number(value) * 0.453592;

    if (!heightInMeters || !weightInKg) return null;

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    return bmi.toFixed(1);
  };

  const bmiValue = calculateBMI();

  const getBMIAlert = () => {
    if (!bmiValue) return null;

    const bmi = Number(bmiValue);

    if (bmi < 18.5) {
      return {
        severity: "error",
        cardTitle: `Your BMI is considered underweight (${bmiValue}).`,
        cardDescription: ` You are underweight for your height. It’s important to aim for a healthy weight range.`,
      };
    } else if (bmi < 25) {
      return {
        severity: "success",
        cardTitle: `Your BMI is considered healthy (${bmiValue}). `,
        cardDescription: `You are a healthy weight for your height according to your BMI.`,
      };
    } else if (bmi < 30) {
      return {
        severity: "warning",
        cardTitle: `Your BMI is considered overweight (${bmiValue}).`,
        cardDescription: ` You are overweight for your height. Being overweight can increase your risk of health issues.`,
      };
    } else {
      return {
        severity: "error",
        cardTitle: `Your BMI is considered obese (${bmiValue}).`,
        cardDescription: ` It is important to reduce your weight. Obesity increases the risk of heart disease and other conditions.`,
      };
    }
  };

  const bmiAlert = getBMIAlert();

  const handleContinue = () => {
    const num = Number(value);

    if (!value.trim() || isNaN(num) || num <= 0) {
      setError(
        question.id === 10
          ? "Please add valid height"
          : question.id === 11
          ? "Please add valid weight"
          : "Please add valid goal weight"
      );
      return;
    }

    if (question.id === 10) {
      if (unit === "FT" && (num < 3 || num > 8)) {
        setError("Please add valid height");
        return;
      }
      if (unit === "CM" && (num < 90 || num > 250)) {
        setError("Please add valid height");
        return;
      }
    }

    if (question.id === 11 || question.id === 12) {
      if (unit === "KG" && (num < 20 || num > 300)) {
        setError("Please add valid weight");
        return;
      }
      if (unit === "LBS" && (num < 40 || num > 660)) {
        setError("Please add valid weight");
        return;
      }
    }

    setError("");
    onContinue(question.id, { value, unit });
  };

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 4,
          fontSize: {
            xs: "1.35rem",
            sm: "1.8rem",
            md: "2rem",
            lg: "2rem",
          },
          textAlign: "center",
        }}
      >
        {question.question}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <ToggleButtonGroup
          value={unit}
          exclusive
          onChange={(e, val) => val && setUnit(val)}
          sx={{ mb: 2 }}
        >
          {question.toggleOptions.map((opt) => (
            <ToggleButton
              key={opt}
              value={opt}
              sx={{
                px: 4,
                py: 2,
                fontWeight: "bold",
                borderColor: "#7061a2",
                "&.Mui-selected": {
                  backgroundColor: "#7061a2",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#5a4d82" },
                },
                borderRadius: 50,
              }}
            >
              {opt}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <TextField
          variant="standard"
          placeholder="0"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <p style={{ fontSize: "1.6rem", fontWeight: 600, margin: 0 }}>
                  {unit.toLowerCase()}
                </p>
              </InputAdornment>
            ),
            inputMode: "numeric",
          }}
          sx={{
            width: { xs: "180px", sm: "180px", md: "180px" },
            "& .MuiInputBase-input": {
              textAlign: "center",
              fontSize: "3rem",
              fontWeight: 600,
              paddingRight: "8px",
            },
            "& .MuiInputAdornment-root": {
              alignItems: "center",
              "& p": {
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                fontWeight: 600,
              },
            },
          }}
        />
        {error && (
          <FormHelperText sx={{ mb: 2, color: "red" }}>{error}</FormHelperText>
        )}
        {showBMI && bmiAlert && (
          <Box
            sx={{
              mt: 3,
              borderRadius: 3,
              overflow: "hidden",
              width: { xs: "95%", sm: "75%", md: "50%" },
              maxWidth: 500,
              border: `2px solid ${
                bmiAlert.severity === "error"
                  ? "#e57373"
                  : bmiAlert.severity === "success"
                  ? "#81c784"
                  : "#ffb74d"
              }`,
              backgroundColor:
                bmiAlert.severity === "error"
                  ? "#ffebee"
                  : bmiAlert.severity === "success"
                  ? "#e8f5e9"
                  : "#fff3e0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: { xs: 2, sm: 3 },
                pt: { xs: 1.5, sm: 2 },
              }}
            >
              <Icon
                icon="mdi:information-outline"
                width={28}
                height={28}
                style={{
                  marginRight: 8,
                  color:
                    bmiAlert.severity === "error"
                      ? "#e57373"
                      : bmiAlert.severity === "success"
                      ? "#81c784"
                      : "#ffb74d",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#000", flex: 1 }}
              >
                {bmiAlert.cardTitle}
              </Typography>
            </Box>

            <Box
              sx={{
                px: { xs: 2, sm: 3 },
                pb: { xs: 2, sm: 3 },
                ml: "32px",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#000", lineHeight: 1.5 }}
              >
                {bmiAlert.cardDescription}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={handleContinue}
          sx={{
            mt: 10,
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
