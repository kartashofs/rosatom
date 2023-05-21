import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  SvgIcon,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../../components/chart';

const chartSeries = [56, 24, 20];

const labels = ['Subscriptions', 'Affiliate', 'Sales'];

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
      theme.palette.warning.main,
      theme.palette.info.main,
    ],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: 'solid',
    },
    labels,
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
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
    stroke: {
      show: false,
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      fillSeriesColor: false,
    },
  };
};

export const QuickStats1 = () => {
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
          action={
            <IconButton>
              <SvgIcon>
                <DotsHorizontalIcon />
              </SvgIcon>
            </IconButton>
          }
          title="Earnings Source"
        />
        <Divider />
        <Box sx={{ p: 2 }}>
          <Chart
            height={300}
            options={chartOptions}
            series={chartSeries}
            type="donut"
          />
        </Box>
        <Divider />
        <Box sx={{ display: 'flex' }}>
          {chartSeries.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'center',
                px: 2,
                py: 3,
                textAlign: 'center',
                '&:not(:last-of-type)': {
                  borderRight: 1,
                  borderColor: 'divider',
                },
              }}
            >
              <Typography variant="h4">{item}%</Typography>
              <Typography color="text.secondary" variant="overline">
                {labels[index]}
              </Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
};
