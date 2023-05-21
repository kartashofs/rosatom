import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const sizes = {
  small: 8,
  medium: 16,
  large: 23,
};

const PresenceRoot = styled('span')(({ theme, ownerState }) => {
  const size = sizes[ownerState.size];
  const colors = {
    offline: theme.palette.neutral[100],
    away: theme.palette.warning.main,
    busy: theme.palette.error.main,
    online: theme.palette.success.main,
  };
  const color = colors[ownerState.status];

  return {
    backgroundColor: color,
    borderRadius: '50%',
    display: 'inline-block',
    flexGrow: 0,
    flexShrink: 0,
    height: size,
    width: size,
  };
});

export const Presence = (props) => {
  const { size = 'medium', status = 'offline', ...other } = props;

  const ownerState = { size, status };

  return <PresenceRoot ownerState={ownerState} {...other} />;
};

Presence.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  status: PropTypes.oneOf(['online', 'offline', 'away', 'busy']),
};
