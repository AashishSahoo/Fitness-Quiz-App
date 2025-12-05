import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormHelperText,
  InputAdornment,
} from "@mui/material";

export default function TextInput({ question, onContinue, answers }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = answers[question.id];
    if (!saved) {
      setValue("");
      setError("");
    }
    if (saved) setValue(saved);
  }, [question.id, answers]);

  const handleContinue = () => {
    if (question.id === 24) {
      const age = Number(value);
      if (!value.trim() || isNaN(age) || age <= 0) {
        setError("Please add valid age");
        return;
      }

      if (value < 16 || value > 80) {
        setError("Please add valid age");
        return;
      }
    }

    if (question.id === 25) {
      const name = String(value);

      if (!value.trim() || typeof name !== "string") {
        setError("Please add valid name");
        return;
      }
      if (value.length <= 1 || value.length > 30) {
        setError("Please add valid name");
        return;
      }
    }

    onContinue(question.id, value);
  };

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 15,
          fontSize: { xs: "1.3rem", md: "1.5rem" },
          textAlign: "center",
        }}
      >
        {question.question}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 15,
        }}
      >
        {" "}
        <TextField
          variant="standard"
          placeholder={question.placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError("");
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {question.id === 24 && (
                  <p style={{ fontSize: "2rem", fontWeight: 600, margin: 0 }}>
                    years
                  </p>
                )}
              </InputAdornment>
            ),
          }}
          sx={{
            width: { xs: "200px", sm: "350px", md: "350px" },
            "& .MuiInputBase-input": {
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "3rem", md: "3ren" },
              fontWeight: 600,
              paddingRight: "8px",
            },
            "& .MuiInputAdornment-root": {
              alignItems: "center",
              "& p": {
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                fontWeight: 600,
              },
            },
          }}
        />
        {error && (
          <FormHelperText sx={{ mb: 2, color: "red" }}>{error}</FormHelperText>
        )}
      </Box>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={handleContinue}
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
    </Box>
  );
}
