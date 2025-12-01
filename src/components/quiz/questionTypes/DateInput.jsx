import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Select event date"
            value={value ? new Date(value) : null}
            onChange={(newValue) => {
              const formatted = newValue
                ? newValue.toISOString().split("T")[0]
                : "";
              setValue(formatted);
            }}
            slotProps={{
              textField: {
                placeholder: "Select event date",
                sx: {
                  "& .MuiOutlinedInput-root": {
                    fontSize: "1.1rem",
                    "&:hover fieldset": { borderColor: "#7061a2" },
                    "&.Mui-focused fieldset": { borderColor: "#7061a2" },
                  },
                },
              },
              popper: {
                placement: "bottom-start", // <- force below input
              },
            }}
          />
        </LocalizationProvider>
      </Box>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={handleContinue}
          disabled={!value}
          sx={{
            mt: 10,
            width: { xs: "100%", sm: "100%", lg: "50%" },
            px: 5,
            py: 1.3,
            borderRadius: "10px",
            backgroundColor: "#F68D2B",
            fontSize: "18px",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#ac621e" },
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
              textDecoration: "underline",
            }}
          >
            Skip this step
          </Button>
        </Box>
      )}
    </Box>
  );
}
