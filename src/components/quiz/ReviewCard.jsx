import React from "react";
import {
  Box,
  Card,
  Typography,
  Avatar,
  Rating,
  IconButton,
} from "@mui/material";
import { Icon } from "@iconify/react";
import profilePhoto from "../../assets/quizQuestion/Q33/Q33_ReviewCardProfilePhoto.jpg";
import beforePhoto from "../../assets/quizQuestion/Q33/Q33_ReviewCard_beforPhoto.jpg";
import afterPhoto from "../../assets/quizQuestion/Q33/Q33_ReviewCard_AfterPhoto.png";

export default function ReviewCard() {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: 500,
        mx: "auto",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: { xs: -5, sm: -10 },
          top: { xs: -15, sm: -20 },
          display: "flex",
          gap: 1,
          transform: "rotate(5deg)",
          zIndex: 10,
        }}
      >
        <Box
          component="img"
          src={beforePhoto}
          alt="body"
          sx={{
            width: { xs: 40, sm: 80 },
            height: { xs: 40, sm: 80 },
            objectFit: "cover",
            borderRadius: 1.5,
            boxShadow: 3,
          }}
        />
        <Box
          component="img"
          src={afterPhoto}
          alt="body2"
          sx={{
            width: { xs: 40, sm: 80 },
            height: { xs: 40, sm: 80 },
            objectFit: "cover",
            borderRadius: 1.5,
            boxShadow: 3,
          }}
        />
      </Box>

      <Card
        sx={{
          p: { xs: 2, sm: 2.5 },
          borderRadius: 3,
          position: "relative",
          boxShadow: "none",
          bgcolor: "#f2f2f2",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            src={profilePhoto}
            alt="User"
            sx={{ width: 48, height: 48 }}
          />

          <Box>
            <Typography sx={{ fontWeight: 700 }}>
              Camille E. Camptugan
            </Typography>

            <Typography fontSize={14} color="grey.600">
              Beauty advisor · 74 reviews
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Rating value={5} readOnly size="small" />
              <Typography fontSize={13} color="grey.600">
                14 days ago
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Review Text */}
        <Typography
          sx={{
            mt: 1.5,
            fontSize: 15,
            lineHeight: 1.4,
            textAlign: "left",
            pr: { xs: 2, sm: 10 },
          }}
        >
          Your girl is down 16 pounds this year after finding Wall Pilates!
          Guess who is ready for beach holidays this year haha x
        </Typography>

        {/* Footer Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <IconButton size="small">
            <Icon icon="mdi:heart-outline" width="20" />
          </IconButton>
          <Typography fontSize={13} color="grey.700">
            14
          </Typography>

          <IconButton size="small">
            <Icon icon="mdi:share-variant" width="20" />
          </IconButton>

          <Typography fontSize={13} color="grey.700">
            Share
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
