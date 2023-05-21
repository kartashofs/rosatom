import Lightning01Icon from '@untitled-ui/icons-react/build/esm/Lightning01';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../../components/chart';
import { FileIcon } from '../../../components/file-icon';
import { bytesToSize } from '../../../utils/bytes-to-size';

const useChartOptions = (usage) => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent',
      redrawOnParentResize: false,
      redrawOnWindowResize: false,
    },
    colors: [theme.palette.primary.main],
    fill: {
      opacity: 1,
      type: 'solid',
    },
    grid: {
      padding: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
    },
    labels: [usage],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            color: theme.palette.text.primary,
            fontSize: '24px',
            fontWeight: 500,
            show: true,
            offsetY: -15,
          },
          value: {
            show: false,
          },
        },
        endAngle: 90,
        hollow: {
          size: '60%',
        },
        startAngle: -90,
        track: {
          background:
            theme.palette.mode === 'dark'
              ? theme.palette.primary.dark
              : theme.palette.primary.light,
          strokeWidth: '100%',
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
    stroke: {
      lineCap: 'round',
    },
    theme: {
      mode: theme.palette.mode,
    },
  };
};

const totals = [
  {
    extension: 'mp4',
    itemsCount: 25,
    label: 'MP4',
    size: 24431234531,
  },
  {
    extension: 'png',
    itemsCount: 591,
    label: 'PNG',
    size: 58723843923,
  },
  {
    extension: 'pdf',
    itemsCount: 95,
    label: 'PDF',
    size: 432424040,
  },
  {
    extension: null,
    itemsCount: 210,
    label: 'Other',
    size: 274128437,
  },
];

export const StorageStats = () => {
  const currentUsage = '75 GB';
  const currentUsagePercentage = 75;
  const chartOptions = useChartOptions(currentUsage);
  const chartSeries = [currentUsagePercentage];

  return (
    <Card>
      <CardHeader title="Storage" subheader="Upgrade before reaching it" />
      <CardContent>
        <Stack alignItems="center">
          <Box
            sx={{
              height: 260,
              mt: '-48px',
              mb: '-100px',
            }}
          >
            <Chart
              width={260}
              height={260}
              options={chartOptions}
              series={chartSeries}
              type="radialBar"
            />
          </Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            You’ve almost reached your limit
          </Typography>
          <Typography color="text.secondary" variant="body2">
            You have used {currentUsagePercentage}% of your available storage.
          </Typography>
        </Stack>
        <List disablePadding sx={{ mt: 2 }}>
          {totals.map((total) => {
            const size = bytesToSize(total.size);

            return (
              <ListItem disableGutters key={total.extension}>
                <ListItemIcon>
                  <Box sx={{ color: 'primary.main' }}>
                    <FileIcon extension={total.extension} />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="caption">{total.label}</Typography>
                  }
                  secondary={
                    <Typography color="text.secondary" variant="body2">
                      {size} • {total.itemsCount} items
                    </Typography>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          endIcon={
            <SvgIcon fontSize="small">
              <Lightning01Icon />
            </SvgIcon>
          }
          size="small"
          variant="contained"
        >
          Upgrade Plan
        </Button>
      </CardActions>
    </Card>
  );
};
