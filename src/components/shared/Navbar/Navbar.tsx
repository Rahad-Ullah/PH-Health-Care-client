import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        spacing={2}
      >
        {/* logo */}
        <Typography variant="h5" component={Link} href="/" fontWeight={600}>
          P
          <Box component={"span"} color={"primary.main"}>
            H
          </Box>{" "}
          Health Care
        </Typography>

        {/* navigation links */}
        <Stack direction={"row"} justifyContent={"space-between"} gap={8}>
          <Typography
            component={Link}
            href="/consultation"
            sx={{
              cursor: "pointer",
              color: "inherit",
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
            sx={{
              cursor: "pointer",
              color: "inherit",
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
            sx={{
              cursor: "pointer",
              color: "inherit",
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
            sx={{
              cursor: "pointer",
              color: "inherit",
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
            sx={{
              cursor: "pointer",
              color: "inherit",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            NGOs
          </Typography>
        </Stack>

        {/* action buttons */}
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
