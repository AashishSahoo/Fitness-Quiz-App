import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";

export default function SingleChoiceEmoji({ question, onContinue, answers }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const saved = answers[question.id];
    if (saved) setSelected(saved);
  }, [question.id, answers]);

  const isMultiColumn = question.options.length > 4;

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 1,
          fontSize: { xs: "1.3rem", md: "1.5rem" },
          textAlign: "center",
        }}
      >
        {question.question}
      </Typography>
      {question.description && (
        <Typography sx={{ color: "#666", mb: 3, textAlign: "center" }}>
          {question.description}
        </Typography>
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMultiColumn ? "1fr 1fr" : "1fr",
          gap: 2,
          mt: 2,
        }}
      >
        {question.options.map((option) => (
          <Card
            key={option.value}
            onClick={() => setSelected(option.value)}
            sx={{
              cursor: "pointer",
              backgroundColor:
                selected === option.value ? "#e4e7ec" : "#f2f4f7",
              borderRadius: "14px",
              minHeight: "70px",
              transition: "all 0.2s",
              "&:hover": {
                backgroundColor: "#e4e7ec",
                transform: "translateY(-2px)",
                boxShadow: 3,
              },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                p: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: selected === option.value ? 600 : 500,
                  textAlign: "center",
                  color: selected === option.value ? "#7061a2" : "#333",
                }}
              >
                {option.label}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={() => onContinue(question.id, selected)}
          disabled={!selected}
          sx={{
            px: 5,
            py: 1.3,
            borderRadius: "10px",
            backgroundColor: "#F68D2B",
            fontSize: "18px",
            "&:hover": { backgroundColor: "#ac621e" },
            "&.Mui-disabled": { backgroundColor: "#ccc" },
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
