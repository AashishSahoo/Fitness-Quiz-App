import React from "react";
import { Box, Skeleton, Container } from "@mui/material";

export default function PageSkeletonLoader() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 70,
          display: "flex",
          alignItems: "center",
          px: 2,
        }}
      >
        <Skeleton variant="rectangular" width="100%" height={40} />
      </Box>

      <Container maxWidth="md" sx={{ mt: 2 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={600}
          sx={{ borderRadius: 2 }}
        />
      </Container>
    </Box>
  );
}
