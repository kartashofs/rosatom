import { Box, Card, CardHeader, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { Chart } from '../../../components/chart';
import { Scrollbar } from '../../../components/scrollbar';

const chartSeries = [
  {
    name: 'Trimester 1',
    data: [12, 24, 36, 48, 60, 72, 24],
  },
  {
    name: 'Trimester 2',
    data: [7, 16, 47, 58, 40, 49, 43],
  },
  {
    name: 'Trimester 3',
    data: [11, 27, 24, 32, 82, 56, 21],
  },
];

const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: [
      theme.palette.primary.main,
      alpha(theme.palette.primary.main, 0.8),
      alpha(theme.palette.primary.main, 0.4),
    ],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: 'solid',
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
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
    stroke: {
      colors: ['transparent'],
      show: true,
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
      categories: [
        'Capital One',
        'Ally Bank',
        'ING',
        'Ridgewood',
        'BT Transilvania',
        'CEC',
        'CBC',
      ],
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      labels: {
        offsetX: -12,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };
};

export const Chart12 = () => {
  const chartOptions = useChartOptions();

  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
        p: 3,
      }}
    >
      <Card>
        <CardHeader
          subheader={
            <Typography color="text.secondary" variant="body2">
              Trimester
            </Typography>
          }
          title="Total Transactions"
        />
        <Scrollbar>
          <Box
            sx={{
              height: 336,
              minWidth: 500,
              px: 2,
            }}
          >
            <Chart
              height={300}
              options={chartOptions}
              series={chartSeries}
              type="bar"
            />
          </Box>
        </Scrollbar>
      </Card>
    </Box>
  );
};
