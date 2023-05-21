import CurrencyDollarIcon from '@untitled-ui/icons-react/build/esm/CurrencyDollar';
import FolderIcon from '@untitled-ui/icons-react/build/esm/Folder';
import {
  Avatar,
  Box,
  Card,
  LinearProgress,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { SeverityPill } from '../../../components/severity-pill';

export const QuickStats2 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Grid container spacing={3}>
      <Grid xs={12} md={6} lg={3}>
        <Card>
          <Stack alignItems="center" direction="row" spacing={2} sx={{ p: 3 }}>
            <Stack spacing={1} sx={{ flexGrow: 1 }}>
              <Typography color="text.secondary" variant="overline">
                Today&apos;s money
              </Typography>
              <Stack alignItems="center" direction="row" spacing={1}>
                <Typography variant="h5">$24,000</Typography>
                <SeverityPill color="success">4%</SeverityPill>
              </Stack>
            </Stack>
            <Avatar
              sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                height: 48,
                width: 48,
              }}
            >
              <SvgIcon>
                <CurrencyDollarIcon />
              </SvgIcon>
            </Avatar>
          </Stack>
        </Card>
      </Grid>
      <Grid xs={12} md={6} lg={3}>
        <Card>
          <Stack alignItems="center" direction="row" spacing={2} sx={{ p: 3 }}>
            <Stack spacing={1} sx={{ flexGrow: 1 }}>
              <Typography color="text.secondary" variant="overline">
                New projects
              </Typography>
              <Stack alignItems="center" direction="row" spacing={1}>
                <Typography variant="h5">12</Typography>
                <SeverityPill color="error">-10%</SeverityPill>
              </Stack>
            </Stack>
            <Avatar
              sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                height: 48,
                width: 48,
              }}
            >
              <SvgIcon>
                <FolderIcon />
              </SvgIcon>
            </Avatar>
          </Stack>
        </Card>
      </Grid>
      <Grid xs={12} md={6} lg={3}>
        <Card>
          <Stack spacing={1} sx={{ p: 3 }}>
            <Typography color="text.secondary" variant="overline">
              System Health
            </Typography>
            <Stack alignItems="center" direction="row" spacing={1}>
              <Typography variant="h5">74%</Typography>
              <LinearProgress
                color="primary"
                sx={{ flexGrow: 1 }}
                value={74}
                variant="determinate"
              />
            </Stack>
          </Stack>
        </Card>
      </Grid>
      <Grid xs={12} md={6} lg={3}>
        <Card
          sx={{
            alignItems: 'center',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2} sx={{ p: 3 }}>
            <Stack spacing={1} sx={{ flexGrow: 1 }}>
              <Typography color="inherit" variant="overline">
                Roi per customer
              </Typography>
              <Typography color="inherit" variant="h5">
                $25.50
              </Typography>
            </Stack>
            <Avatar
              sx={{
                backgroundColor: 'primary.contrastText',
                color: 'primary.main',
                height: 48,
                width: 48,
              }}
            >
              <SvgIcon>
                <CurrencyDollarIcon />
              </SvgIcon>
            </Avatar>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  </Box>
);
