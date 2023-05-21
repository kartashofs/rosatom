import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';

export const QuickStats7 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Card>
      <CardHeader title="Profile Progress" />
      <Divider />
      <CardContent>
        <Stack spacing={2}>
          <LinearProgress value={50} variant="determinate" />
          <Typography color="text.secondary" variant="subtitle2">
            50% Set Up Complete
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  </Box>
);
