import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const ComparisonRow = ({ icon, label, value, bgColor, iconColor }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-start",
      gap: 1,
      p: 1.1,
      mb: 0,
    }}
  >
    <Box
      sx={{
        width: "50px",
        height: "50px",
        minWidth: "50px",
        backgroundColor: bgColor,
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon icon={icon} width="28" height="28" color={iconColor} />
    </Box>

    <Box sx={{ flex: 1, minWidth: 0, textAlign: "left" }}>
      <Typography
        sx={{
          fontSize: "0.95rem",
          fontWeight: 600,
          color: "#333",
          mb: 0.2,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontSize: "0.85rem",
          color: "#000",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {value}
      </Typography>
    </Box>
  </Box>
);

const ComparisonColumn = ({ data }) => (
  <Box sx={{ ml: { md: 4 }, mr: { md: 4 } }}>
    {data.map((item, idx) => (
      <ComparisonRow key={idx} {...item} />
    ))}
  </Box>
);

export default function ComparisonSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nowData = [
    {
      icon: "icomoon-free:lab",
      label: "Body fat",
      value: "Normal",
      bgColor: "#fee2e2",
      iconColor: "#dc2626",
    },
    {
      icon: "icon-park-solid:muscle",
      label: "Muscle density",
      value: "Medium",
      bgColor: "#fee2e2",
      iconColor: "#dc2626",
    },
    {
      icon: "mdi:yoga",
      label: "Wall Pilates experience",
      value: "Intermediate",
      bgColor: "#fee2e2",
      iconColor: "#dc2626",
    },
    {
      icon: "fontisto:test-tube-alt",
      label: "Hormonal balance",
      value: "Intermediate",
      bgColor: "#fee2e2",
      iconColor: "#dc2626",
    },
    {
      icon: "jam:battery-charging",
      label: "Metabolism",
      value: "Normal",
      bgColor: "#fee2e2",
      iconColor: "#dc2626",
    },
  ];

  const goalData = [
    {
      icon: "icomoon-free:lab",
      label: "Body fat",
      value: "Normal",
      bgColor: "#dcfce7",
      iconColor: "#16a34a",
    },
    {
      icon: "icon-park-solid:muscle",
      label: "Muscle density",
      value: "High",
      bgColor: "#dcfce7",
      iconColor: "#16a34a",
    },
    {
      icon: "mdi:yoga",
      label: "Wall Pilates experience",
      value: "Advanced",
      bgColor: "#dcfce7",
      iconColor: "#16a34a",
    },
    {
      icon: "fontisto:test-tube-alt",
      label: "Hormonal balance",
      value: "Fully Balanced",
      bgColor: "#dcfce7",
      iconColor: "#16a34a",
    },
    {
      icon: "jam:battery-charging",
      label: "Metabolism",
      value: "Fast",
      bgColor: "#dcfce7",
      iconColor: "#16a34a",
    },
  ];

  return (
    <Box
      sx={{
        p: 3,
        mb: 2,
        backgroundColor: "#F5F5F5",
        borderRadius: "16px",
        maxWidth: "900px",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "grid" },
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
        }}
      >
        <ComparisonColumn data={nowData} />
        <ComparisonColumn data={goalData} />
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              transform: `translateX(-${activeSlide * 100}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Box sx={{ minWidth: "100%", px: 2 }}>
              <ComparisonColumn data={nowData} />
            </Box>

            <Box sx={{ minWidth: "100%", px: 2 }}>
              <ComparisonColumn data={goalData} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mt: 3,
          }}
        >
          {[0, 1].map((i) => (
            <Box
              key={i}
              onClick={() => setActiveSlide(i)}
              sx={{
                width: activeSlide === i ? "32px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: activeSlide === i ? "#7061a2" : "#d1d5db",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
