import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';

export const PostNewsletter = () => {
  return (
    <Card
      elevation={16}
      sx={{
        py: 10,
        px: 8,
      }}
    >
      <Grid container spacing={3}>
        <Grid
          xs={12}
          md={6}
          sx={{
            order: {
              xs: 1,
              md: 0,
            },
          }}
        >
          <Typography variant="h4">Join the developer list</Typography>
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{
              mb: 3,
              mt: 1,
            }}
          >
            Subscribe to our newsletter to make sure you don&apos;t miss
            anything.
          </Typography>
          <TextField
            fullWidth
            label="Email address"
            name="email"
            sx={{ flexGrow: 1 }}
            type="email"
          />
          <Button fullWidth size="large" sx={{ mt: 2 }} variant="contained">
            Subscribe
          </Button>
        </Grid>
        <Grid
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src="/assets/iconly/iconly-glass-volume.svg"
            sx={{
              maxWidth: '100%',
              width: 260,
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};
