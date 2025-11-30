import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";

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

export default function SummaryPage({ question, onContinue, answers, gender }) {
  // Calculate BMI
  const heightData = answers[10];
  const weightData = answers[11];
  let bmi = null;
  let bmiCategory = null;

  if (heightData && weightData) {
    let heightCm = parseFloat(heightData.value);
    let weightKg = parseFloat(weightData.value);

    // Convert to metric if needed
    if (heightData.unit === "FT") {
      heightCm = heightCm * 30.48;
    }
    if (weightData.unit === "LBS") {
      weightKg = weightKg / 2.20462;
    }

    bmi = calculateBMI(weightKg, heightCm);
    bmiCategory = getBMICategory(parseFloat(bmi));
  }

  const name = answers[25] || "Friend";
  const age = answers[24] || "N/A";

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 1,
          fontSize: { xs: "1.5rem", md: "1.8rem" },
          textAlign: "center",
          color: "#7061a2",
        }}
      >
        {name}, {question.description}
      </Typography>

      {question.subDescription && (
        <Typography
          sx={{
            color: "#666",
            mb: 4,
            textAlign: "center",
            fontSize: "1rem",
          }}
        >
          {question.subDescription}
        </Typography>
      )}

      {/* BMI Display */}
      {bmi && bmiCategory && (
        <Paper
          elevation={2}
          sx={{
            p: 3,
            mb: 3,
            textAlign: "center",
            backgroundColor: "#f9fafb",
            borderRadius: 2,
          }}
        >
          <Typography sx={{ fontSize: "0.9rem", color: "#666", mb: 0.5 }}>
            Your Current BMI
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: bmiCategory.color,
              mb: 0.5,
            }}
          >
            {bmi}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: bmiCategory.color,
            }}
          >
            {bmiCategory.category}
          </Typography>
        </Paper>
      )}

      {/* Profile Summary */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 2,
          textAlign: "center",
        }}
      >
        Your Wellness Profile
      </Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={6}>
          <Paper
            elevation={1}
            sx={{ p: 2, textAlign: "center", borderRadius: 2 }}
          >
            <Typography sx={{ fontSize: "0.85rem", color: "#666", mb: 0.5 }}>
              Age
            </Typography>
            <Typography sx={{ fontSize: "1.3rem", fontWeight: 600 }}>
              {age}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper
            elevation={1}
            sx={{ p: 2, textAlign: "center", borderRadius: 2 }}
          >
            <Typography sx={{ fontSize: "0.85rem", color: "#666", mb: 0.5 }}>
              Gender
            </Typography>
            <Typography
              sx={{
                fontSize: "1.3rem",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
            >
              {gender || "N/A"}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper
            elevation={1}
            sx={{ p: 2, textAlign: "center", borderRadius: 2 }}
          >
            <Typography sx={{ fontSize: "0.85rem", color: "#666", mb: 0.5 }}>
              Body Type
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
              {answers[4]?.label || answers[4] || "N/A"}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper
            elevation={1}
            sx={{ p: 2, textAlign: "center", borderRadius: 2 }}
          >
            <Typography sx={{ fontSize: "0.85rem", color: "#666", mb: 0.5 }}>
              Goal
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
              {answers[2]?.label || answers[2] || "N/A"}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={() => onContinue(question.id, "viewed")}
          sx={{
            px: 6,
            py: 1.5,
            borderRadius: "10px",
            backgroundColor: "#F68D2B",
            fontSize: "18px",
            "&:hover": { backgroundColor: "#ac621e" },
          }}
        >
          Continue to Your Plan
        </Button>
      </Box>
    </Box>
  );
}
