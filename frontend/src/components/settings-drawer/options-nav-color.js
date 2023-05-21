import { Chip, Stack, Typography } from '@mui/material';

const options = [
  {
    label: 'Blend-in',
    value: 'blend-in',
  },
  {
    label: 'Discreet',
    value: 'discreet',
  },
  {
    label: 'Evident',
    value: 'evident',
  },
];

export const OptionsNavColor = (props) => {
  const { onChange, value } = props;

  return (
    <Stack spacing={1}>
      <Typography color="text.secondary" variant="overline">
        Nav Color
      </Typography>
      <Stack alignItems="center" direction="row" flexWrap="wrap" gap={2}>
        {options.map((option) => (
          <Chip
            key={option.label}
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
