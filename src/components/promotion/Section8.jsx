import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  CardContent,
} from "@mui/material";
import { Icon } from "@iconify/react";
import Img1 from "../../assets/pages/promotion/Section8Img1.png";
import Img2 from "../../assets/pages/promotion/Section8Img2.png";
import Img3 from "../../assets/pages/promotion/Section8Img3.png";

export default function Section6() {
  const cards = [
    {
      img: Img1,
      name: "Susan M.",
    },
    {
      img: Img2,
      name: "Jessica L.",
    },
    {
      img: Img3,
      name: "Maria J.",
    },
  ];

  return (
    <Box component="section" sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h5" sx={{ fontSize: { xs: 26, md: 32 } }}>
            Users Love
            <b>Wall Pilates</b>{" "}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {cards.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    display: "block",
                    padding: 5,
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
