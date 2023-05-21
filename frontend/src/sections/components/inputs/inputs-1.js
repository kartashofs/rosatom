import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';

export const Inputs1 = () => (
  <Box sx={{ p: 3 }}>
    <Stack spacing={1}>
      <Typography variant="subtitle2">System</Typography>
      <Typography color="text.secondary" variant="body2">
        You will receive emails in your business email address
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={<Typography variant="body1">Email alerts</Typography>}
        />
        <FormControlLabel
          control={<Checkbox />}
          label={<Typography variant="body1">Push Notifications</Typography>}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={<Typography variant="body1">Text message</Typography>}
        />
      </FormGroup>
    </Stack>
  </Box>
);
