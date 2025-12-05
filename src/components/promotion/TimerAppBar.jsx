import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import AppLogo from "../../assets/AppLogo.svg";

export default function TimerAppBar() {
  const TOTAL_TIME = 15 * 60;
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

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
        backgroundColor: "#7061a2",
        borderBottom: "none",
        py: 1.5,
        zIndex: 1300,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          textAlign="center"
        >
          <Grid item xs={12} sm={12} md={2}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: "center", sm: "center", md: "flex-start" }}
            >
              <Box
                sx={{
                  height: "32px",
                  width: "120px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                <img
                  src={AppLogo}
                  alt="logo"
                  style={{ height: "32px", objectFit: "contain" }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 2, sm: 3 },
              flexWrap: "wrap",
              mt: { xs: 2, md: 0 },
            }}
          >
            <Box
              sx={{
                color: "#fff",
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Price reserved for:
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                color: "#fff",
                fontWeight: 600,
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: "18px", sm: "25px", fontWeight: 900 },
                    lineHeight: 1,
                  }}
                >
                  {String(Math.floor(timeLeft / 60)).padStart(2, "0")}
                </Box>
                <Box
                  sx={{
                    fontSize: { xs: "10px", sm: "12px" },
                    opacity: 0.8,
                    mt: "4px",
                  }}
                >
                  minutes
                </Box>
              </Box>

              <Box
                sx={{
                  fontSize: { xs: "18px", sm: "20px" },
                  fontWeight: 900,
                  lineHeight: 1,
                }}
              >
                :
              </Box>

              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: "18px", sm: "25px" },
                    lineHeight: 1,
                    fontWeight: 900,
                  }}
                >
                  {String(timeLeft % 60).padStart(2, "0")}
                </Box>
                <Box
                  sx={{
                    fontSize: { xs: "10px", sm: "12px" },
                    opacity: 0.8,
                    mt: "4px",
                  }}
                >
                  seconds
                </Box>
              </Box>
            </Box>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                color: "#4e4371",
                textTransform: "none",
                backgroundColor: "#fff",
                borderRadius: "10px",
                fontWeight: 700,
                px: { xs: 2, sm: 3 },
                fontSize: { xs: "13px", sm: "14px" },
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              GET MY PLAN
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
