import { Box, Button, Container, Stack, Typography } from '@mui/material';

export const HomeCta = () => (
  <Box
    sx={{
      backgroundColor: 'neutral.800',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundImage: 'url("/assets/gradient-bg.svg")',
      color: 'neutral.100',
      py: '120px',
    }}
  >
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <Typography align="center" color="inherit" variant="h3">
          Start saving time today!
        </Typography>
        <Typography align="center" color="inherit" variant="subtitle2">
          Not just a set of tools, the package includes ready-to-deploy
          conceptual applications written in JavaScript & TypeScript.
        </Typography>
      </Stack>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ mt: 3 }}
      >
        <Button
          component="a"
          href="https://mui.com/store/items/devias-kit-pro"
          target="_blank"
          variant="contained"
        >
          Purchase Now
        </Button>
      </Stack>
    </Container>
  </Box>
);
