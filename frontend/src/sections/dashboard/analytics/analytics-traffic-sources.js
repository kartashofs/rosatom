import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../../components/chart';
import { useContest } from '../../../hooks/use-contest';

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
      theme.palette.mode === 'dark'
        ? theme.palette.primary.darkest
        : theme.palette.primary.light,
    ],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: theme.palette.divider,
      padding: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
      strokeDashArray: 2,
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        horizontal: true,
      },
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
      categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
        show: false,
      },
    },
  };
};

export const AnalyticsTrafficSources = (props) => {
  const contest = useContest();
  const chartSeries = Object.entries(
    contest.data['cluster-qualifications'],
  ).map(([year, value]) => ({
    name: year,
    data: value,
  }));
  const chartOptions = useChartOptions();

  return (
    <Card>
      <CardHeader
        sx={{ pb: 0 }}
        title="Изменения кадровых групп"
        subheader="Исторические данные"
      />
      <CardContent sx={{ pt: 0 }}>
        <Chart
          height={200}
          options={chartOptions}
          series={chartSeries}
          type="bar"
        />
      </CardContent>
    </Card>
  );
};

AnalyticsTrafficSources.propTypes = {
  chartSeries: PropTypes.any.isRequired,
};
