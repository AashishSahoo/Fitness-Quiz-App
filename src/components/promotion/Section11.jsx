import Img1 from "../../assets/pages/promotion/Section11Img1.png";
import Img2 from "../../assets/pages/promotion/Section11Img2.png";
import Img3 from "../../assets/pages/promotion/Section11Img3.png";
import Img4 from "../../assets/pages/promotion/Section11Img4.png";
import Img5 from "../../assets/pages/promotion/Section11Img5.png";
import Img6 from "../../assets/pages/promotion/Section11Img6.png";

import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Section11() {
  const list1 = [
    { id: 1, img: Img1 },
    { id: 2, img: Img2 },
    { id: 3, img: Img3 },
  ];

  const list2 = [
    { id: 4, img: Img4 },
    { id: 5, img: Img5 },
    { id: 6, img: Img6 },
  ];

  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 4, mt: 4 }}>
          <Typography variant="h4" sx={{ fontSize: { xs: 26, md: 32 } }}>
            <b>Social</b> Media <b>Buzz</b>
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            style={{ paddingBottom: "30px" }}
          >
            {list1.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.img}
                  alt={item.id}
                  style={{
                    width: "100%",
                    height: "auto",
                    padding: 5,
                    display: "block",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Grid
          container
          spacing={3}
          sx={{ display: { xs: "none", sm: "flex" }, mb: 2 }}
        >
          {list1.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <img
                src={item.img}
                alt={item.id}
                style={{
                  width: "100%",
                  height: "auto",
                  padding: 5,
                  display: "block",
                }}
              />
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          spacing={3}
          sx={{ display: { xs: "block", sm: "flex" } }}
        >
          {list2.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <img
                src={item.img}
                alt={item.id}
                style={{
                  width: "100%",
                  height: "auto",
                  padding: 5,
                  display: "block",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            width: { xs: "70%", sm: "35%", md: "27%" },
            px: 5,
            py: 1.3,
            mt: 5,
            borderRadius: "10px",
            backgroundColor: "#F68D2B",
            fontSize: "18px",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#ac621e" },
          }}
        >
          GET MY PLAN
        </Button>
      </Box>

      <Box
        sx={{
          width: "40%",
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
          "& svg": {
            width: "100%",
            height: "4vh",
            display: "block",
          },
        }}
      >
        <svg focusable="false" aria-hidden="true" viewBox="0 0 6248 1172">
          <path
            d="M1171.27 0.590088H0.450195V1171.41H1171.27V0.590088Z"
            fill="#06D300"
          />
          <path
            d="M585.86 229.18L681.12 492.55L961.04 501.77L740 673.76L817.74 942.82L585.86 785.75L353.98 942.82L431.71 673.76L210.67 501.77L490.59 492.55L585.86 229.18Z"
            fill="white"
          />
          <path
            d="M2440.34 0.590088H1269.52V1171.41H2440.34V0.590088Z"
            fill="#06D300"
          />
          <path
            d="M1854.93 229.18L1950.19 492.55L2230.12 501.77L2009.07 673.76L2086.81 942.82L1854.93 785.75L1623.05 942.82L1700.79 673.76L1479.74 501.77L1759.66 492.55L1854.93 229.18Z"
            fill="white"
          />
          <path
            d="M3709.41 0.590088H2538.59V1171.41H3709.41V0.590088Z"
            fill="#06D300"
          />
          <path
            d="M3124 229.18L3219.27 492.55L3499.19 501.77L3278.14 673.76L3355.88 942.82L3124 785.75L2892.12 942.82L2969.86 673.76L2748.81 501.77L3028.73 492.55L3124 229.18Z"
            fill="white"
          />
          <path
            d="M4978.48 0.590088H3807.66V1171.41H4978.48V0.590088Z"
            fill="#06D300"
          />
          <path
            d="M4393.07 229.18L4488.34 492.55L4768.26 501.77L4547.21 673.76L4624.95 942.82L4393.07 785.75L4161.19 942.82L4238.93 673.76L4017.88 501.77L4297.81 492.55L4393.07 229.18Z"
            fill="white"
          />
          <path
            d="M6247.55 0.590088H5076.73V1171.41H6247.55V0.590088Z"
            fill="#ABF370"
          />
          <path
            d="M5662.14 0.590088H5076.73V1171.41H5662.14V0.590088Z"
            fill="#06D300"
          />
          <path
            d="M5662.14 229.18L5757.41 492.55L6037.33 501.77L5816.29 673.76L5894.02 942.82L5662.14 785.75L5430.26 942.82L5508 673.76L5286.96 501.77L5566.88 492.55L5662.14 229.18Z"
            fill="white"
          />
        </svg>
      </Box>
    </>
  );
}
