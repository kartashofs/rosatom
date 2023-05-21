import {
  Box,
  Button,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from '@mui/material';

export const Form4 = () => (
  <Box sx={{ p: 3 }}>
    <form onSubmit={(event) => event.preventDefault()}>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Password Confirmation"
            name="passwordConfirm"
            type="password"
          />
        </Grid>
      </Grid>
      <Divider sx={{ pt: 2 }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <Button color="primary" type="submit" variant="contained">
          Change Password
        </Button>
      </Box>
    </form>
  </Box>
);
