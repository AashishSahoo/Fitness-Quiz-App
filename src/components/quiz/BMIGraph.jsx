import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function BMIGraph({ bmi }) {
  const segments = [
    { start: 15, end: 18.5, color: "#3b82f6" },
    { start: 18.5, end: 25, color: "#22c55e" },
    { start: 25, end: 30, color: "#f59e0b" },
    { start: 30, end: 40, color: "#ef4444" },
  ];

  const minBMI = 15;
  const maxBMI = 40;
  const totalRange = maxBMI - minBMI;
  const pointerPos = ((bmi - minBMI) / totalRange) * 100;

  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Box
        sx={{
          position: "relative",
          height: 20,
          overflow: "visible",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "100%",
            borderRadius: "50px",
            overflow: "hidden",
            border: "2px solid #e5e7eb",
          }}
        >
          <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
            {segments.map((seg, i) => {
              const width = ((seg.end - seg.start) / totalRange) * 100;
              return (
                <Box
                  key={i}
                  sx={{
                    width: `${width}%`,
                    backgroundColor: seg.color,
                    opacity: 0.3,
                  }}
                />
              );
            })}
          </Box>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              inset: 0,
              transformOrigin: "center",
              display: "flex",
            }}
          >
            {segments.map((seg, i) => {
              const width = ((seg.end - seg.start) / totalRange) * 100;
              return (
                <div
                  key={i}
                  style={{
                    width: `${width}%`,
                    height: "100%",
                    backgroundColor: seg.color,
                  }}
                />
              );
            })}
          </motion.div>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: `${pointerPos}%`,
            top: "-10px",
            height: "calc(100% + 20px)",
            width: "3px",
            backgroundColor: "#000",
            transform: "translateX(-50%)",
            zIndex: 20,
            borderRadius: "2px",
          }}
        />
      </Box>

      <Box sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}>
        {[15, 18.5, 25, 30, 35, 40].map((val) => (
          <Typography key={val} variant="caption" sx={{ fontWeight: 600 }}>
            {val}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
