import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import Logo from "../../assets/Applogo2.svg";

export default function Section14() {
  return (
    <Box component="footer" sx={{ py: 4 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            loading="lazy"
            sx={{
              maxWidth: "120px",
              width: "100%",
              height: "auto",
              mb: 2,
            }}
          />

          <Typography
            variant="body1"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              mb: 2,
              fontSize: "15px",
            }}
          >
            <Link
              href="https://wallpilates.com/terms-and-conditions"
              target="_blank"
              underline="none"
              rel="noopener"
              sx={{ color: "#7061A2", textTransform: "uppercase" }}
            >
              Terms & Conditions{" "}
            </Link>

            <Link
              href="https://wallpilates.com/privacy-policy"
              target="_blank"
              underline="none"
              rel="noopener"
              sx={{ color: "#7061A2", textTransform: "uppercase" }}
            >
              Privacy & Cookies
            </Link>

            <Link
              href="https://wallpilates.com/cancellations-policy"
              target="_blank"
              underline="none"
              rel="noopener"
              sx={{ color: "#7061A2", textTransform: "uppercase" }}
            >
              Cancellations Policy{" "}
            </Link>

            <Link
              href="https://wallpilates.com/contact"
              target="_blank"
              underline="none"
              rel="noopener"
              sx={{ color: "#7061A2", textTransform: "uppercase" }}
            >
              Contact Us{" "}
            </Link>
          </Typography>

          {/* ADDRESS */}
          <Typography
            variant="body1"
            sx={{
              color: "#7061A2",
              fontSize: "12px",
              mb: 1,
            }}
          >
            WIRE SALAD OÜ Harjumaa, Tallinn linn, Juhkentali tn 8, 10132 company
            No. 16105764
          </Typography>

          {/* COPYRIGHT */}
          <Typography
            variant="body1"
            sx={{
              color: "#7061A2",
              fontSize: "12px",
            }}
          >
            © 2025 wallpilates.com All rights reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
