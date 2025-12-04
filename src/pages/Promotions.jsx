import TimerAppBar from "../components/promotion/TimerAppBar";
import MainAppBar from "../components/common/MainAppBar";
import { Box, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import SecureInfoSection from "../components/common/SecureInfoSection";
import Footer from "../components/common/Footer";

import EmailCaptureDialog from "../components/common/EmailCaptureDialog";
import Section1 from "../components/promotion/Section1";
import Section2 from "../components/promotion/Section2";
import Section3 from "../components/promotion/Section3";

export default function Promotions() {
  const [openDialog, setOpenDialog] = useState(false);

  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 1);

  const handleEmailSubmit = (email) => {
    console.log("Email submitted:", email);
    setOpenDialog(false);
  };

  return (
    <>
      <Box sx={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <TimerAppBar />
        <Box sx={{ height: { xs: "75px", sm: "75px" } }} />

        <Section1 />
        <Section2 />
        <Section3 />
      </Box>

      <EmailCaptureDialog open={openDialog} onSubmit={handleEmailSubmit} />
    </>
  );
}
