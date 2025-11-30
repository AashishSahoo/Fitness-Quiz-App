import React from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

export default function SecureInfoSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        color: "#fff",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Icon icon="mdi:lock" width="18" height="18" color="#fff" />
        <Typography variant="body1" sx={{ fontSize: "14px", ml: "4px" }}>
          Your information is secure with us
        </Typography>
      </Box>

      {/* Right Section — Replace icons as needed */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Icon
          icon="grommet-icons:norton"
          width="18"
          height="18"
          style={{ opacity: 0.8 }}
        />

        <Icon
          icon="cib:mcafee"
          width="18"
          height="18"
          style={{ opacity: 0.8 }}
        />
      </Box>
    </Box>
  );
}
