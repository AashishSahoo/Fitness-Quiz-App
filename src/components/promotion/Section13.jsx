import React from "react";
import { Box, Container, Typography, Link, Button } from "@mui/material";

export default function Section13() {
  return (
    <Box component="section" sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            border: "2px solid #7061A2",
            borderRadius: 5,
            py: 5,
            px: 4,
            position: "relative",
            overflow: "visible",
          }}
        >
          <Typography variant="h4" sx={{ fontSize: { xs: 26, md: 32 }, mb: 4 }}>
            <b>30-DAY MONEY BACK GUARANTEE</b>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 2,
              color: "#444",
              lineHeight: 1.7,
              textAlign: "left",
            }}
          >
            We believe that our plan may work for you and you’ll get results in
            4 weeks! We are so convinced that Wall Pilates can help you that we
            are willing to offer money-back guarantee if you don’t like the
            results and can show that you followed the plan daily.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: "#444",
              lineHeight: 1.7,
              textAlign: "left",
            }}
          >
            Find more about applicable limitations in our{" "}
            <Link
              href="https://wallpilates.com/money-back-policy"
              target="_blank"
              underline="always"
              rel="noopener"
              sx={{ color: "#7061A2", fontWeight: 500 }}
            >
              money-back policy
            </Link>
            .
          </Typography>

          <Box
            component="img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAACBCAMAAADJ2QWBAAAAwFBMVEVHcEz///////////////////////////////////////////////////////////////////////////////9wYaL////t6/OCda729fl5a6iCda3b1+iUiLnAutalnMW3sNDJw9y3sNGmnMXk4e3JxNzb1+fk4e7SzeKLfrOupsudkr+Lf7OTiLl5a6eckr+upsqvpsu4sNDSzuLJxN2Bda2KfrOvpsrButbt6/TJw9vKxNzSzeGLf7SlncXAutcqY+YtAAAAFXRSTlMAECAwQFBgb3B/gI+Qn6CvsL/P3+8tfMkfAAAHC0lEQVR42s1bbUPiOBCmtbCIolcKLYW+8SIiiMp6uu7e3u3//1eHNsmkSZpp065382nNtnnyTOYtk9L5/4vVHXq+Px4Nu2ykn49cOJ3fJV/GPhXv3DoN2ENu5Pfg2q7PizfsXfgFOe+0L7bnYzLstC3voJ8Pe+1XkX6nVen5lWRsd1oUpt/gOJvcrQIOaBOfRt7oX26nHbFsp3s+pqDTyYeccClmPnAXUtPuOU5Tws4FJQmgBOaY/MhWM/b3vqBpt2eOfOYK27aalMtWtGdD3C+irSwmGpkFwtPemQnouQgazDSgsLUg3RZANydQrUyDxn5kCzOE3yaoTBOB7qgu6hAUu978SOJJJZntk81mA9g9Q6pvd5P6Eq/NgkafvPZtYiY35P16duzqfQVXdWiSDkgILNvO1zRbnCTZPc5LnkhMch9RkGq+h10U8l68eFQ99WiwsTaZUZ7tsAVIAJYZ35MAVSsCl6DOI18tSxF3aoDaI+FImGrJeMp8U8GcyLhVP4k/40RBkiIsWeC1VbvuXRV2KgBiyepu9r6O+PgTRm/nKo/1nJp1b1AApdoNhfC437DnedgY6uR6JehXFejbTI76a1UuhP0Y1gFd83sakHnVceNI1nTLryWsDnvNF0kgAc2xSG5N1Gm+X7Xu3fIAy3zsLzylx8o0P9ZbMqt79wWfYaBaWLnM+UphB9pKVNYuGEagwYR9zMRiCid7qQR9zD3mNKiVVf7YB1mpTnbwtPpUnC7SJHj5uUwYxO1plD9yX4yEqH4f+IgfFv8vy6e8xI1pXkzQWN2/pEHpRlEKPBGXxbnuC++tEapLFgtjRRpIcCO+Ir4uK3ihA2WwAYlpcnzp4qVhOJMsOC4Fzd/4myPGv51WKBYt8kwmmcNMAwqu9igZY1ClpnBlstsPreGgYMUpryg4BODBKRUc7hkHhQoik3K7Z1cqvxPBhBc4KCg0418GC8aTznPpRKkGVEYlqsOOlI5UHa557g8RS4EAiqNWPEE+C/u6IKDvS7idFUF1qCGJ/dVOkE+CQTyzf1PYP1WgE9kUP8RFqYoul3ABcXZLYEtA78WI8uRXIevJhdo/kBAAlgeVItGscKLEyXYV5fcUVA6wBVBdRMmq1xIb2UKiCYOVQAXjWQjHZ7yWkKhCSAfYUtA039ZWaomYJgSABVBBK3ImfjKoJWC5ITd4owZNSTBtpZYgZCP+wLamCpdPJcJybirXEpGy+NvxRlLa7XkTllK9lvCXKrLhHf0bT0DgSxXivzVWwybS+VTeVJX5z6s12QbMGeNi8xeD3anaYrsQaygCWUZXPq+EaQnoL+nYTBIEUMVjIrUe+byyUNE9rGngkEGhgMF1LAeZFVW91Fqa3yhD5BK602dV26WyA+3ZJi0O3BEnjdRxeR7ABUC9K7m4tMMeJVma7rLFd1843INNsz2t2ocfqBtXs8QHwTr0EdGuGB7wjPeMXigwpUth2aAH75T2TPcbBc9ETgVTQrWdTu1pvuO6ALk5nja0zU6tX9Zfj4/Jz9Nlxg/ST1S5cO27FSgVT1MaylP96wabXcwZS0z9pj7VqTEoNC+dyhbcnKoBWbcFqtCWdj6RKvNYf/SZVFnZ7/c+kSqU/Z71iVSB7OATqQLZMU7Wq0r15eWhNbI9PVWoIMKPC7qDHjagZFug+pBCml1rcKHYumhI9XW7EG4lg+0i2mNx0a5CNZzqp5E/pWgSF3twa6VLm7JkTZKAx2rMEtmWFWtzjGwDqnP+y4/C50ARStac6g1gDqyOfcXBxkgScJtTdfu5B9qDEbt9LXspoUmgKVVbdV27w5JAQ6rDYpE1pv1zg7gIVCcoVeR8gicBmeoKp1oUixrzHUa2Raqw3qiMLEsC5lTd8kJgjySBgQHVcnd3sHB8S9VUm2qg8fZLJBzH1CTqUl3qIptFvWeOx0WcauWrrz5tE/AXfI+vD1ISwKi+3EttBjyu+XFxnWG0zdLDq5rsOVB9OaS7ZHv7/V1dKFXZoCJ+nSDfA0ZW7rq8g4FEOFUQKRyXfCHkCFRl2empasPxvGROD6giFQJOVQ7HGfIVt0wVdCxTxRuf9LK7RMYW+nn7TkNVG44P5XMOgGqpjmWqqEHF3HWv0x9cu2OBrEzVG11f9nuOyy08xb4XksPxvKgd66zbv3RHHNkhD2aDSYKOo6pd3isWjlN1uLec7mDojk6jOZgkfabjgzJP6cPxOv/HH526wnQsnVVw74mMv9G2xwY/0vAUEcHsG2KgiovT/NckrsEMrrjQZjq2q7cgG/6oo1+PKhgUOGsjHQNV3HsKMaiRjoc1FNT8l0l9A7tw0RMrPkV9u3DMnRV0XH/ZV8yWGunYNVlps18kufXD6YAE/kY6rr1DlpevtJGO6++Qc7Kl/0Dc1n9GWGlb9Lb0L/LKAap916HgAAAAAElFTkSuQmCC"
            alt=""
            loading="lazy"
            sx={{
              position: "absolute",
              bottom: { xs: -80, sm: -65, md: -80 },
              right: { xs: 40, sm: 30, md: 40 },
              width: { xs: 120, sm: 100, md: 120 },
              height: "auto",
              pointerEvents: "none",
            }}
          />
        </Box>
      </Container>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            width: { xs: "70%", sm: "35%", md: "25%" },
            px: 5,
            py: 1.3,
            mt: 9,
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
          mt: 4,
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
      <Box
        maxWidth="sm"
        sx={{
          width: { xs: "80%", sm: "40%" },
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mt: 4,
        }}
      >
        <Typography sx={{ fontSize: "12px" }}>
          <b>PLEASE NOTE:</b> By purchasing a plan you agree to enter into a
          subscription agreement. Unless you cancel before the end of
          then-current period, your subscription will renew automatically and
          you will be charged the agreed-upon amount. Subscriptions renew online
          unless you cancel online in your profile or via email. If you are
          unsure how to cancel please visit our Subscription Terms. Prepayment
          of total plan cost required.
        </Typography>
      </Box>
    </Box>
  );
}
