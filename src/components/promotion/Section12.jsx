import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Button,
} from "@mui/material";
import { Icon } from "@iconify/react";

const faqData = [
  {
    q: "What is Wall Pilates?",
    a: "Wall Pilates is a gentle Pilates practice designed to be performed from the comfort of your home. It’s a perfect solution for individuals looking to improve their health without leaving their house and spending thousands of dollars and hours of time on expensive classes or personal training. With Wall Pilates, you can enjoy the same benefits at a lower cost and better convenience. All Wall Pilates exercises are designed to be performed for individuals with any physical ability level.",
  },
  {
    q: "What are the main Wall Pilates benefits?",
    a: "Wall Pilates benefits reported by the users include weight loss, improved strength, better posture, reduced back pain, lower stress & anxiety and longer lifespan. Please note that individual results might vary.",
  },
  {
    q: "Do I need any special equipment to do Wall Pilates?",
    a: "No, all you need is a wall. If you feel like some exercises are not comfortable, we offer alternatives that may require grabbing a towel, blanket or a pillow - things you already have at home!",
  },
  {
    q: "How do I access my program?",
    a: "After you place your order, you are directed to your personal member-area that shows exercise program made for you. Next time you try to log in, you can do it from the home page of the site (wallpilates.com), just click log in. It’s that simple!",
  },
  {
    q: "How often should I practice Wall Pilates to see results?",
    a: "Results differ based on the body type and many other individual factors. Do what feels right to you, but it is recommended to practice Wall Pilates between 2-7 times a week.",
  },
  {
    q: "How hard is it to do Wall Pilates?",
    a: "Wall Pilates is designed for all fitness levels. You can start slow and follow beginner-friendly variations that guide you step-by-step.",
  },
];

export default function Section12() {
  return (
    <Box component="section" sx={{ py: 6 }}>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" sx={{ fontSize: { xs: 26, md: 32 } }}>
            <b>Frequently</b> Asked Questions
          </Typography>
        </Box>

        <Box>
          {faqData.map((item, index) => (
            <Paper
              key={index}
              elevation={1}
              sx={{ mb: 2, borderRadius: 2, overflow: "hidden" }}
            >
              <Accordion disableGutters>
                <AccordionSummary
                  expandIcon={
                    <Icon
                      icon="mdi:chevron-down"
                      width={26}
                      style={{ color: "#000" }}
                    />
                  }
                  sx={{
                    px: 2,
                    "& .MuiAccordionSummary-content": {
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    },
                  }}
                >
                  <Icon
                    icon="mdi:help-circle"
                    width={26}
                    style={{ color: "#7061A2" }}
                  />
                  <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
                    {item.q}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ px: 3, pb: 2 }}>
                  <Typography sx={{ lineHeight: 1.6 }}>{item.a}</Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          ))}
        </Box>
      </Container>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            width: { xs: "70%", sm: "35%", md: "25%" },
            px: 5,
            py: 1.3,
            mt: 5,
            borderRadius: "10px",
            backgroundColor: "#F68D2B",
            fontSize: "18px",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#ac621e" },
          }}
        >
          GET MY PLAN
        </Button>
      </Box>
    </Box>
  );
}
