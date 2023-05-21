import { Box, TextField, Unstable_Grid2 as Grid } from '@mui/material';

export const Inputs4 = () => (
  <Box sx={{ p: 3 }}>
    <Box maxWidth="sm">
      <Grid container spacing={4}>
        <Grid xs={12} sm={6}>
          <TextField fullWidth label="Name" />
        </Grid>
        <Grid xs={12} sm={6}>
          <TextField fullWidth label="Email Address" required type="email" />
        </Grid>
        <Grid xs={12}>
          <TextField fullWidth label="Phone number" />
        </Grid>
        <Grid xs={12} sm={6}>
          <TextField fullWidth label="State/Region" />
        </Grid>
        <Grid xs={12} sm={6}>
          <TextField fullWidth label="City" />
        </Grid>
      </Grid>
    </Box>
  </Box>
);
