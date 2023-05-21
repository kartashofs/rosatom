import PropTypes from 'prop-types';
import Settings03Icon from '@untitled-ui/icons-react/build/esm/Settings03';
import { Box, ButtonBase, SvgIcon, Tooltip } from '@mui/material';

export const SettingsButton = (props) => (
  <Tooltip title="Settings">
    <Box
      {...props}
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: '50%',
        bottom: 0,
        boxShadow: 16,
        margin: (theme) => theme.spacing(4),
        position: 'fixed',
        right: 0,
        zIndex: (theme) => theme.zIndex.speedDial,
      }}
    >
      <ButtonBase
        sx={{
          backgroundColor: 'primary.main',
          borderRadius: '50%',
          color: 'primary.contrastText',
          p: '10px',
        }}
      >
        <SvgIcon>
          <Settings03Icon />
        </SvgIcon>
      </ButtonBase>
    </Box>
  </Tooltip>
);

SettingsButton.propTypes = {
  onClick: PropTypes.func,
};
