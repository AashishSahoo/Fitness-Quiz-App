import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CurrentBodyMaleImg from "../../../assets/quizQuestion/Q13/Q13M_Currentbody.png";

import DreamBodyMaleImg from "../../../assets/quizQuestion/Q13/Q13M_Dreambody.png";
import CurrentBodyFemaleImg from "../../../assets/quizQuestion/Q13/Q13F_Currentbody.png";
import DreamBodyFemaleImg from "../../../assets/quizQuestion/Q13/Q13F_Dreambody.png";

export default function InfoPage({ question, onContinue, answers }) {
  const gender = answers[1];

  return (
    <Box sx={{ textAlign: "center", py: 2 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 1,
          fontSize: { xs: "1.5rem", md: "1.8rem" },
          color: "#000",
        }}
      >
        {question.question}
      </Typography>

      <Typography
        sx={{
          fontSize: "1rem",
          mb: 8,
          color: "#333",
        }}
      >
        {question.description}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <Box
          component="img"
          src={gender === "female" ? CurrentBodyFemaleImg : CurrentBodyMaleImg}
          alt="currentBody"
          sx={{
            width: { xs: "20%", sm: "20%" },
            height: "auto",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            width={70}
            height={70}
            viewBox="0 0 92 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M7.07641 1.06061L40.0719 42.7139C40.6906 43.4918 41 44.4165 41 45.4881C41 46.5597 40.6906 47.5106 40.0719 48.3409C28.136 63.0102 16.6331 77.1717 5.56312 90.8254C4.9955 91.4971 2.7148 93.1674 0.957737 90.6834C-0.799326 88.1993 0.26802 86.0318 0.957737 85.1381C11.2613 72.4496 21.9945 59.233 33.1572 45.4881L2.42052 6.68676C1.30097 4.74126 1.3922 2.9449 2.69423 1.29767C3.99625 -0.349556 5.45698 -0.428575 7.07641 1.06061Z"
                style={{
                  transition: "0.5s ease-in-out",
                  fill: "rgb(112,97,162)",
                  opacity: 0.5,
                }}
              />
              <path
                d="M31.9038 1.06061L64.0945 42.7139C64.6982 43.4918 65 44.4165 65 45.4881C65 46.5597 64.6982 47.5106 64.0945 48.3409C52.4498 63.0102 41.2274 77.1717 30.4274 90.8254C29.8737 91.4971 27.6486 93.1674 25.9344 90.6834C24.2202 88.1993 25.2615 86.0318 25.9344 85.1381C35.9867 72.4496 46.4581 59.233 57.3485 45.4881L27.3615 6.68676C26.2692 4.74126 26.3582 2.9449 27.6285 1.29767C28.8988 -0.349556 30.3239 -0.428575 31.9038 1.06061Z"
                style={{
                  transition: "0.5s ease-in-out",
                  fill: "rgb(112,97,162)",
                }}
              />
              <path
                d="M58.0764 1.06061L91.0719 42.7139C91.6906 43.4918 92 44.4165 92 45.4881C92 46.5597 91.6906 47.5106 91.0719 48.3409C79.136 63.0102 67.6331 77.1717 56.5631 90.8254C55.9955 91.4971 53.7148 93.1674 51.9577 90.6834C50.2007 88.1993 51.268 86.0318 51.9577 85.1381C62.2613 72.4496 72.9945 59.233 84.1572 45.4881L53.4205 6.68676C52.301 4.74126 52.3922 2.9449 53.6942 1.29767C54.9962 -0.349556 56.457 -0.428575 58.0764 1.06061Z"
                style={{
                  transition: "0.5s ease-in-out",
                  fill: "rgb(112,97,162)",
                  opacity: 0.5,
                }}
              />
            </g>
          </svg>
        </Box>

        <Box
          component="img"
          src={gender === "female" ? DreamBodyFemaleImg : DreamBodyMaleImg}
          alt="dreamBody"
          sx={{
            width: { xs: "20%", sm: "20%" },
            height: "auto",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </Box>

      {question.subDescription && (
        <Typography
          sx={{
            fontSize: "1.2rem",
            color: "#000",
            mb: 1,
            fontWeight: 600,
          }}
        >
          {question.subDescription}
        </Typography>
      )}

      <Button
        variant="contained"
        onClick={() => onContinue(question.id, "viewed")}
        sx={{
          mt: 4,
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
  );
}
