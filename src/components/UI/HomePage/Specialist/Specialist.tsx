import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/specialities`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialists } = await res.json();
  // console.log(specialists);

  return (
    <Container>
      <Box sx={{ py: 6, textAlign: "center" }}>
        <Box sx={{ textAlign: "start" }}>
          <Typography variant="h4" fontWeight={600}>
            Explore Teatments Across Specialist
          </Typography>
          <Typography component={"p"} fontWeight={400} fontSize={18}>
            Explore Teatments Across Specialist
          </Typography>
        </Box>
      </Box>
      <Stack direction={"row"} gap={4} mb={6}>
        {specialists.map((specialist: any) => (
          <Box
            key={specialist.id}
            sx={{
              width: "180px",
              padding: 2,
              background: "rgba(245, 245, 245, 0.8)",
              border: "2px solid rgba(255, 255, 255, 0)",
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              "&:hover": {
                // "& img": {
                //   transform: "scale(1.1)",
                // },
                borderColor: "primary.main",
              },
            }}
          >
            <Image
              src={specialist.icon}
              alt={specialist.title}
              width={150}
              height={150}
              style={{
                objectFit: "cover",
                transition: "transform 0.5s ease",
                width: "100px",
                height: "100px",
                margin: "0 auto",
              }}
            />
            <Box
              sx={{
                position: "relative",
                bottom: 0,
              }}
            >
              <Typography
                variant="h6"
                fontSize={18}
                mt={2}
                textAlign={"center"}
              >
                {specialist.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
        <Button variant="outlined">View All</Button>
      </Box>
    </Container>
  );
};

export default Specialist;
