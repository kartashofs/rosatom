import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardHeader,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { Chart } from '../../../components/chart';

const categories = [
  {
    id: 'excellent',
    title: 'Very good',
    description: 'Excellent',
  },
  {
    id: 'good',
    title: 'Good',
    description: 'Good condition',
  },
  {
    id: 'bad',
    title: 'Bad',
    description: 'Needs attention',
  },
];

const createChartOptions = (theme, color) => {
  return {
    chart: {
      background: 'transparent',
    },
    colors: [color],
    labels: ['Health'],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: true,
            color: theme.palette.text.secondary,
            fontSize: '12px',
            fontWeight: 400,
            offsetY: 20,
          },
          value: {
            color: theme.palette.text.primary,
            fontSize: '18px',
            fontWeight: 600,
            offsetY: -20,
          },
        },
        hollow: {
          size: '50%',
        },
        track: {
          background: alpha(color, 0.12),
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

export const LogisticsVehiclesCondition = (props) => {
  const { bad, excellent, good } = props;
  const theme = useTheme();

  const total = excellent + good + bad;

  const colorsMap = {
    excellent: theme.palette.primary.main,
    good: theme.palette.warning.main,
    bad: theme.palette.error.main,
  };

  return (
    <Card>
      <CardHeader title="Vehicles Condition" />
      <Box sx={{ p: 1 }}>
        <Grid container spacing={3}>
          {categories.map((category) => {
            const color = colorsMap[category.id];
            const chartOptions = createChartOptions(theme, color);
            const amount = props[category.id] || 0;
            const progress = Math.round((amount / total) * 100);
            const chartSeries = [progress];

            return (
              <Grid key={category.title} xs={12} md={4}>
                <Box
                  sx={{
                    alignItems: 'center',
                    backgroundColor: alpha(color, 0.04),
                    borderRadius: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2,
                  }}
                >
                  <Typography sx={{ color }} variant="h6">
                    {category.title}
                  </Typography>
                  <Chart
                    height={200}
                    options={chartOptions}
                    series={chartSeries}
                    type="radialBar"
                  />
                  <Typography variant="h6">{amount}</Typography>
                  <Typography color="text.secondary" variant="body2">
                    {category.description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Card>
  );
};

LogisticsVehiclesCondition.propTypes = {
  bad: PropTypes.number.isRequired,
  excellent: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
};
