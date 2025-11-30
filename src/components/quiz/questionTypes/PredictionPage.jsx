import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";

export default function PredictionPage({ question, onContinue, answers }) {
  const currentWeightData = answers[11];
  const goalWeightData = answers[12];

  let currentWeight = currentWeightData?.value || "N/A";
  let goalWeight = goalWeightData?.value || "N/A";
  const unit = currentWeightData?.unit || "KG";

  // Calculate target date (12 weeks from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 84);
  const formattedDate = targetDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Calculate weight difference
  const weightDiff =
    currentWeight !== "N/A" && goalWeight !== "N/A"
      ? Math.abs(parseFloat(currentWeight) - parseFloat(goalWeight)).toFixed(1)
      : "N/A";

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 1,
          fontSize: { xs: "1.4rem", md: "1.7rem" },
          textAlign: "center",
          color: "#7061a2",
        }}
      >
        Your Weight Journey Prediction
      </Typography>

      <Typography
        sx={{
          color: "#666",
          mb: 4,
          textAlign: "center",
          fontSize: "1rem",
        }}
      >
        We predict you'll weigh{" "}
        <strong>
          {goalWeight} {unit}
        </strong>{" "}
        by <strong>{formattedDate}</strong>
      </Typography>

      {/* Before/After Comparison */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              backgroundColor: "#f9fafb",
              borderRadius: 2,
            }}
          >
            <Typography sx={{ fontSize: "0.9rem", color: "#666", mb: 1 }}>
              Current Weight
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#333",
                mb: 0.5,
              }}
            >
              {currentWeight}
            </Typography>
            <Typography sx={{ fontSize: "1rem", color: "#666" }}>
              {unit}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              backgroundColor: "#f0fdf4",
              borderRadius: 2,
              border: "2px solid #22c55e",
            }}
          >
            <Typography sx={{ fontSize: "0.9rem", color: "#666", mb: 1 }}>
              Goal Weight
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#22c55e",
                mb: 0.5,
              }}
            >
              {goalWeight}
            </Typography>
            <Typography sx={{ fontSize: "1rem", color: "#666" }}>
              {unit}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Weight Loss Indicator */}
      {weightDiff !== "N/A" && (
        <Paper
          elevation={2}
          sx={{
            p: 2,
            mb: 4,
            textAlign: "center",
            backgroundColor: "#fef3c7",
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{ fontSize: "1rem", color: "#92400e", fontWeight: 600 }}
          >
            🎯 Target: Lose {weightDiff} {unit} in 12 weeks
          </Typography>
        </Paper>
      )}

      {/* Prediction Graph Placeholder */}
      {question.showGraph && (
        <Box
          sx={{
            mb: 3,
            p: 4,
            backgroundColor: "#f9fafb",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography sx={{ color: "#999", fontSize: "2rem", mb: 1 }}>
            📈
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>
            Weight Progress Chart
          </Typography>
          <Typography sx={{ color: "#999", fontSize: "0.75rem", mt: 2 }}>
            *Based on app-logged user data. Results may vary. Consult a
            physician first.
          </Typography>
        </Box>
      )}

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
          Get My Personalized Plan
        </Button>
      </Box>
    </Box>
  );
}
