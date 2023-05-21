import PropTypes from 'prop-types';
import AlertTriangleIcon from '@untitled-ui/icons-react/build/esm/AlertTriangle';
import { Avatar, Card, Stack, SvgIcon, Typography } from '@mui/material';

export const LogisticsErrorVehicles = (props) => {
  const { amount } = props;

  return (
    <Card>
      <Stack spacing={1} sx={{ p: 3 }}>
        <Stack alignItems="center" direction="row" spacing={2}>
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: 'error.alpha12',
              color: 'error.main',
            }}
          >
            <SvgIcon>
              <AlertTriangleIcon />
            </SvgIcon>
          </Avatar>
          <Typography variant="h5">{amount}</Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          Vehicles with errors
        </Typography>
      </Stack>
    </Card>
  );
};

LogisticsErrorVehicles.propTypes = {
  amount: PropTypes.number.isRequired,
};
