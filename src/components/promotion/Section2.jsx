import { Box, Button, Typography, Grid, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import ComparisonSection from "../../components/quiz/ComparisonSection ";
import WeightLossGraph from "../../components/quiz/WeightLossGraph";
import CurrentBodyMaleImg from "../../assets/quizQuestion/Q13/Q13M_Currentbody.png";
import CurrentBodyFemaleImg from "../../assets/quizQuestion/Q13/Q13F_Currentbody.png";
import DreamBodyFemaleImg from "../../assets/quizQuestion/Q13/Q13F_Dreambody.png";
import DreamBodyMaleImg from "../../assets/quizQuestion/Q13/Q13M_Dreambody.png";
import FreeImg1 from "../../assets/FreeImage3.png";
import FreeImg2 from "../../assets/FreeImage2.png";
import FreeImg3 from "../../assets/FreeImage1.png";

export default function Section2() {
  const [activeSlide, setActiveSlide] = useState(0);

  const answers = JSON.parse(localStorage.getItem("quizAnswers")) || {};

  const gender = answers[1];
  const currentWeightData = answers[11];
  const goalWeightData = answers[12];

  const goalWeight = goalWeightData?.value || "N/A";
  const unit = currentWeightData?.unit || "KG";

  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 1);

  const FreeItems = [
    {
      price: "$14.99",
      title: "Meditation Program Access",
      img: FreeImg1,
    },
    {
      price: "$24.99",
      title: "Healthy Baking & Desserts eBook",
      img: FreeImg2,
    },
    {
      price: "$9.99",
      title: "Optimal Water Intake Tracker",
      img: FreeImg3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box>
        <Box sx={{ textAlign: "center", py: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              mb: 4,
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "red",
                  mb: 4,
                  fontSize: "1rem",
                  mL: 2,
                }}
              >
                Now
              </Typography>

              <Box
                component="img"
                src={
                  gender === "female"
                    ? CurrentBodyFemaleImg
                    : CurrentBodyMaleImg
                }
                alt="currentBody"
                sx={{
                  width: { xs: "300px", sm: "180px", md: "180px" },
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                width={70}
                height={70}
                viewBox="0 0 92 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M7.07641 1.06061L40.0719 42.7139C40.6906 43.4918 41 44.4165 41 45.4881C41 46.5597 40.6906 47.5106 40.0719 48.3409C28.136 63.0102 16.6331 77.1717 5.56312 90.8254C4.9955 91.4971 2.7148 93.1674 0.957737 90.6834C-0.799326 88.1993 0.26802 86.0318 0.957737 85.1381C11.2613 72.4496 21.9945 59.233 33.1572 45.4881L2.42052 6.68676C1.30097 4.74126 1.3922 2.9449 2.69423 1.29767C3.99625 -0.349556 5.45698 -0.428575 7.07641 1.06061Z"
                    style={{
                      transition: "0.5s ease-in-out",
                      fill: "rgb(112,97,162)",
                      opacity: 0.5,
                    }}
                  />
                  <path
                    d="M31.9038 1.06061L64.0945 42.7139C64.6982 43.4918 65 44.4165 65 45.4881C65 46.5597 64.6982 47.5106 64.0945 48.3409C52.4498 63.0102 41.2274 77.1717 30.4274 90.8254C29.8737 91.4971 27.6486 93.1674 25.9344 90.6834C24.2202 88.1993 25.2615 86.0318 25.9344 85.1381C35.9867 72.4496 46.4581 59.233 57.3485 45.4881L27.3615 6.68676C26.2692 4.74126 26.3582 2.9449 27.6285 1.29767C28.8988 -0.349556 30.3239 -0.428575 31.9038 1.06061Z"
                    style={{
                      transition: "0.5s ease-in-out",
                      fill: "rgb(112,97,162)",
                    }}
                  />
                  <path
                    d="M58.0764 1.06061L91.0719 42.7139C91.6906 43.4918 92 44.4165 92 45.4881C92 46.5597 91.6906 47.5106 91.0719 48.3409C79.136 63.0102 67.6331 77.1717 56.5631 90.8254C55.9955 91.4971 53.7148 93.1674 51.9577 90.6834C50.2007 88.1993 51.268 86.0318 51.9577 85.1381C62.2613 72.4496 72.9945 59.233 84.1572 45.4881L53.4205 6.68676C52.301 4.74126 52.3922 2.9449 53.6942 1.29767C54.9962 -0.349556 56.457 -0.428575 58.0764 1.06061Z"
                    style={{
                      transition: "0.5s ease-in-out",
                      fill: "rgb(112,97,162)",
                      opacity: 0.5,
                    }}
                  />
                </g>
              </svg>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "green",
                  mb: 4,
                  fontSize: "1rem",
                }}
              >
                Your Goal
              </Typography>

              <Box
                component="img"
                src={
                  gender === "female" ? DreamBodyFemaleImg : DreamBodyMaleImg
                }
                alt="dreamBody"
                sx={{
                  width: { xs: "300px", sm: "180px", md: "180px" },
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </Box>
          </Box>

          <ComparisonSection
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
          />
          <Button
            variant="contained"
            sx={{
              width: { xs: "70%", sm: "30%", lg: "20%" },
              px: 5,
              py: 1.3,
              borderRadius: "10px",
              backgroundColor: "#F68D2B",
              fontSize: "18px",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#ac621e" },
            }}
          >
            GET MY PLAN
          </Button>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "80%", md: "60%" },
                maxWidth: "600px",
              }}
            >
              <WeightLossGraph answers={answers} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h4" fontWeight={600}>
            You will also get <b>FREE</b> 🎁
          </Typography>
        </Box>

        {/* Grid Items */}
        {/* Wrapper to constrain width */}
        <Box sx={{ display: "flex", justifyContent: "center", px: 2 }}>
          <Grid
            container
            spacing={{ xs: 6, md: 4 }}
            justifyContent="center"
            sx={{ maxWidth: "1200px" }}
          >
            {FreeItems.map((item, index) => (
              <Grid key={index} item xs={12} sm={10} md={4}>
                <Box sx={{ position: "relative" }}>
                  {/* CARD */}
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      borderRadius: "14px",
                      display: "flex",
                      gap: 2,
                      alignItems: "flex-start",
                      height: "100%",
                    }}
                  >
                    {/* Image */}
                    <Box
                      sx={{
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={item.img}
                        alt={item.title}
                        sx={{
                          width: 110,
                          height: 130,
                          objectFit: "contain",
                        }}
                      />
                    </Box>

                    {/* Text */}
                    <Box sx={{ flex: 1, textAlign: "left" }}>
                      {/* Price */}
                      <Typography
                        sx={{
                          mb: 1,
                          backgroundColor: "#ff5029",
                          borderRadius: "8px",
                          p: 1,
                          color: "#fff",
                          display: "inline-block",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{ textDecoration: "line-through" }}
                        >
                          {item.price}
                        </Box>{" "}
                        <b>FREE</b>
                      </Typography>

                      <Typography sx={{ fontWeight: 600, mb: 1 }}>
                        {item.title}
                      </Typography>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Icon icon="mdi:check" width={18} color="green" />
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#39ab74" }}
                        >
                          INCLUDED FOR YOU
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* bottom decorative SVG (direct copy) */}
        <Box
          sx={{
            mt: 4,
            mb: 4,
            mx: "auto",
            p: 2,
            textAlign: "center",
            border: "2px solid #ccc",
            borderRadius: "12px",
            width: { xs: "90%", sm: "90%", md: "40%" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            color: "#696969",
          }}
        >
          <Icon
            icon="noto-v1:wrapped-gift"
            width={250}
            height={100}
            style={{ opacity: 0.9 }}
          />

          <Typography
            sx={{
              fontSize: "0.95rem",
              fontWeight: 500,
              lineHeight: 1.5,
              px: { xs: 1, sm: 0 },
            }}
          >
            Our clients report additional weight loss and eliminated cravings
            when using recipes from our Healthy Dessert Ebook combined with
            Guided Meditation.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            mb: 4,
            mx: "auto",
            width: { xs: "100%", sm: "80%", md: "60%" },
            textAlign: "center", // ensures text stays centered
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: { xs: "70%", sm: "35%", md: "25%" },
              px: 5,
              py: 1.3,
              borderRadius: "10px",
              backgroundColor: "#F68D2B",
              fontSize: "18px",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#ac621e" },
            }}
          >
            GET MY PLAN
          </Button>

          <Typography
            // variant="h4"
            sx={{
              fontSize: "2rem",
              // fontWeight: 600,
              mt: 1,
            }}
          >
            What is <b>Wall Pilates?</b>
          </Typography>

          <Typography
            sx={{
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "800px",
            }}
          >
            Wall Pilates is a refreshing blend of classic Pilates exercises with
            the added support of a wall, designed for all fitness levels and
            perfect for in-home practice. Like a gift that keeps on giving, Wall
            Pilates ensures that you don’t need an expensive studio membership
            to build strength, flexibility, and grace. With the wall as your
            steadfast partner, you can perform a plethora of exercises that
            enhance core stability and improve posture. The best part? Wall
            Pilates is your all-inclusive ticket to a streamlined physique
            without leaving your home, bringing fitness to your doorstep. No
            more excuses — the wall is waiting!
          </Typography>
        </Box>
      </Box>
    </>
  );
}
