import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Moon01Icon from '@untitled-ui/icons-react/build/esm/Moon01';
import SunIcon from '@untitled-ui/icons-react/build/esm/Sun';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  SvgIcon,
  ThemeProvider,
} from '@mui/material';
import { useSettings } from '../../hooks/use-settings';
import { createTheme } from '../../theme';

export const Previewer = (props) => {
  const { children, title, ...other } = props;
  const settings = useSettings();
  const [paletteMode, setPaletteMode] = useState(settings.paletteMode);
  const theme = useMemo(() => {
    return createTheme({
      ...settings,
      paletteMode,
    });
  }, [settings, paletteMode]);

  useEffect(() => {
    setPaletteMode(settings.paletteMode);
  }, [settings.paletteMode]);

  const handleModeSwitch = useCallback(() => {
    setPaletteMode((prevState) => {
      return prevState === 'light' ? 'dark' : 'light';
    });
  }, []);

  return (
    <Card variant="outlined" {...other}>
      <CardHeader
        action={
          <IconButton onClick={handleModeSwitch}>
            <SvgIcon fontSize="small">
              {paletteMode === 'light' ? <Moon01Icon /> : <SunIcon />}
            </SvgIcon>
          </IconButton>
        }
        title={title}
      />
      <Divider />
      <ThemeProvider theme={theme}>
        <Box sx={{ colorScheme: paletteMode }}>{children}</Box>
      </ThemeProvider>
    </Card>
  );
};

Previewer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
