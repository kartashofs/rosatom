import {
  Box,
  Stack,
  Switch,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';

export const Inputs3 = () => (
  <Box sx={{ p: 3 }}>
    <Grid container spacing={3}>
      <Grid xs={12} md={6}>
        <Stack spacing={1}>
          <Typography variant="subtitle2">Email Verified</Typography>
          <Typography color="text.secondary" variant="body2">
            Disabling this will automatically send the user a verification
            email.
          </Typography>
          <Switch defaultChecked />
        </Stack>
      </Grid>
      <Grid xs={12} md={6}>
        <Stack spacing={1}>
          <Typography variant="subtitle2">Email</Typography>
          <Typography color="text.secondary" variant="body2">
            This will give the user discounted prices for all products.
          </Typography>
          <Switch />
        </Stack>
      </Grid>
    </Grid>
  </Box>
);
