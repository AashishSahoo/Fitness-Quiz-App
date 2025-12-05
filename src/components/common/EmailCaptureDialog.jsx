import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  Typography,
  FormHelperText,
} from "@mui/material";
import { Icon } from "@iconify/react";

export default function EmailCaptureDialog({ open, onSubmit }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError("");
    onSubmit(email);
    setEmail("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason === "backdropClick" || reason === "escapeKeyDown") {
          return;
        }
      }}
      maxWidth="sm"
      fullWidth
      disableEscapeKeyDown
      BackdropProps={{
        sx: {
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          padding: { xs: 1, sm: 2 },
          maxWidth: { xs: "95%", sm: "600px" },
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: { xs: "1.25rem", sm: "1.5rem" },
          display: "flex",
          justifyContent: "center",
          fontWeight: 600,
          pb: 1,
        }}
      >
        Wall pilates
      </DialogTitle>

      <DialogContent sx={{ px: { xs: 2, sm: 3 }, pb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              color: "#000",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Excellent
          </Typography>

          <Box
            sx={{
              width: { xs: "80px", sm: "95px" },
              display: "flex",
              alignItems: "center",
              svg: { width: "100%" },
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

          <Typography
            sx={{ color: "#000", fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            <b>436</b> reviews
          </Typography>
        </Box>

        <Typography
          sx={{
            mt: 2,
            mb: 2,
            color: "#000",
            fontWeight: 600,
            textAlign: "center",
            fontSize: {
              xs: "1.25rem",
              sm: "1.6rem",
              md: "1.8rem",
            },
            lineHeight: 1.3,
          }}
        >
          Analysis Complete! Your Personal Plan Is Ready
        </Typography>

        <Typography
          sx={{
            mb: 3,
            color: "#000",
            textAlign: "center",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            fontWeight: 500,
          }}
        >
          You Could Lose 20 kg If You Start Today
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 1.5, sm: 1 },
            mb: 2,
          }}
        >
          <TextField
            autoFocus
            size="small"
            fullWidth={true}
            placeholder="Email Address"
            type="email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            onKeyPress={handleKeyPress}
            sx={{
              maxWidth: { xs: "100%", sm: "300px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
            inputProps={{
              "aria-label": "Email address",
            }}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            fullWidth={false}
            sx={{
              backgroundColor: "#F68D2B",
              color: "#fff",
              fontWeight: 600,
              px: 3,
              py: 1,
              borderRadius: "8px",
              textTransform: "none",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              whiteSpace: "nowrap",
              minWidth: { xs: "100%", sm: "auto" },
              "&:hover": {
                backgroundColor: "#ac621e",
              },
              "&:active": {
                transform: "scale(0.98)",
              },
            }}
          >
            Get My Plan 👉
          </Button>
        </Box>
        {emailError && (
          <FormHelperText
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              color: "#ea1111ff",
              mb: 2,
            }}
          >
            {emailError}
          </FormHelperText>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            color: "#000",
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon icon="mdi:lock" width="18" height="18" color="#4CAF50" />
            <Typography variant="body2" sx={{ fontSize: "13px", ml: "4px" }}>
              Your information is secure with us
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Icon
              icon="grommet-icons:norton"
              width="18"
              height="18"
              style={{ opacity: 0.8 }}
            />
            <Icon
              icon="cib:mcafee"
              width="18"
              height="18"
              style={{ opacity: 0.8 }}
            />
          </Box>
        </Box>

        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            color: "#666",
            fontSize: "11px",
            lineHeight: 1.4,
          }}
        >
          By clicking you agree to our Privacy Policy. We respect your privacy.
          We will never sell, rent or share your email address. That's more than
          a policy, it's our personal guarantee!
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
