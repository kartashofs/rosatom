import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Container,
  List,
  ListItem,
  ListItemText,
  SvgIcon,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../../components/chart';
import { useMounted } from '../../../hooks/use-mounted';
import { getRandomInt } from '../../../utils/get-random-int';
import { wait } from '../../../utils/wait';

const pages = [
  {
    pathname: '/projects',
    views: 24,
  },
  {
    pathname: '/chat',
    views: 21,
  },
  {
    pathname: '/cart',
    views: 15,
  },
  {
    pathname: '/checkout',
    views: 8,
  },
];

const initialState = [
  163, 166, 161, 159, 99, 163, 173, 166, 167, 183, 176, 172,
];

const useChartSeries = () => {
  const isMounted = useMounted();
  const intervalRef = useRef(undefined);
  const [data, setData] = useState(initialState);
  const tickRate = 3000;
  const delay = 500;

  const handleTick = useCallback(
    async (value) => {
      if (isMounted()) {
        setData((prevState) => {
          const newData = [...prevState];

          // Remove the first value and add a null value to keep the same bar length

          newData.shift();
          newData.push(null);

          return newData;
        });
      }

      await wait(delay);

      if (isMounted()) {
        setData((prevState) => {
          const newData = [...prevState];

          newData.pop();
          newData.push(value);

          return newData;
        });
      }
    },
    [isMounted],
  );

  const subscribe = useMemo(
    () => (handler) => {
      intervalRef.current = setInterval(() => {
        const value = getRandomInt(100, 200);
        handler(value);
      }, tickRate);

      return () => {
        clearInterval(intervalRef.current);
      };
    },
    [],
  );

  useEffect(
    () => subscribe(handleTick),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [subscribe],
  );

  return [
    {
      name: 'Events',
      data,
    },
  ];
};

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
    colors: [theme.palette.primary.main],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: 'solid',
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '40',
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
      categories: [''],
      labels: {
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

export const Chart5 = () => {
  const chartSeries = useChartSeries();
  const chartOptions = useChartOptions();

  const pageViewsNow = useMemo(() => {
    const { data } = chartSeries[0];
    const currentValue = data[data.length - 1];

    if (currentValue === null) {
      return data[data.length - 2] || 0;
    }

    return data[data.length - 1] || 0;
  }, [chartSeries]);

  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
        p: 3,
      }}
    >
      <Container maxWidth="sm">
        <Card>
          <CardHeader
            action={<Typography variant="h6">{pageViewsNow}</Typography>}
            subheader="Page views per second"
            title="Active users"
          />
          <Chart
            height={200}
            options={chartOptions}
            series={chartSeries}
            type="bar"
          />
          <List>
            {pages.map((page) => (
              <ListItem divider key={page.pathname}>
                <ListItemText
                  primary={page.pathname}
                  primaryTypographyProps={{
                    variant: 'body2',
                  }}
                />
                <Typography color="text.secondary" variant="subtitle2">
                  {page.views}
                </Typography>
              </ListItem>
            ))}
          </List>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button
              color="inherit"
              endIcon={
                <SvgIcon>
                  <ArrowRightIcon />
                </SvgIcon>
              }
              size="small"
            >
              See All
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
};
