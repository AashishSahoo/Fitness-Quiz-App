import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";

export default function TextInput({ question, onContinue, answers }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = answers[question.id];
    if (saved) setValue(saved);
  }, [question.id, answers]);

  const handleContinue = () => {
    const val = value.trim();

    if (!val) {
      setError("This field is required");
      return;
    }

    if (question.validation) {
      const { min, max, minLength, maxLength } = question.validation;

      if (min !== undefined && Number(val) < min) {
        setError(`Minimum value is ${min}`);
        return;
      }
      if (max !== undefined && Number(val) > max) {
        setError(`Maximum value is ${max}`);
        return;
      }
      if (minLength && val.length < minLength) {
        setError(`Minimum ${minLength} characters required`);
        return;
      }
      if (maxLength && val.length > maxLength) {
        setError(`Maximum ${maxLength} characters allowed`);
        return;
      }
    }

    onContinue(question.id, val);
  };

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 3,
          fontSize: { xs: "1.3rem", md: "1.5rem" },
          textAlign: "center",
        }}
      >
        {question.question}
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        type={question.validation?.min !== undefined ? "number" : "text"}
        placeholder={question.placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setError("");
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            fontSize: "1.2rem",
            "&:hover fieldset": { borderColor: "#7061a2" },
            "&.Mui-focused fieldset": { borderColor: "#7061a2" },
          },
        }}
      />

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={handleContinue}
          sx={{
            px: 5,
            py: 1.3,
            borderRadius: "10px",
            backgroundColor: "#F68D2B",
            fontSize: "18px",
            "&:hover": { backgroundColor: "#ac621e" },
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
