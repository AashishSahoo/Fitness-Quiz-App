import BeforeAfterImg from "../../assets/pages/promotion/Section1Before_After.webp";

import FoxLogo from "../../assets/FoxLogo.svg";
import BusinessInsiderLogo from "../../assets/BusinessInsiderLogo.svg";
import USATodayLogo from "../../assets/USATodayLogo.svg";
import YahooNewsLogo from "../../assets/YahooNewsLogo.svg";

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Link,
  Chip,
} from "@mui/material";
import { Icon } from "@iconify/react";

export default function Section1() {
  const [selectedPlan, setSelectedPlan] = useState("4-week");
  const [agreedToTerms, setAgreedToTerms] = useState(true);

  const plans = [
    {
      id: "1-week",
      label: null,
      title: "1-Week Plan",
      originalPrice: "$17.77",
      discountedPrice: "$6.93",
      perDayOriginal: "$2.54",
      perDayDiscounted: "$0.99",
      buttonVariant: "outlined",
    },
    {
      id: "4-week",
      label: "Most Popular",
      title: "4-Week Plan",
      originalPrice: "$38.95",
      discountedPrice: "$15.19",
      perDayOriginal: "$1.39",
      perDayDiscounted: "$0.54",
      buttonVariant: "contained",
    },
    {
      id: "12-week",
      label: "Best Value!",
      title: "12-Week Plan",
      originalPrice: "$94.85",
      discountedPrice: "$36.99",
      perDayOriginal: "$1.13",
      perDayDiscounted: "$0.44",
      buttonVariant: "outlined",
    },
  ];

  const benefits = [
    "Reduce up to 97% of stubborn fat",
    "10X your flexibility & tone your body",
    "Rank amongst the 1% body attractiveness",
  ];

  const mediaLogos = [
    { src: FoxLogo },
    { src: BusinessInsiderLogo },
    { src: USATodayLogo },
    { src: YahooNewsLogo },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: { xs: "block", md: "block" },
                overflow: "hidden",
              }}
            >
              <img
                src={BeforeAfterImg}
                alt="Before After Desktop"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Box>
            <Box
              sx={{
                mt: 1,
                p: 3,
                display: "flex",
                alignItems: "center",
                borderRadius: 2,
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 90,
                  height: 90,
                  minWidth: 90,
                  borderRadius: "50%",
                  backgroundColor: "#DDDDDD",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon
                  icon="simple-icons:fox"
                  style={{ fontSize: 65, color: "#000" }}
                />
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                  textAlign: "left",
                  lineHeight: 1.4,
                }}
              >
                "Wall Pilates becomes a #1 home fitness trend for women: many
                have already lost tens of pounds of excess weight"
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                mb: 3,
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexWrap: "nowrap",
              }}
            >
              <Box
                sx={{
                  width: 95,
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  svg: {
                    width: "100%",
                    height: "auto",
                    display: "block",
                  },
                }}
              >
                <svg
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 6248 1172"
                >
                  <path
                    d="M1171.27 0.590088H0.450195V1171.41H1171.27V0.590088Z"
                    fill="#06D300"
                  />
                  <path
                    d="M585.86 229.18L681.12 492.55L961.04 501.77L740 673.76L817.74 942.82L585.86 785.75L353.98 942.82L431.71 673.76L210.67 501.77L490.59 492.55L585.86 229.18Z"
                    fill="white"
                  />
                  <path
                    d="M2440.34 0.590088H1269.52V1171.41H2440.34V0.590088Z"
                    fill="#06D300"
                  />
                  <path
                    d="M1854.93 229.18L1950.19 492.55L2230.12 501.77L2009.07 673.76L2086.81 942.82L1854.93 785.75L1623.05 942.82L1700.79 673.76L1479.74 501.77L1759.66 492.55L1854.93 229.18Z"
                    fill="white"
                  />
                  <path
                    d="M3709.41 0.590088H2538.59V1171.41H3709.41V0.590088Z"
                    fill="#06D300"
                  />
                  <path
                    d="M3124 229.18L3219.27 492.55L3499.19 501.77L3278.14 673.76L3355.88 942.82L3124 785.75L2892.12 942.82L2969.86 673.76L2748.81 501.77L3028.73 492.55L3124 229.18Z"
                    fill="white"
                  />
                  <path
                    d="M4978.48 0.590088H3807.66V1171.41H4978.48V0.590088Z"
                    fill="#06D300"
                  />
                  <path
                    d="M4393.07 229.18L4488.34 492.55L4768.26 501.77L4547.21 673.76L4624.95 942.82L4393.07 785.75L4161.19 942.82L4238.93 673.76L4017.88 501.77L4297.81 492.55L4393.07 229.18Z"
                    fill="white"
                  />
                  <path
                    d="M6247.55 0.590088H5076.73V1171.41H6247.55V0.590088Z"
                    fill="#ABF370"
                  />
                  <path
                    d="M5662.14 0.590088H5076.73V1171.41H5662.14V0.590088Z"
                    fill="#06D300"
                  />
                  <path
                    d="M5662.14 229.18L5757.41 492.55L6037.33 501.77L5816.29 673.76L5894.02 942.82L5662.14 785.75L5430.26 942.82L5508 673.76L5286.96 501.77L5566.88 492.55L5662.14 229.18Z"
                    fill="white"
                  />
                </svg>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  mb: 0,
                  whiteSpace: "nowrap",
                }}
              >
                Rated 4.8/5 by <strong>1000's</strong> of{" "}
                <strong>verified</strong> customers
              </Typography>
            </Box>

            <Typography variant="h3" sx={{ mb: 1, color: "#333" }}>
              <strong>Lose 10kg With Your Personal Plan</strong>
            </Typography>

            <Typography variant="h6">
              <strong>Lose weight</strong>, improve <strong>flexibility</strong>{" "}
              & <strong>tone</strong> your body from the comfort of your home!
            </Typography>

            <List sx={{ mb: 3 }}>
              {benefits.map((benefit, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Icon
                      icon="mdi:check-circle"
                      style={{ fontSize: 20, color: "#7061a2" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={benefit} />
                </ListItem>
              ))}
            </List>

            <Box
              sx={{
                mb: 3,
                p: 2,
                backgroundColor: "#deeddf",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <Icon
                  icon="mingcute:tag-2-line"
                  strokeWidth={2}
                  height={28}
                  width={28}
                />

                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Your promo code applied!
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  px: 2,
                  py: 0.5,
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  mb: 1,
                  width: "100%",
                  border: "1px solid #4caf50",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Kdjcb_dec25
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  fontSize: 14,
                }}
              >
                <Typography variant="caption">Expires in:</Typography>
                <Typography variant="caption">07:35</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              {plans.map((plan) => (
                <Box
                  key={plan.id}
                  sx={{
                    mb: 2,
                    p: 2,
                    backgroundColor: plan.id === "4-week" ? "#f0f0ff" : "#fff",
                    // border:
                    //   selectedPlan === plan.id
                    //     ? "2px solid #e60909ff"
                    //     : "1px solid #e0e0e0",

                    border:
                      plan.id === "1-week"
                        ? " 2px solid #ccc"
                        : plan.id === "4-week"
                        ? "2px solid #a578c8"
                        : "2px solid #2f9c79",
                    borderRadius: 2,
                    cursor: "pointer",
                    position: "relative",
                    transition: "all 0.2s",
                    "&:hover": {
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    },
                  }}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.label && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: -12,
                        left: 16,
                        px: 2,
                        py: 0.5,
                        backgroundColor:
                          plan.label === "Best Value!" ? "#2f9c79" : "#a578c8",
                        color: "#fff",
                        borderRadius: 5,
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {plan.label}
                    </Box>
                  )}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        {plan.title}
                      </Typography>
                      <Typography variant="h6" sx={{ mb: 0.5 }}>
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "#ff5039",
                            fontSize: 14,
                            marginRight: 8,
                          }}
                        >
                          {plan.originalPrice}
                        </span>
                        <span style={{ fontWeight: 700, color: "#000" }}>
                          {plan.discountedPrice}
                        </span>
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: "#666",
                          fontSize: 14,
                        }}
                      >
                        <Icon icon="mdi:cog-outline" style={{ fontSize: 16 }} />
                        <Typography variant="caption">
                          Free Diet Guide
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ textAlign: "right" }}>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "#999",
                            fontSize: 12,
                          }}
                        >
                          {plan.perDayOriginal}
                        </span>{" "}
                        <span style={{ fontWeight: 700, fontSize: 18 }}>
                          <Chip
                            label={plan.perDayDiscounted}
                            sx={{ backgroundColor: "#7061a2", color: "#fff" }}
                          />
                        </span>{" "}
                        <span style={{ fontSize: 12 }}>per day</span>
                      </Typography>
                      <Button
                        variant={plan.buttonVariant}
                        color="secondary"
                        size="small"
                        sx={{
                          textTransform: "none",
                          fontWeight: 700,
                          backgroundColor:
                            plan.buttonVariant === "contained"
                              ? "transparent"
                              : "#F68D2B",
                          color:
                            plan.buttonVariant === "contained"
                              ? "#F68D2B"
                              : "#fff",
                          borderColor: "#F68D2B",
                          "&:hover": {
                            backgroundColor:
                              plan.buttonVariant === "contained"
                                ? "transparent"
                                : "#ac621e",
                            borderColor: "#ac621e",
                          },
                        }}
                      >
                        GET MY PLAN 👉
                      </Button>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <Checkbox
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                sx={{
                  mt: -1.5,
                  color: "#7061a2",
                  "&.Mui-checked": {
                    color: "#7061a2",
                  },
                }}
              />

              <Typography variant="body2" sx={{ color: "#000" }}>
                I agree with the{" "}
                <Link href="#" underline="always" sx={{ color: "#7061a2" }}>
                  Privacy Policy
                </Link>{" "}
                &{" "}
                <Link href="#" underline="always" sx={{ color: "#7061a2" }}>
                  Terms and Conditions
                </Link>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#666",
              }}
            >
              <Icon icon="mdi:lock" style={{ fontSize: 16 }} />
              <Typography variant="caption" sx={{ color: "#000" }}>
                Guaranteed safe checkout
              </Typography>
              <Box sx={{ display: "flex", gap: 1, ml: 1 }}>
                <Icon icon="logos:visa" style={{ fontSize: 16 }} />
                <Icon icon="logos:mastercard" style={{ fontSize: 16 }} />
                <Icon icon="logos:paypal" style={{ fontSize: 16 }} />
              </Box>
            </Box>

            <Typography
              variant="caption"
              sx={{ display: "block", color: "#999", mb: 1 }}
            >
              To avoid disruption, by purchasing you consent to auto-renewal at
              standard rates at the end of the introductory offer, until you
              cancel. Unsubscribe anytime.
            </Typography>
          </Grid>

          <Grid item sm={12} lg={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  display: { xs: "block", md: "block" },
                  alignItems: "center",
                  justifyContent: "center",
                  fontStyle: "bold",
                  textTransform: "uppercase",
                  color: "#000",
                  mb: 1,
                }}
              >
                AS SEEN ON
              </Typography>

              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  width: "100%",
                  overflow: "hidden",
                  py: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 3, sm: 4 },
                    animation: "scrollMobile 25s linear infinite",
                    width: "max-content",
                    "@keyframes scrollMobile": {
                      "0%": { transform: "translateX(0)" },
                      "100%": {
                        transform: "translateX(calc(-100% / 3))",
                      },
                    },
                  }}
                >
                  {[...Array(1)].map((_, setIndex) => (
                    <Box
                      key={setIndex}
                      sx={{
                        display: "flex",
                        gap: { xs: 3, sm: 4 },
                        flexShrink: 0,
                      }}
                    >
                      {mediaLogos.map((logo, index) => (
                        <Box
                          key={`mobile-${setIndex}-${index}`}
                          component="img"
                          src={logo.src}
                          alt="media-logo"
                          sx={{
                            height: { xs: 20, sm: 24 },
                            width: "auto",
                            objectFit: "contain",
                            flexShrink: 0,
                            opacity: 0.9,
                          }}
                        />
                      ))}
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  width: "60vh",
                  overflow: "hidden",
                  py: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    animation: "scrollDesktop 18s linear infinite",
                    "@keyframes scrollDesktop": {
                      "0%": { transform: "translateX(0)" },
                      "100%": {
                        transform: "translateX(-50%)",
                      },
                    },
                  }}
                >
                  {[...Array(2)].map((_, setIndex) => (
                    <Box
                      key={setIndex}
                      sx={{
                        display: "flex",
                        gap: 6,
                        flexShrink: 0,
                      }}
                    >
                      {mediaLogos.map((logo, index) => (
                        <Box
                          key={`desktop-${setIndex}-${index}`}
                          component="img"
                          src={logo.src}
                          alt="media-logo"
                          sx={{
                            height: 30,
                            objectFit: "contain",
                            flexShrink: 0,
                            opacity: 0.9,
                          }}
                        />
                      ))}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
