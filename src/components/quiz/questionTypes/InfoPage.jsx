import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function InfoPage({ question, onContinue }) {
  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 2,
          fontSize: { xs: "1.5rem", md: "1.8rem" },
          color: "#7061a2",
        }}
      >
        {question.question}
      </Typography>

      <Typography
        sx={{
          fontSize: "1.2rem",
          fontWeight: 600,
          mb: 2,
          color: "#333",
        }}
      >
        {question.description}
      </Typography>

      {question.subDescription && (
        <Typography
          sx={{
            fontSize: "1rem",
            color: "#666",
            mb: 4,
            fontStyle: "italic",
          }}
        >
          {question.subDescription}
        </Typography>
      )}

      {/* Placeholder for transformation images */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          mb: 4,
          flexWrap: "wrap",
        }}
      >
        {[1, 2, 3].map((i) => (
          <Box
            key={i}
            sx={{
              width: { xs: "80px", sm: "120px" },
              height: { xs: "120px", sm: "180px" },
              backgroundColor: "#f0f0f0",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "#999", fontSize: "2rem" }}>📊</Typography>
          </Box>
        ))}
      </Box>

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
        Continue
      </Button>
    </Box>
  );
}
