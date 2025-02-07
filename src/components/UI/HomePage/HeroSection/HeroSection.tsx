import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets/index";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        justifyContent: "space-between",
        my: 16,
      }}
    >
      {/* left side content */}
      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
            zIndex: -1,
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography component={"h1"} variant="h2" fontWeight={500}>
          Healthier Hearts
        </Typography>
        <Typography component={"h1"} variant="h2" fontWeight={500}>
          Come From
        </Typography>
        <Typography
          component={"h1"}
          variant="h2"
          fontWeight={500}
          color="primary.main"
        >
          Preventive Care
        </Typography>
        <Typography component={"p"} fontWeight={400} fontSize={18} my={2}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem nihil quisquam doloribus aspernatur? Vel soluta
          suscipit, ipsum commodi quas tempore qui fugiat aliquid!
        </Typography>
        <Stack direction="row" spacing={2} mt={4}>
          <Button>Make Appointment</Button>
          <Button variant="outlined">Contact Us</Button>
        </Stack>
      </Box>

      {/* Right side content */}
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box sx={{ position: "absolute", left: "200px" }}>
          <Image src={assets.svgs.arrow} alt="arrow" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box mt={8}>
            <Image
              src={assets.images.doctor1}
              alt="doctor1"
              width={240}
              height={380}
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              alt="doctor2"
              width={240}
              height={350}
            />
          </Box>
        </Box>
        <Box position={"absolute"} top={"260px"} left={"160px"}>
          <Image
            src={assets.images.doctor3}
            alt="doctor3"
            width={240}
            height={240}
          />
        </Box>
        <Box position={"absolute"} bottom={"-50px"} right={0} zIndex={-1}>
          <Image
            src={assets.images.stethoscope}
            alt="stethoscope"
            width={180}
            height={180}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
