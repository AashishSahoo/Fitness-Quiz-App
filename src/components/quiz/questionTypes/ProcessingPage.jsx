import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, CircularProgress } from "@mui/material";
import UserPost from "../../../assets/pages/quiz/UserPost.png";

export default function ProcessingPage({ question, onContinue, answers }) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
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

  const CircularProgressWithLabel = (props) => {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          {...props}
          size={200}
          thickness={4}
          sx={{ color: "#7061a2" }}
        />

        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{ fontWeight: 700, color: "#000" }}
          >
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 1,
          px: 2,
          fontSize: {
            xs: "1.35rem",
            sm: "1.8rem",
            md: "2rem",
            lg: "2rem",
          },
          lineHeight: {
            xs: "1.35",
            sm: "1.4",
          },
        }}
      >
        {question.question}
      </Typography>
      <Typography sx={{ color: "#666", mb: 4, fontSize: "1rem" }}>
        Please wait while we create your personalized program...
      </Typography>
      {question.showSpeedometer && (
        <Box
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgressWithLabel value={progress} />
        </Box>
      )}
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: 600,
          color: "#5e518bff",
          minHeight: "24px",
        }}
      >
        1.2Million users
      </Typography>
      <Typography
        sx={{
          color: "#000",
          mb: 5,
          minHeight: "24px",
        }}
      >
        have choosen Wall pilates
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={UserPost} alt="User_Post" loading="lazy" />
      </Box>
    </Box>
  );
}
