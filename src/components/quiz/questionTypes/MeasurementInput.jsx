import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Alert,
} from "@mui/material";

export default function MeasurementInput({ question, onContinue, answers }) {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState(question.toggleOptions[0]);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = answers[question.id];
    if (saved) {
      setValue(saved.value || "");
      setUnit(saved.unit || question.toggleOptions[0]);
    }
  }, [question.id, answers]);

  const handleContinue = () => {
    if (!value.trim() || isNaN(value) || Number(value) <= 0) {
      setError("Please enter a valid number");
      return;
    }
    onContinue(question.id, { value, unit });
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
                py: 1,
                "&.Mui-selected": {
                  backgroundColor: "#7061a2",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#5a4d82" },
                },
              }}
            >
              {opt}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        type="number"
        placeholder={question.placeholder || "0"}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setError("");
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            fontSize: "1.5rem",
            textAlign: "center",
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
