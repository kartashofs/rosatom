import {
  Box,
  Card,
  CardHeader,
  List,
  ListItem,
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
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.warning.main,
      theme.palette.info.main,
    ],
    labels,
    plotOptions: {
      radialBar: {
        track: {
          background:
            theme.palette.mode === 'dark'
              ? theme.palette.neutral[800]
              : theme.palette.neutral[100],
        },
        dataLabels: {
          name: {
            color: theme.palette.text.primary,
          },
          value: {
            color: theme.palette.text.primary,
          },
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

export const OverviewCompetitorClusters = (props) => {
  const { sx } = props;
  const contest = useContest();
  const labels = [
    'Высочайшая квалификация',
    'Высокая квалификация',
    'Перспективные участники',
  ];
  const chartSeries = contest.data['clusters-competitors'].map((x) =>
    Math.round((x / contest.data['competitors-count']) * 100),
  );
  const chartOptions = useChartOptions(labels);

  return (
    <Card sx={sx}>
      <CardHeader title="Распределение участников по квалификации" />
      <Box sx={{ pr: 5 }}>
        <Grid alignItems="center" container spacing={3} p={0}>
          <Grid xs={12} md={6}>
            <Chart
              height={300}
              options={chartOptions}
              series={chartSeries}
              type="radialBar"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <List disablePadding>
                {contest.data['clusters-competitors'].map((item, index) => (
                  <ListItem disableGutters key={index} sx={{ display: 'flex' }}>
                    <Box
                      sx={{
                        backgroundColor: chartOptions.colors[index],
                        borderRadius: '4px',
                        height: 16,
                        mr: 1,
                        width: 16,
                      }}
                    />
                    <Typography color="text.secondary" variant="body2">
                      {labels[index]}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="subtitle2">{item}</Typography>
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};
