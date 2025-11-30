import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",

          // Small: column (text above icons)
          // Medium & Large: row (text + icons same row)
          flexDirection: { xs: "column", md: "row" },

          alignItems: "center",
          justifyContent: "center",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* TEXT */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            color: "#fff",
            fontSize: "16px",
            fontFamily: "Poppins, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          As seen on:
        </Typography>

        {/* ICONS ROW */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            flexWrap: "nowrap", // ALWAYS keep icons in same row
            justifyContent: "center",
            alignItems: "center",
            mx: 3,
          }}
        >
          <Icon
            icon="lineicons:yahoo"
            width="80"
            height="80"
            style={{ color: "#fff" }}
          />
          <Icon
            icon="simple-icons:fox"
            width="80"
            height="80"
            style={{ color: "#fff" }}
          />
          <Icon
            icon="arcticons:usaa"
            width="80"
            height="80"
            style={{ color: "#fff" }}
          />
          <Icon
            icon="carbon:business-metrics"
            width="80"
            height="80"
            style={{ color: "#fff" }}
          />
        </Box>
      </Box>
    </Container>
  );
}
