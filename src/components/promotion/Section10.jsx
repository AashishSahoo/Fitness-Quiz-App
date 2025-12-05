import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { Icon } from "@iconify/react";
import MobileImg from "../../assets/pages/promotion/Section10Img.png";

export default function Section10() {
  const savingsList = [
    { label: "Weight Loss Surgery", price: "$3,000.00" },
    { label: "Private Yoga Classes", price: "$1,600.00" },
    { label: "Back Pain - Chiropractor Visits", price: "$1,200.00" },
    { label: "Improved Strength - Gym Membership", price: "$500.00" },
    { label: "Meditation Workshop", price: "$299.00" },
    { label: "Longer Lifespan", price: "Invaluable!" },
    { label: "Happier Life with Less Pain", price: "Invaluable!" },
  ];

  const summaryList = [
    { label: "Total Package Value", price: "$6,599.00" },
    { label: "Monthly Plan Price", price: "$30.00", highlight: true },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "1.6rem", md: "2rem" }, fontWeight: 600 }}
          >
            Here's What You're Saving With <b>Wall Pilates</b>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <List disablePadding>
              {savingsList.map((item, index) => (
                <Box key={index}>
                  <ListItem
                    sx={{
                      px: 0,
                      py: 1.2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Icon
                        icon="mdi:check-circle"
                        width={26}
                        height={26}
                        color="#7061A2"
                      />
                      <Typography fontWeight={600}>{item.label}</Typography>
                    </Box>

                    <Typography sx={{ color: "#FF5029", fontWeight: 600 }}>
                      {item.price}
                    </Typography>
                  </ListItem>
                  <Divider />
                </Box>
              ))}
            </List>

            <List disablePadding>
              {summaryList.map((item, index) => (
                <Box key={index}>
                  <ListItem
                    sx={{
                      px: 0,
                      py: 1.2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#000",
                      }}
                    >
                      {item.label}
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: !item.highlight ? "#FF5029" : "#39AB74",
                      }}
                    >
                      {item.price}
                    </Typography>
                  </ListItem>
                  <Divider />
                </Box>
              ))}
              <Divider sx={{ height: 1 }} />

              <ListItem
                sx={{
                  px: 0,
                  py: 1.2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: "#000",
                  }}
                >
                  Savings
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: "#39AB74",
                  }}
                >
                  $6,569.00
                </Typography>
              </ListItem>
            </List>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <img
              src={MobileImg}
              alt="device screenshot"
              style={{
                width: "100%",
                maxWidth: 420,
                height: "auto",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
