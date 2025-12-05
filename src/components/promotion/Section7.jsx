import React from "react";
import { Box, Container, Typography } from "@mui/material";
import FoxLogo from "../../assets/FoxLogo.svg";
export default function Section7() {
  return (
    <Box component="section" sx={{ py: 6 }}>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 26, md: 32 },
            }}
          >
            <b>Wall Pilates</b> in the Media
          </Typography>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Typography
            sx={{
              fontSize: { xs: 20, md: 24 },
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            “The comfort and flexibility of in-home pilates classes with Wall
            Pilates have made it one of the fastest-growing fitness trends.”
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <img
            src={FoxLogo}
            alt="fox logo"
            loading="lazy"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
