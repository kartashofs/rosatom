import { Box, Button, Stack } from '@mui/material';

export const Buttons1 = () => (
  <Box sx={{ p: 3 }}>
    <Stack spacing={3}>
      <Stack alignItems="center" direction="row" spacing={3}>
        <Button variant="contained">Default</Button>
        <Button disabled variant="contained">
          Disabled
        </Button>
      </Stack>
      <Stack alignItems="center" direction="row" spacing={3}>
        <Button variant="outlined">Default</Button>
        <Button color="primary" disabled variant="outlined">
          Disabled
        </Button>
      </Stack>
      <Stack alignItems="center" direction="row" spacing={3}>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
      </Stack>
    </Stack>
  </Box>
);
