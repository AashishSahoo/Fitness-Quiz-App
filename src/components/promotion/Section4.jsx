import { Icon } from "@iconify/react";
import BetterPosture from "../../assets/pages/promotion/Section4BetterPosture.jpg";
import ImprovedStrength from "../../assets/pages/promotion/Section4ImprovedStrength.jpg";
import LongerLifespan from "../../assets/pages/promotion/Section4LongerLifespan.jpg";
import LowerStressAnxiety from "../../assets/pages/promotion/Section4LowerStress&Anxiety.jpg";
import ReducedBackPain from "../../assets/pages/promotion/Section4ReducedBackPain.jpg";
import WeightLoss from "../../assets/pages/promotion/Section4WeightLoss.jpg";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

export default function Section4name() {
  const Benefits = [
    {
      img: WeightLoss,
      title: "Weight Loss",
      description:
        "Excess weight poses big risks to our longevity, self-esteem and overall health. You can get rid of excess fat by doing Wall Pilates regularly. The practice will help you burn calories and create that energy deficit necessary to burn fat.",
    },
    {
      img: ImprovedStrength,
      title: "Improved Strength",
      description:
        "Do you find yourself constantly lacking energy or strength to do things you used to? A personalized workout plan will help you to feel more energetic and increase strength rapidly in as little as 10-minutes a day.",
    },
    {
      img: BetterPosture,
      title: "Better Posture",
      description:
        "Research has shown that people with better postures are viewed as better-looking. Additionally, maintaining correct posture leads to significantly less joint and back pain. Your personalized plan includes exercises aimed at drastically improving your posture.",
    },
    {
      img: ReducedBackPain,
      title: "Reduced Back Pain",
      description:
        "As the common saying goes, you’re only as old as your back feels. Thousands of people have successfully eliminated their back pain by doing Wall Pilates and you could be next!",
    },
    {
      img: LowerStressAnxiety,
      title: "Lower Stress & Anxiety",
      description:
        "Elevated stress and anxiety levels can lead to weight gain, depression and more. A healthy yoga practice may alleviate stress symptoms and allow you to live a more fullfiling life.",
    },
    {
      img: LongerLifespan,
      title: "Longer Lifespan",
      description:
        "Wouldn’t it be great to feel better and live longer? Exercise can help to prolong your lifespan and allow you to feel better, look more attractive and enjoy those extra years!",
    },
  ];

  return (
    <Box component="section" sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "22px", md: "34px" } }}
          >
            Discover The Benefits of <b>Wall Pilates</b>
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Here's what you can expect from Wall Pilates
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {Benefits.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={0}
                sx={{ borderRadius: 1, backgroundColor: "#F5F5F5" }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />

                <CardContent>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: "600",
                      mb: 1,
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ opacity: 0.8, textAlign: "center" }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
