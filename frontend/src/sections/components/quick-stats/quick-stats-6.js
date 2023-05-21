import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import ChevronUpIcon from '@untitled-ui/icons-react/build/esm/ChevronUp';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../../components/chart';

const chartSeries = [83];

const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false,
      },
    },
    colors: [theme.palette.primary.main],
    fill: {
      opacity: 1,
      type: 'solid',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          show: false,
        },
        hollow: {
          size: '50%',
        },
        track: {
          background: theme.palette.background.default,
        },
      },
    },
    states: {
      active: {
        filter: {
          type: 'none',
        },
      },
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
  };
};

export const QuickStats6 = () => {
  const chartOptions = useChartOptions();

  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
        p: 3,
      }}
    >
      <Grid container spacing={3}>
        <Grid xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack alignItems="center" direction="row" spacing={2}>
                <Chart
                  height={160}
                  options={chartOptions}
                  series={chartSeries}
                  type="radialBar"
                  width={160}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Stack spacing={1}>
                    <Typography variant="h4">0.299 BTC</Typography>
                    <Typography variant="subtitle2">Weekly earnings</Typography>
                  </Stack>
                </Box>
                <Avatar
                  sx={{
                    backgroundColor: 'success.alpha8',
                    color: 'success.main',
                  }}
                  variant="rounded"
                >
                  <SvgIcon>
                    <ChevronUpIcon />
                  </SvgIcon>
                </Avatar>
              </Stack>
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                color="inherit"
                endIcon={
                  <SvgIcon>
                    <ArrowRightIcon />
                  </SvgIcon>
                }
              >
                See all activity
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack alignItems="center" direction="row" spacing={2}>
                <Chart
                  height={160}
                  options={chartOptions}
                  series={chartSeries}
                  type="radialBar"
                  width={160}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Stack spacing={1}>
                    <Typography variant="h4">$52,000.00</Typography>
                    <Typography variant="subtitle2">
                      Your private wallet
                    </Typography>
                  </Stack>
                </Box>
                <Avatar
                  sx={{
                    backgroundColor: 'error.alpha8',
                    color: 'error.main',
                  }}
                  variant="rounded"
                >
                  <SvgIcon>
                    <ChevronDownIcon />
                  </SvgIcon>
                </Avatar>
              </Stack>
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                color="inherit"
                endIcon={
                  <SvgIcon>
                    <ArrowRightIcon />
                  </SvgIcon>
                }
              >
                Withdraw money
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
