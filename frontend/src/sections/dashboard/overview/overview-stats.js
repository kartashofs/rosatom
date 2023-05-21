import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  Divider,
  Link,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { paths } from '../../../paths';

const OverviewStatsCard = (props) => {
  const { sx, title, value, backgroundColor, icon, onClick } = props;

  return (
    <Card sx={sx}>
      <CardActionArea sx={{ height: '100%' }}>
        <Stack sx={{ height: '100%' }}>
          <Stack
            alignItems="center"
            direction="row"
            spacing={4}
            flex={1}
            sx={{
              backgroundColor,
              px: 4,
              py: 2,
            }}
          >
            <div>{icon}</div>
            <Box>
              <Typography
                color="text.secondary"
                variant="body2"
                lineHeight={1.25}
              >
                {title}
              </Typography>
              <Typography color="text.primary" variant="h4">
                {value}
              </Typography>
            </Box>
          </Stack>
          {/* <Divider />
          <CardActions>
            <Button
              color="inherit"
              component={NextLink}
              href={paths.dashboard.customers.index}
              endIcon={
                <SvgIcon>
                  <ArrowRightIcon />
                </SvgIcon>
              }
              size="small"
            >
              К участникам
            </Button>
          </CardActions> */}
        </Stack>
      </CardActionArea>
    </Card>
  );
};

export function OverviewParticipantsCount(props) {
  const { sx, amount } = props;

  return (
    <OverviewStatsCard
      sx={sx}
      backgroundColor={(theme) =>
        theme.palette.mode === 'light' && 'success.lightest'
      }
      icon={<img src="/assets/iconly/iconly-glass-tick.svg" width={64} />}
      title={<span>Количество участников</span>}
      value={amount}
    />
  );
}

export function OverviewCompletionPercentage(props) {
  const { sx, amount } = props;

  return (
    <OverviewStatsCard
      sx={sx}
      backgroundColor={(theme) =>
        theme.palette.mode === 'light' && 'warning.lightest'
      }
      icon={<img src="/assets/iconly/iconly-glass-discount.svg" width={64} />}
      title={<span>Средний результат</span>}
      value={amount}
    />
  );
}

export function OverviewTopCompletionPercentage(props) {
  const { sx, amount } = props;

  return (
    <OverviewStatsCard
      sx={sx}
      backgroundColor={(theme) =>
        theme.palette.mode === 'light' && 'error.lightest'
      }
      icon={<img src="/assets/iconly/iconly-glass-chart.svg" width={64} />}
      title={<span>Средний результат топ-10%</span>}
      value={amount}
    />
  );
}
