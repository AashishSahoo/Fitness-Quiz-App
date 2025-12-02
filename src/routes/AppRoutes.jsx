import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PageSkeletonLoader from "../components/common/PageSkeletonLoader";
const PromotionSPage = React.lazy(() => import("../pages/Promotions"));
const QuizPage = React.lazy(() => import("../pages/QuizPage"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<PageSkeletonLoader />}>
            <QuizPage />
          </Suspense>
        }
      />
      <Route path="promotions" element={<PromotionSPage />} />
    </Routes>
  );
};

export default AppRoutes;
