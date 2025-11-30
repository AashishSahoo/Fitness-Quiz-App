import React, { useEffect, useState } from "react";
import { AppBar, Box, Container, Grid, Typography } from "@mui/material";

export default function TimerAppBar() {
  const TOTAL_TIME = 15 * 60;
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  const formatTime = (sec) => {
    const d = Math.floor(sec / (24 * 3600));
    const h = Math.floor((sec % (24 * 3600)) / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;

    return `${String(d).padStart(2, "0")}d ${String(h).padStart(
      2,
      "0"
    )}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : TOTAL_TIME));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#000",
        borderBottom: "none", // REMOVED WHITE LINE
        py: 1.5,
        zIndex: 1300,
      }}
    >
      <Container maxWidth="sm">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              ⚡ Black Friday Offer is live! ⚡
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              mt: { xs: 1, sm: "2px" },
            }}
          >
            <Typography
              sx={{
                color: "#ff5029",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              {formatTime(timeLeft)}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
