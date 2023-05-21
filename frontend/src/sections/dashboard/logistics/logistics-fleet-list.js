import PropTypes from 'prop-types';
import { Divider, Stack } from '@mui/material';
import { LogisticsFleetVehicle } from './logistics-fleet-vehicle';

export const LogisticsFleetList = (props) => {
  const {
    onVehicleDeselect,
    onVehicleSelect,
    currentVehicleId,
    vehicles = [],
  } = props;

  return (
    <Stack
      component="ul"
      divider={<Divider />}
      sx={{
        borderBottomColor: 'divider',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        listStyle: 'none',
        m: 0,
        p: 0,
      }}
    >
      {vehicles.map((vehicle) => {
        const selected = currentVehicleId
          ? currentVehicleId === vehicle.id
          : false;

        return (
          <LogisticsFleetVehicle
            key={vehicle.id}
            onDeselect={onVehicleDeselect}
            onSelect={onVehicleSelect}
            selected={selected}
            vehicle={vehicle}
          />
        );
      })}
    </Stack>
  );
};

LogisticsFleetList.propTypes = {
  currentVehicleId: PropTypes.string,
  onVehicleDeselect: PropTypes.func,
  onVehicleSelect: PropTypes.func,
  vehicles: PropTypes.array,
};
