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
import Img1 from "../../assets/pages/promotion/Section5Img1.png";
import Img2 from "../../assets/pages/promotion/Section5Img2.png";
import Img3 from "../../assets/pages/promotion/Section5Img3.png";

export default function Section6() {
  const cards = [
    {
      img: Img1,
      name: "Susan M.",
      time: "2 weeks",
      review:
        "I completely fell in love with Wall Pilates after the first day! My body felt at ease and I have saved more than $200 on gym memberships, gas and personal trainer fees also ...",
    },
    {
      img: Img2,
      name: "Jessica L.",
      time: "4 weeks",
      review:
        "I started using Wall Pilates about 4 weeks ago and the results speak for themselves: I lost more than 16 pounds and feel more flexible than ever before. I couldn’t recommend this enough!",
    },
    {
      img: Img3,
      name: "Maria J.",
      time: "7 weeks",
      review:
        "My goal was to lose some stubborn belly fat and Wall Pilates poses definitely helped me! I felt the muscle burn from day one and I never had to leave my living room! I’m 22.3 pounds lighter!",
    },
  ];

  return (
    <Box component="section" sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h5" sx={{ fontSize: { xs: 26, md: 32 } }}>
            <b>92%</b> of People with <b>Similar Profiles</b> Achieved Their
            Goals with <b>Wall Pilates</b>
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {cards.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={1}
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <Box>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                      padding: 15,
                    }}
                  />
                </Box>

                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={7}>
                      <Typography variant="h3" sx={{ fontSize: 20 }}>
                        {item.name}
                      </Typography>

                      <Box sx={{ display: "flex", gap: 0.3, mt: 0.5 }}>
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Icon
                            key={i}
                            icon="mdi:star"
                            width="20"
                            height="20"
                            color="#ffb400"
                          />
                        ))}
                      </Box>
                    </Grid>

                    <Grid item xs={5} sx={{ textAlign: "right" }}>
                      <Typography variant="h4" sx={{ fontSize: 20 }}>
                        {item.time}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Typography
                    sx={{
                      mt: 2,
                      fontSize: 15,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.review}
                  </Typography>
                </CardContent>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
