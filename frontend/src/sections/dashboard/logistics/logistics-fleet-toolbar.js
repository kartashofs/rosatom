import PropTypes from 'prop-types';
import Menu01Icon from '@untitled-ui/icons-react/build/esm/Menu01';
import { Box, Card, IconButton, SvgIcon } from '@mui/material';

export const LogisticsFleetToolbar = (props) => {
  const { onDrawerOpen } = props;

  return (
    <Box
      sx={{
        left: 0,
        p: 2,
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 10,
      }}
    >
      <Card
        sx={{
          p: 2,
          pointerEvents: 'auto',
        }}
      >
        <IconButton onClick={onDrawerOpen}>
          <SvgIcon>
            <Menu01Icon />
          </SvgIcon>
        </IconButton>
      </Card>
    </Box>
  );
};

LogisticsFleetToolbar.propTypes = {
  onDrawerOpen: PropTypes.func,
};
