import { Card, CardHeader } from '@mui/material';
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
      toolbar: {
        show: false,
      },
    },
    colors: [
      theme.palette.error.main,
      theme.palette.secondary.main,
      theme.palette.warning.main,
      theme.palette.primary.main,
      theme.palette.info.main,
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
      labels: {
        colors: theme.palette.text.secondary,
      },
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        horizontal: true,
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
      categories: labels,
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };
};

export const OverviewAge = () => {
  const contest = useContest();
  const labels = ['18-25', '26-35', '36-45', '46-55', '56+'];
  const chartSeries = contest.data['age-counts'];
  const chartOptions = useChartOptions(labels);

  return (
    <Card>
      <CardHeader title="Возраст участников" />
      <Chart
        height={300}
        options={chartOptions}
        series={chartSeries.map((age) => ({ data: [age] }))}
        type="bar"
      />
    </Card>
  );
};
