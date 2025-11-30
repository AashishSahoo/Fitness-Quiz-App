import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

export default function GenderSelection({ question, onContinue, answers }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const saved = answers[question.id];
    if (saved) setSelected(saved);
  }, [question.id, answers]);

  const handleSelect = (value) => {
    setSelected(value);
    onContinue(question.id, value);
  };

  return (
    <Box sx={{ mt: 3 }}>
      {/* Question */}
      <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: 1,
            px: 2,
            fontSize: {
              xs: "1.35rem",
              sm: "1.8rem",
              md: "2rem",
              lg: "2rem",
            },
            lineHeight: {
              xs: "1.35",
              sm: "1.4",
            },
          }}
        >
          {question.question}
        </Typography>

        <Typography
          sx={{
            color: "#666",
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

      {/* Options Row */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: 2, sm: 3 },
          justifyContent: "center",
          alignItems: "flex-end",
          mt: 15,
          px: 2,
        }}
      >
        {question.options.map((option) => (
          <Box
            key={option.value}
            onClick={() => handleSelect(option.value)}
            sx={{
              flex: { xs: "1 1 0", sm: "0 1 260px" },
              minWidth: { xs: 0, sm: "240px" },
              maxWidth: { xs: "none", sm: "280px" },
              backgroundColor: "#f2f2f2",
              borderRadius: "18px",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              position: "relative",
              overflow: "visible",

              "&:hover": {
                backgroundColor: "#e1e1e1",
              },
              "&:active": {
                transform: "translateY(-2px)",
              },
            }}
          >
            {/* FLOATING IMAGE (UNDER the purple bar) */}
            <Box
              sx={{
                position: "absolute",
                top: "-25%",
                width: "70%",
                maxWidth: "200px",
                pointerEvents: "none",
                userSelect: "none",
                zIndex: 1, // IMAGE UNDER the purple bar
              }}
            >
              <Box
                component="img"
                src={option.imgUrl}
                alt={option.label}
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>

            {/* SPACER FOR HEIGHT */}
            <Box sx={{ width: "100%", paddingTop: "45%" }} />

            {/* PURPLE LABEL (ON TOP of the image) */}
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#7061a2",
                py: { xs: 1.2, sm: 1.6 },
                textAlign: "left",
                borderRadius: "0 0 18px 18px",
                px: 2,
                position: "relative",
                zIndex: 5, // LABEL ABOVE the image
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: "0.95rem", sm: "1.1rem" },
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                {option.label}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Prefer not to say */}
      {question.preferNotToSay && (
        <Box sx={{ mt: 7, mb: 5, textAlign: "center" }}>
          <Typography
            onClick={() => handleSelect("prefer_not_to_say")}
            sx={{
              color: "#1a1a1a",
              fontWeight: 500,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            I prefer not to say
          </Typography>
        </Box>
      )}
    </Box>
  );
}
