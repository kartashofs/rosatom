import { useCallback } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';

export const ContactForm = () => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1,
              }}
            >
              Full Name *
            </FormLabel>
            <OutlinedInput name="name" required />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1,
              }}
            >
              Company Name*
            </FormLabel>
            <OutlinedInput name="company" required />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1,
              }}
            >
              Work Email *
            </FormLabel>
            <OutlinedInput name="email" type="email" required />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1,
              }}
            >
              Phone Number *
            </FormLabel>
            <OutlinedInput name="phone" required type="tel" />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1,
              }}
            >
              Company Size
            </FormLabel>
            <Select fullWidth value="10-20">
              <MenuItem value="10-20">1-10</MenuItem>
              <MenuItem value="11-30">11-30</MenuItem>
              <MenuItem value="31-50">31-50</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1,
              }}
            >
              Team
            </FormLabel>
            <Select fullWidth value="engineering">
              <MenuItem value="engineering">Engineering</MenuItem>
              <MenuItem value="design">Design</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1,
              }}
            >
              Project Budget *
            </FormLabel>
            <Select fullWidth required value={20000}>
              <MenuItem value={20000}>$20,000+</MenuItem>
              <MenuItem value={50000}>$50,000+</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1,
              }}
            >
              Message
            </FormLabel>
            <OutlinedInput
              fullWidth
              name="message"
              required
              multiline
              rows={6}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3,
        }}
      >
        <Button fullWidth size="large" variant="contained">
          Let&apos;s Talk
        </Button>
      </Box>
      <Typography color="text.secondary" sx={{ mt: 3 }} variant="body2">
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
  );
};
