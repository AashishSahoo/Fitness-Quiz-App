import React from "react";
import { Box, Card, LinearProgress, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

// Import question type components
import GenderSelection from "./questionTypes/GenderSelection";
import SingleChoiceEmoji from "./questionTypes/SingleChoiceEmoji";
import SingleChoiceImage from "./questionTypes/SingleChoiceImage";
import MultipleChoiceEmoji from "./questionTypes/MultipleChoiceEmoji";
import MultipleChoiceImage from "./questionTypes/MultipleChoiceImage";
import MeasurementInput from "./questionTypes/MeasurementInput";
import TextInput from "./questionTypes/TextInput";
import DateInput from "./questionTypes/DateInput";
import InfoPage from "./questionTypes/InfoPage";
import SummaryPage from "./questionTypes/SummaryPage";
import PredictionPage from "./questionTypes/PredictionPage";
import ProcessingPage from "./questionTypes/ProcessingPage";

export default function QuestionRouter({
  question,
  current,
  total,
  onBack,
  onContinue,
  answers,
  gender,
}) {
  if (!question) return null;

  const renderQuestion = () => {
    const props = { question, onContinue, answers, gender };

    switch (question.type) {
      case "gender-selection":
        return <GenderSelection {...props} />;
      case "single-choice":
        return question.options[0]?.imgUrl ? (
          <SingleChoiceImage {...props} />
        ) : (
          <SingleChoiceEmoji {...props} />
        );
      case "multi-choice":
        return question.options[0]?.imgUrl ? (
          <MultipleChoiceImage {...props} />
        ) : (
          <MultipleChoiceEmoji {...props} />
        );
      case "height-input":
      case "weight-input":
        return <MeasurementInput {...props} />;
      case "text-input":
        return <TextInput {...props} />;
      case "date-input":
        return <DateInput {...props} />;
      case "info-page":
        return <InfoPage {...props} />;
      case "summary-page":
        return <SummaryPage {...props} />;
      case "prediction-page":
        return <PredictionPage {...props} />;
      case "processing-page":
        return <ProcessingPage {...props} />;
      default:
        return <Typography>Unknown question type: {question.type}</Typography>;
    }
  };

  return (
    <Card
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 5,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      {/* Progress Bar - Always Visible */}
      <Box>
        <LinearProgress
          variant="determinate"
          value={(current / total) * 100}
          sx={{
            height: 10,
            borderRadius: 4,
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#39ab74",
              borderRadius: 4,
            },
            mb: 1,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="text"
            onClick={onBack}
            disabled={current === 1}
            startIcon={
              <Icon icon="material-symbols:arrow-back" width="28" height="28" />
            }
            sx={{
              color: "#000",
              textTransform: "none",
              fontWeight: 600,
              p: 0,
              minWidth: 0,
              "& .MuiButton-startIcon": {
                marginRight: 0,
              },
            }}
          />

          <Typography
            sx={{
              fontSize: "16px",
              color: "#333",
            }}
          >
            {current} / {total}
          </Typography>
        </Box>
      </Box>

      {/* Dynamic Question Component */}
      {renderQuestion()}
    </Card>
  );
}
