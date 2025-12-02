import React from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { Icon } from "@iconify/react";
import AppLogo from "../../assets/AppLogo.svg";

export default function MainAppBar({ language, onLanguageChange }) {
  const flags = {
    en: <Icon icon="twemoji:flag-united-states" width="26" />,
    es: <Icon icon="twemoji:flag-spain" width="26" />,
    fr: <Icon icon="twemoji:flag-france" width="26" />,
    de: <Icon icon="twemoji:flag-germany" width="26" />,
    it: <Icon icon="twemoji:flag-italy" width="26" />,
    pt: <Icon icon="twemoji:flag-portugal" width="26" />,
    pl: <Icon icon="twemoji:flag-poland" width="26" />,
    tr: <Icon icon="twemoji:flag-turkey" width="26" />,
  };

  const languages = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "it", label: "Italiano" },
    { code: "pt", label: "Português" },
    { code: "pl", label: "Polski" },
    { code: "tr", label: "Türkçe" },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#4e4371",
        borderBottom: "none",
        py: 1.3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={12} md={2}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: "center", sm: "center", md: "flex-start" }}
            >
              <img
                src={AppLogo}
                alt="logo"
                style={{ height: "32px", objectFit: "contain" }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={0}
            sm={0}
            md={6}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Typography sx={{ fontWeight: 700, color: "#fff" }}>
              Excellent
            </Typography>

            <Box
              sx={{
                width: "95px",
                display: "flex",
                alignItems: "center",
                svg: { width: "100%" },
              }}
            >
              <svg focusable="false" aria-hidden="true" viewBox="0 0 6248 1172">
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

            <Typography sx={{ color: "#fff" }}>
              <b>436</b> reviews
            </Typography>
          </Grid>

          <Grid
            item
            xs={0}
            sm={0}
            md={2}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value)}
              size="small"
              disableUnderline
              displayEmpty
              renderValue={(value) => {
                const selected = languages.find((l) => l.code === value);
                return (
                  <Box display="flex" alignItems="center" gap={1}>
                    {flags[selected.code]}
                    <span>{selected.label}</span>
                  </Box>
                );
              }}
              sx={{
                color: "#fff",
                minWidth: "150px",
                fontWeight: 600,
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused": { outline: "none" },
                "& .MuiSelect-icon": { color: "white" },
              }}
            >
              {languages.map((item) => (
                <MenuItem key={item.code} value={item.code}>
                  <Box display="flex" alignItems="center" gap={1}>
                    {flags[item.code]}
                    {item.label}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
