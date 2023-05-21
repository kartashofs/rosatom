import { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import {
  Box,
  Button,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { TenantPopover } from './tenant-popover';

const tenants = ['AtomSkills 2021', 'AtomSkills 2020'];

export const TenantSwitch = (props) => {
  const anchorRef = useRef(null);
  const [openPopover, setOpenPopover] = useState(false);

  const handlePopoverOpen = useCallback(() => {
    setOpenPopover(true);
  }, []);

  const handlePopoverClose = useCallback(() => {
    setOpenPopover(false);
  }, []);

  const handleTenantChange = useCallback((tenant) => {
    setOpenPopover(false);
  }, []);

  return (
    <>
      <Stack alignItems="center" direction="row" spacing={2} {...props}>
        <Button
          onClick={handlePopoverOpen}
          // variant="outlined"
          color="inherit"
          endIcon={
            <SvgIcon sx={{ fontSize: 16 }} ref={anchorRef}>
              <ChevronDownIcon />
            </SvgIcon>
          }
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography color="inherit" variant="h6">
              {tenants[0]}
            </Typography>
            <Typography color="neutral.400" variant="body2">
              12-14 ноября
            </Typography>
          </Box>
        </Button>
      </Stack>
      <TenantPopover
        anchorEl={anchorRef.current}
        onChange={handleTenantChange}
        onClose={handlePopoverClose}
        open={openPopover}
        tenants={tenants}
      />
    </>
  );
};

TenantSwitch.propTypes = {
  // @ts-ignore
  sx: PropTypes.object,
};
