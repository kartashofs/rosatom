import { Box, Typography } from '@mui/material';

export const ChatBlank = () => (
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
    }}
  >
    <Box
      component="img"
      src="/assets/errors/error-404.png"
      sx={{
        height: 'auto',
        maxWidth: 120,
      }}
    />
    <Typography color="text.secondary" sx={{ mt: 2 }} variant="subtitle1">
      Start meaningful conversations!
    </Typography>
  </Box>
);
