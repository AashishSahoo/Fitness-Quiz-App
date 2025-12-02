import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

export default function SingleChoiceImage({
  question,
  onContinue,
  answers,
  gender,
}) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const saved = answers[question.id];
    if (saved) setSelected(saved);
  }, [question.id, answers]);

  const optionCount = question.options.length;

  const getGridSize = () => {
    if (optionCount <= 4) {
      return { xs: 12, sm: 12, md: 12, lg: 12 };
    }

    return { xs: 12, sm: 6, md: 6, lg: 6 };
  };

  const gridSize = getGridSize();

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 5,
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

      <Grid container spacing={2} justifyContent="center">
        {question.options.map((option) => {
          const imgUrl =
            option.imgUrlMale && gender === "male"
              ? option.imgUrlMale
              : option.imgUrlFemale && gender === "female"
              ? option.imgUrlFemale
              : option.imgUrl;

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
                onClick={() => {
                  setSelected(option.value);
                  onContinue(question.id, option.value);
                }}
                sx={{
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: optionCount <= 4 ? "400px" : "100%",
                  borderRadius: "14px",
                  backgroundColor: "#f2f2f2",
                  "&:hover": {
                    backgroundColor: "#e1e1e1",
                  },
                  boxShadow: "none",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0px 12px !important",
                    gap: 2,
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
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#000",
                    }}
                  >
                    {option.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
