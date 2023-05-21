import PropTypes from 'prop-types';
import Truck02Icon from '@untitled-ui/icons-react/build/esm/Truck02';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  LinearProgress,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Scrollbar } from '../../../components/scrollbar';
import { SeverityPill } from '../../../components/severity-pill';

export const LogisticsVehiclesList = (props) => {
  const { vehicles } = props;

  return (
    <Card>
      <CardHeader
        title="On Route Vehicles"
        subheader="Condition and temperature"
      />
      <Scrollbar>
        <Box sx={{ minWidth: 1200 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Location</TableCell>
                <TableCell>Ending Route</TableCell>
                <TableCell>Starting Route</TableCell>
                <TableCell>Warnings</TableCell>
                <TableCell>Refrigerator Temperature</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles.map((vehicle) => (
                <TableRow
                  key={vehicle.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <Avatar sx={{ mr: 2 }}>
                        <SvgIcon>
                          <Truck02Icon />
                        </SvgIcon>
                      </Avatar>
                      <Typography variant="subtitle2">{vehicle.id}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {vehicle.endingRoute}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {vehicle.startingRoute}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <SeverityPill color={vehicle.status}>
                      {vehicle.warning || 'No warnings'}
                    </SeverityPill>
                  </TableCell>
                  <TableCell>
                    <LinearProgress
                      value={vehicle.temperature}
                      variant="determinate"
                    />
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        mt: 2,
                      }}
                    >
                      <Typography color="inherit" variant="inherit">
                        {vehicle.temperatureLabel}
                      </Typography>
                      <Box sx={{ flexGrow: 1 }} />
                      <Typography color="text.secondary" variant="inherit">
                        {vehicle.temperature}
                        °C
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
    </Card>
  );
};

LogisticsVehiclesList.propTypes = {
  vehicles: PropTypes.array.isRequired,
};
