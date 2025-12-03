import React from "react";
import { Box, Container } from "@mui/material";
import TimerAppBar from "../components/common/TimerAppBar";
import MainAppBar from "../components/common/MainAppBar";

import Header from "../components/common/Header";
import QuestionRouter from "../components/quiz/QuestionRouter";
import SecureInfoSection from "../components/common/SecureInfoSection";
import Footer from "../components/common/Footer";
import { quizQuestions } from "../data/quizQuestions";
import useQuizStorage from "../hooks/useQuizStorage";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
  const navigate = useNavigate();
  const { quiz, back, updateQuiz } = useQuizStorage();
  const [language, setLanguage] = React.useState("en");

  const currentQuestion = quizQuestions[quiz.currentIndex - 1];
  const totalQuestions = quizQuestions.length;

  // const handleContinue = (questionId, answer) => {
  //   // Save answer
  //   saveAnswer(questionId, answer);

  //   // Update gender if gender question
  //   if (currentQuestion.type === "gender-selection") {
  //     updateQuiz({ gender: answer });
  //   }

  //   // Check if quiz complete
  //   if (quiz.currentIndex >= totalQuestions) {
  //     console.log("Quiz Complete!", { ...quiz.answers, [questionId]: answer });
  //     window.location.href = "/promotions";
  //     return;
  //   }

  //   // Move to next
  //   next();
  // };

  const handleContinue = (questionId, answer) => {
    const isLast = quiz.currentIndex >= totalQuestions;

    updateQuiz({
      answers: { ...quiz.answers, [questionId]: answer },
      gender:
        currentQuestion.type === "gender-selection" ? answer : quiz.gender,
      previousIndex: quiz.currentIndex,
      currentIndex: isLast ? quiz.currentIndex : quiz.currentIndex + 1,
    });

    if (isLast) {
      navigate("/promotions");
    }
  };

  const handleBack = () => {
    if (quiz.currentIndex > 1) back();
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#7061a2" }}>
      <TimerAppBar />
      <Box sx={{ height: { xs: "75px", sm: "45px" } }} />

      <Box>
        <MainAppBar language={language} onLanguageChange={setLanguage} />
        <Header />

        <Container
          maxWidth="lg"
          sx={{
            mt: "4rem",
            mb: "1rem",
            maxWidth: { xs: "100%", sm: "600px", md: "850px", lg: "1000px" },
          }}
        >
          <QuestionRouter
            question={currentQuestion}
            current={quiz.currentIndex}
            total={totalQuestions}
            onBack={handleBack}
            onContinue={handleContinue}
            answers={quiz.answers}
            gender={quiz.gender}
          />
        </Container>

        <SecureInfoSection />
        <Footer />
      </Box>
    </Box>
  );
}
