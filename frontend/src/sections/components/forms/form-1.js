import {
  Box,
  Button,
  Switch,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';

export const Form1 = () => (
  <Box sx={{ p: 3 }}>
    <form onSubmit={(event) => event.preventDefault()}>
      <Grid container spacing={3}>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Full name"
            name="name"
            required
            value="Miron Vitold"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Email address"
            name="email"
            required
            value="miron.vitold@atomanalytics.ru"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField fullWidth label="Country" name="country" value="USA" />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="State/Region"
            name="state"
            value="New York"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Address 1"
            name="address1"
            value="Street John Wick, no. 7"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Address 2"
            name="address2"
            value="House #25"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Phone number"
            name="phone"
            value="+55 748 327 439"
          />
        </Grid>
        <Grid xs={12} md={6} />
        <Grid xs={12} md={6}>
          <Typography gutterBottom variant="subtitle2">
            Email Verified
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Disabling this will automatically send the user a verification email
          </Typography>
          <Switch defaultChecked edge="start" name="isVerified" />
        </Grid>
        <Grid xs={12} md={6}>
          <Typography gutterBottom variant="subtitle2">
            Discounted Prices
          </Typography>
          <Typography color="text.secondary" variant="body2">
            This will give the user discounted prices for all products
          </Typography>
          <Switch
            color="primary"
            defaultChecked={false}
            edge="start"
            name="hasDiscount"
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Button type="submit" variant="contained">
          Update Customer
        </Button>
      </Box>
    </form>
  </Box>
);
