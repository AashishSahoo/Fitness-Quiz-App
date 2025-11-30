import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Checkbox,
} from "@mui/material";

export default function MultipleChoiceImage({ question, onContinue, answers }) {
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

      <Grid container spacing={2}>
        {question.options.map((option) => (
          <Grid item xs={6} sm={4} key={option.value}>
            <Card
              onClick={() => handleToggle(option.value)}
              sx={{
                cursor: "pointer",
                position: "relative",
                backgroundColor: selected.includes(option.value)
                  ? "#e4e7ec"
                  : "#f2f4f7",
                borderRadius: "14px",
                border: selected.includes(option.value)
                  ? "2px solid #7061a2"
                  : "2px solid transparent",
                transition: "all 0.2s",
                "&:hover": {
                  backgroundColor: "#e4e7ec",
                  transform: "translateY(-2px)",
                  boxShadow: 3,
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", p: 2 }}>
                <Checkbox
                  checked={selected.includes(option.value)}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "#7061a2",
                    "&.Mui-checked": { color: "#7061a2" },
                  }}
                />
                {option.imgUrl && (
                  <Box
                    sx={{
                      width: "100%",
                      height: "100px",
                      mb: 1,
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={option.imgUrl}
                      alt={option.label}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                )}
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    fontWeight: selected.includes(option.value) ? 600 : 500,
                    color: selected.includes(option.value) ? "#7061a2" : "#333",
                  }}
                >
                  {option.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

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
