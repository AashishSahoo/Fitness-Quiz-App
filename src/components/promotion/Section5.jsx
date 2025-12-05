import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Rating,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Icon } from "@iconify/react";

export default function Section5() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography variant="h4">
            Meet the <b>Happy</b> Women Who Use Wall Pilates
          </Typography>
        </Box>

        {isMobile ? (
          <Box sx={{ position: "relative", overflow: "hidden" }}>
            <Box
              sx={{
                display: "flex",
                transition: "transform 0.4s ease",
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {testimonials.map((item, index) => (
                <Box key={index} sx={{ minWidth: "100%", px: 1 }}>
                  <Card
                    elevation={1}
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      backgroundColor: "#fff",
                    }}
                  >
                    <CardContent>
                      <Box sx={{ width: "100%", mb: 2 }}>
                        <video
                          src={item.video}
                          controls
                          preload="metadata"
                          playsInline
                          style={{
                            width: "100%",
                            borderRadius: 12,
                            outline: "none",
                          }}
                        />
                      </Box>

                      <Typography
                        variant="h3"
                        sx={{ fontSize: "1.4rem", fontWeight: 700 }}
                      >
                        {item.name}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mt: 1,
                        }}
                      >
                        <Rating value={item.rating} readOnly />
                        <Typography
                          variant="h3"
                          sx={{ fontSize: "1.1rem", fontWeight: 600 }}
                        >
                          {item.duration}
                        </Typography>
                      </Box>

                      <Typography sx={{ mt: 1, opacity: 0.9 }}>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                px: 2,
                alignItems: "center",
              }}
            >
              <IconButton onClick={handlePrev}>
                <Icon icon="mdi:chevron-left" width="28" height="28" />
              </IconButton>

              <Box sx={{ display: "flex", gap: 1 }}>
                {testimonials.map((_, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: i === current ? "black" : "#ccc",
                      transition: "0.3s",
                    }}
                  />
                ))}
              </Box>

              <IconButton onClick={handleNext}>
                <Icon icon="mdi:chevron-right" width="28" height="28" />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {testimonials.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={1}
                  sx={{
                    borderRadius: 3,
                    height: "100%",
                    overflow: "hidden",
                    backgroundColor: "#fff",
                  }}
                >
                  <CardContent sx={{ pb: 1 }}>
                    <Box sx={{ width: "100%", mb: 2 }}>
                      <video
                        src={item.video}
                        controls
                        preload="metadata"
                        playsInline
                        style={{
                          width: "100%",
                          borderRadius: 12,
                          outline: "none",
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{ fontSize: "1.4rem", fontWeight: 700 }}
                    >
                      {item.name}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mt: 1,
                      }}
                    >
                      <Rating value={item.rating} readOnly />
                      <Typography
                        variant="h3"
                        sx={{ fontSize: "1.1rem", fontWeight: 600 }}
                      >
                        {item.duration}
                      </Typography>
                    </Box>

                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

const testimonials = [
  {
    name: "Taylor F.",
    duration: "2 weeks",
    rating: 5,
    video:
      "https://d1tf9w75wfom5c.cloudfront.net/wallpilates/testimonial-billo-1.mp4#t=0.1",
    description:
      "I have been struggling with weight gain for the past few years due to slower metabolism but Wall Pilates changed that completely! I lost more than 25 pounds in weeks!",
  },
  {
    name: "Leslie A.",
    duration: "4 weeks",
    rating: 5,
    video:
      "https://d1tf9w75wfom5c.cloudfront.net/wallpilates/testimonial-billo-2.mp4#t=0.1",
    description:
      "Wall Pilates is the only workout that kept me on track. I have ADHD and get bored easily, but this workout is extremely fulfilling!",
  },
  {
    name: "Courtney H.",
    duration: "7 weeks",
    rating: 5,
    video:
      "https://d1tf9w75wfom5c.cloudfront.net/wallpilates/testimonial-billo-3.mp4#t=0.1",
    description:
      "My goal was to improve my booty and ABS — Wall Pilates helped so much! I’m 15 pounds lighter and excited for summer!",
  },
];
