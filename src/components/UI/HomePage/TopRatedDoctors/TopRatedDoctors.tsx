import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TopRatedDoctors = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/doctor?limit=3`, {
    next: {
      revalidate: 30,
    },
  });
  const {
    data: { data: doctors },
  } = await res.json();
  console.log(doctors);

  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Container>
        <Box sx={{ py: 6, textAlign: "center" }}>
          <Box>
            <Typography variant="h4" fontWeight={600} mb={2}>
              Our Top Rated Doctors
            </Typography>
            <Typography component={"p"} fontWeight={400} fontSize={18}>
              Access to expert physicians and surgeons, advanced technologies{" "}
              <br />
              and top-quality surgery facilities right here.
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {doctors?.map((doctor: any) => (
            <Grid key={doctor?.id} item md={4}>
              <Card sx={{ borderRadius: 3, p: 2 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={doctor.profilePhoto}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h1"
                    fontWeight={500}
                  >
                    {doctor?.name}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {doctor?.qualification}, {doctor?.designation}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <LocationOnIcon /> {doctor?.currentWorkingPlace}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: "grid", gridColumn: 2 }}>
                  <Button>Share</Button>
                  <Button>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
