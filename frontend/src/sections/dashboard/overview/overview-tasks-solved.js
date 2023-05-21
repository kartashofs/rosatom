import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardHeader,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { Chart } from '../../../components/chart';
import { ContestContext } from '../../../contexts/contest-context';
import { useContext } from 'react';
import { useContest } from '../../../hooks/use-contest';

const categories = [
  {
    id: 'easy',
    title: 'Лёгких',
    description: 'Excellent',
  },
  {
    id: 'medium',
    title: 'Средних',
    description: 'Good condition',
  },
  {
    id: 'hard',
    title: 'Сложных',
    description: 'Needs attention',
  },
];

const createChartOptions = (theme, color) => {
  return {
    chart: {
      background: 'transparent',
    },
    colors: [color],
    labels: [''],
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

export const OverviewTasksSolved = (props) => {
  const { sx } = props;
  const contest = useContest();
  const theme = useTheme();

  const total = contest.data['competitors-count'];

  const colorsMap = {
    easy: theme.palette.primary.main,
    medium: theme.palette.warning.main,
    hard: theme.palette.error.main,
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', ...sx }}>
      <CardHeader title="Уровень выполнения заданий" />
      <Grid flex={1} container spacing={3} sx={{ p: 1 }}>
        {categories.map((category) => {
          const color = colorsMap[category.id];
          const chartOptions = createChartOptions(theme, color);
          const amount =
            contest.data['easy-average-hard'][
              ['easy', 'medium', 'hard'].indexOf(category.id)
            ] || 0;
          const progress = Math.round((amount / total) * 100);
          const chartSeries = [progress];

          return (
            <Grid key={category.title} xs={12} md={4}>
              <Stack
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  backgroundColor: alpha(color, 0.04),
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  p: 2,
                  height: '100%',
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
                <Typography variant="h6">{amount} участников</Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};
