import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor={"rgb(17, 26, 34)"} py={5}>
      <Container>
        {/* logo */}
        <Stack
          direction={"row"}
          justifyContent={"center"}
          color={"white"}
          mb={4}
        >
          <Typography variant="h5" component={Link} href="/" fontWeight={600}>
            P
            <Box component={"span"} color={"primary.main"}>
              H
            </Box>{" "}
            Health Care
          </Typography>
        </Stack>

        <Stack direction={"row"} justifyContent={"center"} gap={8}>
          <Typography
            component={Link}
            href="/consultation"
            color={"white"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Consultation
          </Typography>
          <Typography
            component={Link}
            href="/health-plans"
            color={"white"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Health Plans
          </Typography>
          <Typography
            component={Link}
            href="/medicine"
            color={"white"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Medicine
          </Typography>
          <Typography
            component={Link}
            href="/diagnostics"
            color={"white"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Diagnostics
          </Typography>
          <Typography
            component={Link}
            href="/ngos"
            color={"white"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            NGOs
          </Typography>
        </Stack>

        <Stack direction={"row"} justifyContent={"center"} gap={4} mt={4}>
          <Typography
            component={Link}
            href="/"
            color={"white"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            <Facebook />
          </Typography>
          <Typography
            component={Link}
            href="/"
            color={"white"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            <Twitter />
          </Typography>
          <Typography
            component={Link}
            href="/"
            color={"white"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            <Instagram />
          </Typography>
          <Typography
            component={Link}
            href="/"
            color={"white"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            <YouTube />
          </Typography>
        </Stack>

        <Typography align={"center"} mt={4} color={"white"}>
          © 2025 All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
