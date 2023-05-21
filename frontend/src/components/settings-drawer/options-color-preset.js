import PropTypes from 'prop-types';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { blue, green, indigo, purple } from '../../theme/colors';

export const OptionsColorPreset = (props) => {
  const { onChange, value } = props;

  const options = [
    {
      label: 'Green',
      value: 'green',
      color: green.main,
    },
    {
      label: 'Blue',
      value: 'blue',
      color: blue.main,
    },
    {
      label: 'Indigo',
      value: 'indigo',
      color: indigo.main,
    },
    {
      label: 'Purple',
      value: 'purple',
      color: purple.main,
    },
  ];

  return (
    <Stack spacing={1}>
      <Typography color="text.secondary" variant="overline">
        Primary Color
      </Typography>
      <Stack alignItems="center" direction="row" flexWrap="wrap" gap={2}>
        {options.map((option) => (
          <Chip
            icon={
              <Box
                sx={{
                  backgroundColor: option.color,
                  borderRadius: '50%',
                  flexShrink: 0,
                  height: 24,
                  width: 24,
                }}
              />
            }
            key={option.value}
            label={option.label}
            onClick={() => onChange?.(option.value)}
            sx={{
              borderColor: 'transparent',
              borderRadius: 1.5,
              borderStyle: 'solid',
              borderWidth: 2,
              ...(option.value === value && {
                borderColor: 'primary.main',
              }),
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

OptionsColorPreset.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOf(['blue', 'green', 'indigo', 'purple']),
};
