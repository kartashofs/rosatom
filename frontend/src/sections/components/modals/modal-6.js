import Settings01Icon from '@untitled-ui/icons-react/build/esm/Settings01';
import User01Icon from '@untitled-ui/icons-react/build/esm/User01';
import {
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  SvgIcon,
  Typography,
} from '@mui/material';

export const Modal6 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Paper
      elevation={12}
      sx={{
        maxWidth: 320,
        mx: 'auto',
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2">demo@atomanalytics.ru</Typography>
        <Typography color="text.secondary" variant="subtitle2">
          Devias
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ mt: 2 }}>
        <MenuItem>
          <ListItemIcon>
            <SvgIcon>
              <User01Icon />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="subtitle2">Profile</Typography>}
          />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SvgIcon>
              <Settings01Icon />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="subtitle2">Settings</Typography>}
          />
        </MenuItem>
      </Box>
      <Box sx={{ p: 2 }}>
        <Button fullWidth variant="outlined">
          Logout
        </Button>
      </Box>
    </Paper>
  </Box>
);
