import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardActions,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../../components/chart';

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
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 100],
      },
      type: 'gradient',
    },
    grid: {
      show: false,
      padding: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      enabled: false,
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
      show: false,
    },
  };
};

export const AnalyticsStats = (props) => {
  const { action, chartSeries, value, title } = props;
  const chartOptions = useChartOptions();

  return (
    <Card>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <div>
          <Typography color="text.secondary" variant="body2">
            {title}
          </Typography>
          <Typography sx={{ mt: 1 }} variant="h5">
            {value}
          </Typography>
        </div>
        <Box sx={{ width: 200 }}>
          <Chart
            height={100}
            options={chartOptions}
            series={chartSeries}
            type="area"
          />
        </Box>
      </Stack>
      {action && (
        <>
          <Divider />
          <CardActions>{action}</CardActions>
        </>
      )}
    </Card>
  );
};

AnalyticsStats.propTypes = {
  action: PropTypes.any.isRequired,
  chartSeries: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
