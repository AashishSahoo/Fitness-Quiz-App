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
import Section4 from "../components/promotion/Section4";
import Section5 from "../components/promotion/Section5";
import Section6 from "../components/promotion/Section6";
import Section7 from "../components/promotion/Section7";
import Section8 from "../components/promotion/Section8";
import Section9 from "../components/promotion/Section9";
import Section10 from "../components/promotion/Section10";
import Section11 from "../components/promotion/Section11";
import Section12 from "../components/promotion/Section12";
import Section13 from "../components/promotion/Section13";
import Section14 from "../components/promotion/Section14";

export default function Promotions() {
  const [openDialog, setOpenDialog] = useState(true);

  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 1);

  const handleEmailSubmit = (email) => {
    console.log("Email submitted:", email);
    setOpenDialog(false);
  };

  return (
    <>
      <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
        <TimerAppBar />
        <Box sx={{ height: { xs: "75px", sm: "75px" } }} />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />

        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />

        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
        <Section13 />
        <Section14 />
      </Box>

      <EmailCaptureDialog open={openDialog} onSubmit={handleEmailSubmit} />
    </>
  );
}
