import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function DateInput({ question, onContinue, answers }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const saved = answers[question.id];
    if (saved && saved !== "skipped") setValue(saved);
  }, [question.id, answers]);

  const handleContinue = () => {
    if (!value && !question.allowSkip) return;
    onContinue(question.id, value || "skipped");
  };

  const handleSkip = () => {
    onContinue(question.id, "skipped");
  };

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
        <Typography
          sx={{
            color: "#666",
            mb: 3,
            textAlign: "center",
            fontSize: "0.95rem",
          }}
        >
          {question.description}
        </Typography>
      )}

      <TextField
        fullWidth
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        InputLabelProps={{ shrink: true }}
        sx={{
          "& .MuiOutlinedInput-root": {
            fontSize: "1.1rem",
            "&:hover fieldset": { borderColor: "#7061a2" },
            "&.Mui-focused fieldset": { borderColor: "#7061a2" },
          },
        }}
      />

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={handleContinue}
          disabled={!value && !question.allowSkip}
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

      {question.allowSkip && (
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button
            variant="text"
            onClick={handleSkip}
            sx={{
              color: "#999",
              textTransform: "none",
              fontSize: "0.95rem",
            }}
          >
            Skip this step
          </Button>
        </Box>
      )}
    </Box>
  );
}
