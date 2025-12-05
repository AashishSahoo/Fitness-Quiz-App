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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : TOTAL_TIME));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          textAlign="center"
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Grid item md={2}>
            <Box display="flex" alignItems="center" justifyContent="flex-start">
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
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                color: "#fff",
                fontSize: "16px",
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
                    fontSize: "25px",
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  {String(Math.floor(timeLeft / 60)).padStart(2, "0")}
                </Box>
                <Box
                  sx={{
                    fontSize: "12px",
                    opacity: 0.8,
                    mt: "4px",
                  }}
                >
                  minutes
                </Box>
              </Box>

              <Box
                sx={{
                  fontSize: "20px",
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
                    fontSize: "25px",
                    lineHeight: 1,
                    fontWeight: 900,
                  }}
                >
                  {String(timeLeft % 60).padStart(2, "0")}
                </Box>
                <Box
                  sx={{
                    fontSize: "12px",
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
                px: 3,
                fontSize: "14px",
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

        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Box
            sx={{
              display: isScrolled ? "none" : "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease-in-out",
            }}
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

          <Box
            sx={{
              display: isScrolled ? "flex" : "none",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                color: "#fff",
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
                    fontSize: "26px",
                    fontWeight: 900,
                    lineHeight: 1,
                    fontWeight: 900,
                  }}
                >
                  {String(Math.floor(timeLeft / 60)).padStart(2, "0")}
                </Box>
                <Box
                  sx={{
                    fontSize: "10px",
                    mt: "3px",
                  }}
                >
                  minutes
                </Box>
              </Box>

              {/* Separator */}
              <Box
                sx={{
                  fontSize: "20px",
                  fontWeight: 900,
                  lineHeight: 1,
                }}
              >
                :
              </Box>

              {/* Seconds box */}
              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    fontSize: "26px",
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  {String(timeLeft % 60).padStart(2, "0")}
                </Box>
                <Box
                  sx={{
                    fontSize: "10px",
                    mt: "3px",
                  }}
                >
                  seconds
                </Box>
              </Box>
            </Box>

            {/* Button */}
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              sx={{
                color: "#7061A2",
                textTransform: "none",
                backgroundColor: "#fff",
                borderRadius: "8px",
                fontWeight: 900,
                px: { xs: 2, sm: 2.5 },
                py: { xs: 0.5, sm: 0.75 },
                fontSize: { xs: "14px", sm: "13px" },
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              GET MY PLAN
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
