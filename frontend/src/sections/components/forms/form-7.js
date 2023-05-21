import {
  Box,
  Button,
  Link,
  OutlinedInput,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';

export const Form7 = () => (
  <Box sx={{ p: 3 }}>
    <form onSubmit={(event) => event.preventDefault()}>
      <Grid container spacing={3}>
        <Grid xs={12} lg={6}>
          <Typography sx={{ mb: 1 }} variant="subtitle2">
            Name
          </Typography>
          <OutlinedInput fullWidth name="name" required />
        </Grid>
        <Grid xs={12} lg={6}>
          <Typography sx={{ mb: 1 }} variant="subtitle2">
            Company
          </Typography>
          <OutlinedInput fullWidth name="company" />
        </Grid>
        <Grid xs={12} lg={6}>
          <Typography sx={{ mb: 1 }} variant="subtitle2">
            Email
          </Typography>
          <OutlinedInput fullWidth name="email" type="email" />
        </Grid>
        <Grid xs={12} lg={6}>
          <Typography sx={{ mb: 1 }} variant="subtitle2">
            Phone
          </Typography>
          <OutlinedInput fullWidth name="phone" required type="tel" />
        </Grid>
        <Grid xs={12}>
          <Typography sx={{ mb: 1 }} variant="subtitle2">
            Message
          </Typography>
          <OutlinedInput fullWidth name="message" required multiline rows={6} />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3,
        }}
      >
        <Button color="primary" fullWidth size="large" variant="contained">
          Let&apos;s Talk
        </Button>
      </Box>
      <Typography
        align="center"
        color="text.secondary"
        sx={{ mt: 2 }}
        variant="body2"
      >
        By submitting this, you agree to the{' '}
        <Link
          color="text.primary"
          href="#"
          underline="always"
          variant="subtitle2"
        >
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link
          color="text.primary"
          href="#"
          underline="always"
          variant="subtitle2"
        >
          Cookie Policy
        </Link>
        .
      </Typography>
    </form>
  </Box>
);
