import { useCallback } from 'react';
import PropTypes from 'prop-types';
import RefreshCcw01Icon from '@untitled-ui/icons-react/build/esm/RefreshCcw01';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import {
  Badge,
  badgeClasses,
  Drawer,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { Scrollbar } from '../scrollbar';
import { OptionsColorPreset } from './options-color-preset';
import { OptionsContrast } from './options-contrast';
import { OptionsDirection } from './options-direction';
import { OptionsLayout } from './options-layout';
import { OptionsNavColor } from './options-nav-color';
import { OptionsColorScheme } from './options-color-scheme';
import { OptionsStretch } from './options-stretch';

export const SettingsDrawer = (props) => {
  const {
    canReset,
    onClose,
    onUpdate,
    onReset,
    open,
    values = {},
    ...other
  } = props;

  const handleFieldUpdate = useCallback(
    (field, value) => {
      onUpdate?.({
        [field]: value,
      });
    },
    [onUpdate],
  );

  return (
    <Drawer
      disableScrollLock
      anchor="right"
      onClose={onClose}
      open={open}
      ModalProps={{
        BackdropProps: {
          invisible: true,
        },
        sx: { zIndex: 1400 },
      }}
      PaperProps={{
        elevation: 24,
        sx: {
          maxWidth: '100%',
          width: 440,
        },
      }}
      {...other}
    >
      <Scrollbar
        sx={{
          height: '100%',
          '& .simplebar-content': {
            height: '100%',
          },
          '& .simplebar-scrollbar:before': {
            background: 'var(--nav-scrollbar-color)',
          },
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={3}
          sx={{
            px: 3,
            pt: 2,
          }}
        >
          <Typography variant="h6">App Settings</Typography>
          <Stack alignItems="center" direction="row" spacing={0.5}>
            <Badge
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
              color="error"
              sx={{
                [`& .${badgeClasses.badge}`]: {
                  top: 6,
                  right: 6,
                  ...(!canReset && {
                    display: 'none',
                  }),
                },
              }}
              variant="dot"
            >
              <IconButton color="inherit" onClick={onReset}>
                <SvgIcon fontSize="small">
                  <RefreshCcw01Icon />
                </SvgIcon>
              </IconButton>
            </Badge>
            <IconButton color="inherit" onClick={onClose}>
              <SvgIcon>
                <XIcon />
              </SvgIcon>
            </IconButton>
          </Stack>
        </Stack>
        <Stack spacing={5} sx={{ p: 3 }}>
          <OptionsColorPreset
            onChange={(value) => handleFieldUpdate('colorPreset', value)}
            value={values.colorPreset}
          />
          <OptionsColorScheme
            onChange={(value) => handleFieldUpdate('paletteMode', value)}
            value={values.paletteMode}
          />
          <OptionsNavColor
            onChange={(value) => handleFieldUpdate('navColor', value)}
            value={values.navColor}
          />
          <OptionsLayout
            onChange={(value) => handleFieldUpdate('layout', value)}
            value={values.layout}
          />
          <OptionsStretch
            onChange={(value) => handleFieldUpdate('stretch', value)}
            value={values.stretch}
          />
          <OptionsContrast
            onChange={(value) => handleFieldUpdate('contrast', value)}
            value={values.contrast}
          />
          <OptionsDirection
            onChange={(value) => handleFieldUpdate('direction', value)}
            value={values.direction}
          />
        </Stack>
      </Scrollbar>
    </Drawer>
  );
};

SettingsDrawer.propTypes = {
  canReset: PropTypes.bool,
  onClose: PropTypes.func,
  onReset: PropTypes.func,
  onUpdate: PropTypes.func,
  open: PropTypes.bool,
  // @ts-ignore
  values: PropTypes.object,
};
