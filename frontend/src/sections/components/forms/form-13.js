import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';

const paymentMethods = [
  {
    label: 'Visa Credit/Debit Card',
    value: 'visa',
  },
  {
    label: 'PayPal',
    value: 'paypal',
  },
];

export const Form13 = () => (
  <Box sx={{ p: 3 }}>
    <form onSubmit={(event) => event.preventDefault()}>
      <Stack spacing={6}>
        <Stack spacing={3}>
          <Stack alignItems="center" direction="row" spacing={2}>
            <Box
              sx={{
                alignItems: 'center',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: 20,
                display: 'flex',
                height: 40,
                justifyContent: 'center',
                width: 40,
              }}
            >
              <Typography sx={{ fontWeight: 'fontWeightBold' }} variant="h6">
                1
              </Typography>
            </Box>
            <Typography variant="h6">Billing Address</Typography>
          </Stack>
          <div>
            <Grid container spacing={3}>
              <Grid xs={12} sm={6}>
                <TextField fullWidth label="First Name" name="firstName" />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField fullWidth label="Last Name" name="lastName" />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField fullWidth label="Street Address" name="address" />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Street Line 2 (optional)"
                  name="optionalAddress"
                />
              </Grid>
              <Grid xs={12} sm={3}>
                <TextField fullWidth label="State" name="state" />
              </Grid>
              <Grid xs={12} sm={3}>
                <TextField fullWidth label="Zip" name="zip" />
              </Grid>
            </Grid>
          </div>
        </Stack>
        <Stack spacing={3}>
          <Stack alignItems="center" direction="row" spacing={2}>
            <Box
              sx={{
                alignItems: 'center',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: 20,
                display: 'flex',
                height: 40,
                justifyContent: 'center',
                width: 40,
              }}
            >
              <Typography sx={{ fontWeight: 'fontWeightBold' }} variant="h6">
                2
              </Typography>
            </Box>
            <Typography variant="h6">Shipping Address</Typography>
          </Stack>
          <div>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Same as billing address"
            />
          </div>
        </Stack>
        <Stack spacing={3}>
          <Stack alignItems="center" direction="row" spacing={2}>
            <Box
              sx={{
                alignItems: 'center',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: 20,
                display: 'flex',
                height: 40,
                justifyContent: 'center',
                width: 40,
              }}
            >
              <Typography sx={{ fontWeight: 'fontWeightBold' }} variant="h6">
                3
              </Typography>
            </Box>
            <Typography variant="h6">Payment Method</Typography>
          </Stack>
          <Stack spacing={3}>
            <div>
              <RadioGroup name="paymentMethod" sx={{ flexDirection: 'row' }}>
                {paymentMethods.map((paymentMethod) => (
                  <FormControlLabel
                    control={<Radio />}
                    key={paymentMethod.value}
                    label={
                      <Typography variant="body1">
                        {paymentMethod.label}
                      </Typography>
                    }
                    value={paymentMethod.value}
                  />
                ))}
              </RadioGroup>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth label="Name on Card" name="cardOwner" />
                </Grid>
                <Grid xs={12} sm={6} />
                <Grid xs={12} sm={6}>
                  <TextField fullWidth label="Card Number" name="cardNumber" />
                </Grid>
                <Grid xs={12} sm={6} />
                <Grid xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Expire Date"
                    name="cardExpirationDate"
                    placeholder="MM/YY"
                  />
                </Grid>
                <Grid xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Security Code"
                    name="cardSecurityCode"
                  />
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Stack>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mt: 3,
        }}
      >
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </form>
  </Box>
);
