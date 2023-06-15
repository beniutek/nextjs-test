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
        <Grid xs={12} display="flex" justifyContent="center">
          <Typography variant="h5">
            Czy chcesz wezwać obsługę?
          </Typography>
        </Grid>
        <Grid xs={12} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={handleClick}>
            Wezwij obsługę
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
