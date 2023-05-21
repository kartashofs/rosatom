import AlertTriangleIcon from '@untitled-ui/icons-react/build/esm/AlertTriangle';
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';

export const Modal8 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Container maxWidth="sm">
      <Paper elevation={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: 'flex',
            p: 3,
          }}
        >
          <Avatar
            sx={{
              backgroundColor: 'error.lightest',
              color: 'error.main',
            }}
          >
            <SvgIcon>
              <AlertTriangleIcon />
            </SvgIcon>
          </Avatar>
          <div>
            <Typography variant="h5">Deactivate account</Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }} variant="body2">
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </Typography>
          </div>
        </Stack>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            pb: 3,
            px: 3,
          }}
        >
          <Button color="inherit" sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button
            sx={{
              backgroundColor: 'error.main',
              '&:hover': {
                backgroundColor: 'error.dark',
              },
            }}
            variant="contained"
          >
            Deactivate
          </Button>
        </Box>
      </Paper>
    </Container>
  </Box>
);
