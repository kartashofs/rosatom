import numeral from 'numeral';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../../components/chart';

const chartSeries = [
  {
    name: 'Sales',
    data: [
      {
        x: 'Email',
        y: 37530,
      },
      {
        x: 'Facebook',
        y: 90590,
      },
      {
        x: 'GDN',
        y: 52717,
      },
      {
        x: 'Instagram',
        y: 62935,
      },
      {
        x: 'Google Ads Search',
        y: 13219,
      },
    ],
  },
];

const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.error.main,
      theme.palette.success.main,
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
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '45',
        distributed: true,
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      y: {
        formatter: (value) => numeral(value).format('$0,0.00'),
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };
};

export const Chart11 = () => {
  const chartOptions = useChartOptions();

  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
        p: 3,
      }}
    >
      <Container maxWidth="md">
        <Card>
          <CardHeader title="Incremental Sales" />
          <CardContent>
            <Chart
              height={350}
              options={chartOptions}
              series={chartSeries}
              type="bar"
            />
            <Stack direction="row" flexWrap="wrap" spacing={3} sx={{ mt: 3 }}>
              {chartSeries[0].data.map((item, index) => (
                <Stack
                  key={item.x}
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    p: 1,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: chartOptions.colors[index],
                      borderRadius: '50%',
                      height: 8,
                      width: 8,
                    }}
                  />
                  <Typography variant="subtitle2">{item.x}</Typography>
                </Stack>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
