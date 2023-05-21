import PropTypes from 'prop-types';
import ClockIcon from '@untitled-ui/icons-react/build/esm/Clock';
import { Avatar, Card, Stack, SvgIcon, Typography } from '@mui/material';

export const LogisticsLateVehicles = (props) => {
  const { amount } = props;

  return (
    <Card>
      <Stack spacing={1} sx={{ p: 3 }}>
        <Stack alignItems="center" direction="row" spacing={2}>
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: 'primary.alpha12',
              color: 'primary.main',
            }}
          >
            <SvgIcon>
              <ClockIcon />
            </SvgIcon>
          </Avatar>
          <Typography variant="h5">{amount}</Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          Late vehicles
        </Typography>
      </Stack>
    </Card>
  );
};

LogisticsLateVehicles.propTypes = {
  amount: PropTypes.number.isRequired,
};
