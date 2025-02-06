import { Box, Button, Container, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        height={"100vh"}
      >
        <Typography variant="h3" component={"h3"} fontWeight={500} mb={2}>
          Welcome to the home page
        </Typography>
        <Button>Explore</Button>
      </Box>
    </Container>
  );
};

export default HomePage;
