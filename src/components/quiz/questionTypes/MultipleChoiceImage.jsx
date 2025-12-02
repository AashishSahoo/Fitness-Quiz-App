import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import { Radio } from "@mui/material";

export default function MultipleChoiceImage({
  question,
  onContinue,
  answers,
  gender,
}) {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const saved = answers[question.id];
    if (saved && Array.isArray(saved)) setSelected(saved);
  }, [question.id, answers]);

  const optionCount = question.options.length;

  const getGridSize = () => {
    if (optionCount <= 4) {
      return { xs: 12, sm: 12, md: 12, lg: 12 };
    }
    return { xs: 12, sm: 6, md: 6, lg: 6 };
  };

  const gridSize = getGridSize();

  const handleToggle = (value) => {
    const isNone = value === "none";
    const hasNone = selected.includes("none");

    let updated;

    if (isNone) {
      updated = ["none"];
      setSelected(updated);
      onContinue(question.id, updated);
      return;
    }

    const filtered = hasNone ? [] : [...selected];

    if (filtered.includes(value)) {
      updated = filtered.filter((v) => v !== value);
    } else {
      updated = [...filtered, value];
    }

    setSelected(updated);
  };

  return (
    <Box>
      <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4, lg: 7 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: 1,
            fontSize: {
              xs: "1.35rem",
              sm: "1.8rem",
              md: "2rem",
              lg: "2rem",
            },
            textAlign: "center",
          }}
        >
          {question.question}
        </Typography>

        <Typography
          sx={{
            color: "#000",
            px: { xs: 2, sm: 4 },
            fontSize: {
              xs: "0.9rem",
              sm: "1rem",
              md: "1.05rem",
            },
            lineHeight: {
              xs: "1.45",
              sm: "1.55",
            },
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {question.description}
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        {question.options.map((option) => {
          const imgUrl =
            option.imgUrlMale && gender === "male"
              ? option.imgUrlMale
              : option.imgUrlFemale && gender === "female"
              ? option.imgUrlFemale
              : option.imgUrl;

          const isSelected = selected.includes(option.value);

          return (
            <Grid
              item
              key={option.value}
              xs={gridSize.xs}
              sm={gridSize.sm}
              md={gridSize.md}
              display="flex"
              justifyContent="center"
            >
              <Card
                onClick={() => handleToggle(option.value)}
                sx={{
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: optionCount <= 4 ? "400px" : "100%",
                  borderRadius: "14px",
                  backgroundColor: "#f2f2f2",
                  border: isSelected
                    ? "2px solid #7061a2"
                    : "2px solid transparent",
                  "&:hover": { backgroundColor: "#e1e1e1" },
                  boxShadow: "none",
                  transition: "0.2s",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0px 10px 0px 0px !important",
                    gap: 2,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    {imgUrl ? (
                      <Box
                        component="img"
                        src={imgUrl}
                        alt={option.label}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "70px",
                          height: "70px",
                          borderRadius: "12px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "2.5rem",
                        }}
                      >
                        ✅
                      </Box>
                    )}
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      flex: 1,
                      color: "#000",
                    }}
                  >
                    {option.label}
                  </Typography>

                  <Radio
                    checked={isSelected}
                    onChange={() => handleToggle(option.value)}
                    sx={{
                      color: "#999",
                      "&.Mui-checked": {
                        color: "#7061a2",
                      },
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={() => onContinue(question.id, selected)}
          disabled={selected.length === 0}
          sx={{
            mt: 2,
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
