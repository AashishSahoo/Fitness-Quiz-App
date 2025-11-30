import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PromotionsPage from "../pages/Promotions";
import QuizPage from "../pages/QuizPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<QuizPage />} />
      <Route path="promotions" element={<PromotionsPage />} />
    </Routes>
  );
};

export default AppRoutes;
