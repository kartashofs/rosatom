import {
  Box,
  Card,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { SeverityPill } from '../../../components/severity-pill';

export const QuickStats3 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Card>
      <Grid
        container
        sx={{
          '& > *:not(:last-of-type)': {
            borderRight: (theme) => ({
              md: `1px solid ${theme.palette.divider}`,
            }),
            borderBottom: (theme) => ({
              md: 'none',
              xs: `1px solid ${theme.palette.divider}`,
            }),
          },
        }}
      >
        <Grid xs={12} sm={6} md={3}>
          <Stack alignItems="center" spacing={1} sx={{ p: 3 }}>
            <Typography variant="h5">$4,250.00</Typography>
            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
              variant="overline"
            >
              Next payout
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Stack alignItems="center" spacing={1} sx={{ p: 3 }}>
            <Typography variant="h5">$12,500.00</Typography>
            <Typography color="text.secondary" variant="overline">
              Total income
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Stack alignItems="center" spacing={1} sx={{ p: 3 }}>
            <Typography variant="h5">230</Typography>
            <Typography color="text.secondary" variant="overline">
              Today&apos;s Visitors
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={12} md={3} sm={6}>
          <Stack alignItems="center" spacing={1} sx={{ p: 3 }}>
            <Stack alignItems="center" direction="row" spacing={1}>
              <Typography component="span" variant="h5">
                5
              </Typography>
              <SeverityPill color="primary">Live</SeverityPill>
            </Stack>
            <Typography color="text.secondary" variant="overline">
              Active now
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  </Box>
);
