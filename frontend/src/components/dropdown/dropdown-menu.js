import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Popover } from '@mui/material';
import { DropdownContext } from './dropdown-context';

export const DropdownMenu = (props) => {
  const { anchorEl, children, PaperProps, ...other } = props;
  const ctx = useContext(DropdownContext);

  return (
    <Popover
      anchorEl={anchorEl || ctx.anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      open={ctx.open}
      PaperProps={{
        ...PaperProps,
        onMouseEnter: ctx.onMenuEnter,
        onMouseLeave: ctx.onMenuLeave,
        sx: {
          ...PaperProps?.sx,
          pointerEvents: 'auto',
        },
      }}
      sx={{ pointerEvents: 'none' }}
      transformOrigin={{
        horizontal: 'left',
        vertical: 'top',
      }}
      {...other}
    >
      {children}
    </Popover>
  );
};

DropdownMenu.propTypes = {
  anchorEl: PropTypes.any,
  // @ts-ignore
  anchorOrigin: PropTypes.object,
  children: PropTypes.any,
  disableScrollLock: PropTypes.bool,
  PaperProps: PropTypes.object,
  // @ts-ignore
  transformOrigin: PropTypes.object,
};
