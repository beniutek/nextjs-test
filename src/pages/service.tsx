// pages/service.tsx
import { Button, Typography, Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from "@mui/system";

export default function ServicePage() {
  const handleClick = () => {
    console.log("Service called!");
  };

  return (
    <Box sx={{ height: "90vh" }}>
      <Grid container xs={12} spacing={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Typography sx={{ fontFamily: 'Abril Fatface'}}>
            Czy chcesz wezwać obsługę?
          </Typography>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="flex-start">
          <Button variant="contained" color="primary" onClick={handleClick} sx={{ fontFamily: 'Abhaya Libre'}}>
            Wezwij obsługę
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
