import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';

const options = [
  {
    label: 'Compact',
    value: false,
    icon: (
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? 'neutral.900' : 'background.paper',
          flex: '1 1 auto',
          p: 1,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gap: 0.5,
            gridTemplateColumns: 'repeat(2, 1fr)',
            height: '100%',
            mx: 'auto',
            width: '70%',
          }}
        >
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'neutral.500' : 'neutral.300',
              borderRadius: 1,
              borderStyle: 'dashed',
              borderWidth: 1,
            }}
          />
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'neutral.500' : 'neutral.300',
              borderRadius: 1,
              borderStyle: 'dashed',
              borderWidth: 1,
            }}
          />
        </Box>
      </Box>
    ),
  },
  {
    label: 'Wide',
    value: true,
    icon: (
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? 'neutral.900' : 'background.paper',
          flex: '1 1 auto',
          p: 1,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gap: 0.5,
            gridTemplateColumns: 'repeat(2, 1fr)',
            height: '100%',
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'neutral.500' : 'neutral.300',
              borderRadius: 1,
              borderStyle: 'dashed',
              borderWidth: 1,
            }}
          />
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'neutral.500' : 'neutral.300',
              borderRadius: 1,
              borderStyle: 'dashed',
              borderWidth: 1,
            }}
          />
        </Box>
      </Box>
    ),
  },
];

export const OptionsStretch = (props) => {
  const { onChange, value } = props;

  return (
    <Stack spacing={1}>
      <Typography color="text.secondary" variant="overline">
        Content
      </Typography>
      <Box
        sx={{
          gap: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 140px))',
        }}
      >
        {options.map((option, index) => (
          <Stack key={index} spacing={1}>
            <Box
              onClick={() => onChange?.(option.value)}
              sx={{
                borderColor: 'divider',
                borderRadius: 1,
                borderStyle: 'solid',
                borderWidth: 2,
                cursor: 'pointer',
                display: 'flex',
                height: 64,
                overflow: 'hidden',
                ...(option.value === value && {
                  borderColor: 'primary.main',
                }),
              }}
            >
              {option.icon}
            </Box>
            <Typography align="center" sx={{ fontWight: 500 }} variant="body2">
              {option.label}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};

OptionsStretch.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.bool,
};
