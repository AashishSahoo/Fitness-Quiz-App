import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { Icon } from "@iconify/react";

export default function Header() {
  const items = [
    "Reduce Back Pain & Improve Posture",
    "Increase Muscle Tone",
    "Start Your Weight-Loss Journey Today",
  ];

  const visibleItems = {
    md: items.slice(0, 2),
    lg: items,
  };

  return (
    <Box
      sx={{
        py: 1,
        display: { xs: "none", md: "block" },
        backgroundColor: "#7061a2",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {(visibleItems.lg || []).map((text, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={index < 2 ? 6 : 0}
              lg={4}
              sx={{
                display: {
                  xs: "none",
                  md: index < 2 ? "flex" : "none",
                  lg: "flex",
                },
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  textAlign: "center",
                }}
              >
                <Icon icon="mdi:check-circle" width={20} height={20} />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
