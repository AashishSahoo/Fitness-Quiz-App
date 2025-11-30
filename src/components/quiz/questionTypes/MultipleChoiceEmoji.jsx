import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

export default function MultipleChoiceEmoji({ question, onContinue, answers }) {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const saved = answers[question.id];
    if (saved && Array.isArray(saved)) setSelected(saved);
  }, [question.id, answers]);

  const handleToggle = (value) => {
    const isNone = value === "none";
    const hasNone = selected.includes("none");

    let updated;
    if (isNone) {
      updated = ["none"];
    } else {
      const filtered = hasNone ? [] : [...selected];
      if (filtered.includes(value)) {
        updated = filtered.filter((v) => v !== value);
      } else {
        updated = [...filtered, value];
      }
    }
    setSelected(updated);
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
        <Typography sx={{ color: "#666", mb: 3, textAlign: "center" }}>
          {question.description}
        </Typography>
      )}

      <Box>
        {question.options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={selected.includes(option.value)}
                onChange={() => handleToggle(option.value)}
                sx={{
                  color: "#7061a2",
                  "&.Mui-checked": { color: "#7061a2" },
                }}
              />
            }
            label={option.label}
            sx={{
              display: "block",
              mb: 1,
              p: 1.5,
              borderRadius: 2,
              backgroundColor: selected.includes(option.value)
                ? "#f5f3ff"
                : "#f2f4f7",
              "&:hover": { backgroundColor: "#f5f3ff" },
            }}
          />
        ))}
      </Box>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={() => onContinue(question.id, selected)}
          disabled={selected.length === 0}
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
