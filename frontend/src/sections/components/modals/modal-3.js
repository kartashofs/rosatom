import XIcon from '@untitled-ui/icons-react/build/esm/X';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  SvgIcon,
} from '@mui/material';

export const Modal3 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Paper elevation={12}>
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton>
            <SvgIcon>
              <XIcon />
            </SvgIcon>
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ p: 3 }}>
        <Container maxWidth="md">
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <OutlinedInput
              fullWidth
              placeholder="Search..."
              startAdornment={
                <InputAdornment position="start">
                  <SvgIcon>
                    <SearchMdIcon />
                  </SvgIcon>
                </InputAdornment>
              }
            />
            <Button size="large" sx={{ ml: 2 }} variant="contained">
              Search
            </Button>
          </Box>
        </Container>
      </Box>
    </Paper>
  </Box>
);
