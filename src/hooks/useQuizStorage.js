import { useEffect, useState } from "react";

const LS_KEY = "quizStorage";

export default function useQuizStorage() {
  const [quiz, setQuiz] = useState(() => {
    const saved = localStorage.getItem(LS_KEY);
    return saved
      ? JSON.parse(saved)
      : {
          currentIndex: 1,
          previousIndex: 0,
          gender: "",
          answers: {},
        };
  });

  const updateQuiz = (patch) => {
    setQuiz((prev) => {
      const updated = { ...prev, ...patch };
      localStorage.setItem(LS_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const saveAnswer = (qid, data) => {
    updateQuiz({
      answers: {
        ...quiz.answers,
        [qid]: data,
      },
    });
  };

  const next = () => {
    updateQuiz({
      previousIndex: quiz.currentIndex,
      currentIndex: quiz.currentIndex + 1,
    });
  };

  const back = () => {
    updateQuiz({
      previousIndex: quiz.currentIndex,
      currentIndex: quiz.currentIndex - 1,
    });
  };

  return { quiz, updateQuiz, saveAnswer, next, back };
}
