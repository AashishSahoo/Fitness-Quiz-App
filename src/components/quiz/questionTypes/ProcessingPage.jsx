import React, { useState, useEffect } from "react";
import { Box, Typography, LinearProgress, Paper } from "@mui/material";

export default function ProcessingPage({ question, onContinue, answers }) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Analyzing your profile...",
    "Calculating your BMI and metrics...",
    "Creating personalized workout plan...",
    "Generating nutrition recommendations...",
    "Finalizing your program...",
  ];

  const stats = [
    { label: "Calories Burned", value: "2,400", icon: "🔥" },
    { label: "Workouts Created", value: "28", icon: "💪" },
    { label: "Success Rate", value: "94%", icon: "🎯" },
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          // Auto-continue after completion
          setTimeout(() => {
            onContinue(question.id, "completed");
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    const stepIndex = Math.floor((progress / 100) * steps.length);
    setCurrentStep(Math.min(stepIndex, steps.length - 1));
  }, [progress, steps.length]);

  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 1,
          fontSize: { xs: "1.5rem", md: "1.8rem" },
          color: "#7061a2",
        }}
      >
        {question.question}
      </Typography>

      <Typography sx={{ color: "#666", mb: 4, fontSize: "1rem" }}>
        Please wait while we create your personalized program...
      </Typography>

      {/* Speedometer/Progress */}
      {question.showSpeedometer && (
        <Box
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "150px", sm: "200px" },
              height: { xs: "150px", sm: "200px" },
              borderRadius: "50%",
              background: `conic-gradient(#7061a2 ${
                progress * 3.6
              }deg, #e0e0e0 0deg)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: "80%",
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: 700, color: "#7061a2" }}
              >
                {progress}%
              </Typography>
              <Typography sx={{ fontSize: "0.85rem", color: "#666" }}>
                Complete
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {/* Progress Bar */}
      <Box sx={{ mb: 3, px: { xs: 2, sm: 4 } }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#7061a2",
              borderRadius: 5,
            },
          }}
        />
      </Box>

      {/* Current Step */}
      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: 600,
          color: "#7061a2",
          mb: 4,
          minHeight: "24px",
        }}
      >
        {steps[currentStep]}
      </Typography>

      {/* Stats */}
      {question.showStats && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
            mb: 4,
          }}
        >
          {stats.map((stat, idx) => (
            <Paper
              key={idx}
              elevation={2}
              sx={{
                p: 2,
                minWidth: "140px",
                textAlign: "center",
                borderRadius: 2,
              }}
            >
              <Typography sx={{ fontSize: "2rem", mb: 0.5 }}>
                {stat.icon}
              </Typography>
              <Typography
                sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#333" }}
              >
                {stat.value}
              </Typography>
              <Typography sx={{ fontSize: "0.85rem", color: "#666" }}>
                {stat.label}
              </Typography>
            </Paper>
          ))}
        </Box>
      )}

      {/* Feedback/Testimonial */}
      {question.showFeedback && (
        <Paper
          elevation={1}
          sx={{
            p: 3,
            mt: 4,
            backgroundColor: "#f9fafb",
            borderRadius: 2,
            maxWidth: "500px",
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.95rem",
              fontStyle: "italic",
              color: "#666",
              mb: 1,
            }}
          >
            "This program changed my life! Lost 15kg in 3 months and feel
            amazing."
          </Typography>
          <Typography
            sx={{ fontSize: "0.85rem", fontWeight: 600, color: "#7061a2" }}
          >
            — Sarah M., Age {answers[24] || "28"}
          </Typography>
        </Paper>
      )}
    </Box>
  );
}
