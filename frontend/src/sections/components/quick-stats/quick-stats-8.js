import RefreshCcw02Icon from '@untitled-ui/icons-react/build/esm/RefreshCcw02';
import { Avatar, Box, Card, Stack, SvgIcon, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../../components/chart';

const chartSeries = [
  {
    name: 'Conversions',
    data: [14, 43, 98, 68, 155, 18, 8],
  },
];

const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [theme.palette.primary.main],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: 'solid',
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 2,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
  };
};

export const QuickStats8 = () => {
  const chartOptions = useChartOptions();

  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
        p: 3,
      }}
    >
      <Box maxWidth="sm" sx={{ mx: 'auto' }}>
        <Card>
          <Stack alignItems="center" direction="row" spacing={2} sx={{ p: 3 }}>
            <Avatar
              sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
              }}
            >
              <SvgIcon>
                <RefreshCcw02Icon />
              </SvgIcon>
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography color="text.secondary" noWrap variant="body1">
                Conversions
              </Typography>
              <Typography variant="h4">361</Typography>
            </Box>
            <Box sx={{ maxWidth: 200 }}>
              <Chart
                height={100}
                type="line"
                options={chartOptions}
                series={chartSeries}
              />
            </Box>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};
