import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { Chart } from '../../../components/chart';
import { ContestContext } from '../../../contexts/contest-context';
import { useContest } from '../../../hooks/use-contest';

const useChartOptions = (labels) => {
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
      width: 0,
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      fillSeriesColor: false,
    },
  };
};

export const OverviewGender = () => {
  const contest = useContest();
  const labels = ['Мужчины', 'Женщины'];
  const chartSeries = contest.data['gender-counts'];
  const chartOptions = useChartOptions(labels);

  return (
    <Card>
      <CardHeader title="Гендер участников" />
      <CardContent>
        <Chart
          height={200}
          options={chartOptions}
          series={chartSeries}
          type="donut"
        />
        <Grid container spacing={1}>
          {chartSeries.map((item, index) => (
            <Grid key={index} xs={12} sm={6}>
              <Stack alignItems="center" direction="row" spacing={1}>
                <Box
                  sx={{
                    backgroundColor: chartOptions.colors[index],
                    borderRadius: '50%',
                    height: 8,
                    width: 8,
                  }}
                />
                <Typography variant="subtitle2">{labels[index]}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
