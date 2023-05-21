import {
  Box,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';

const typeOptions = [
  {
    description: "I'm looking for teammates to join in a personal project",
    title: "I'm a freelancer",
    value: 'freelancer',
  },
  {
    description:
      "I'm looking for freelancer or contractors to take care of my project",
    title: 'I’m a project owner',
    value: 'projectOwner',
  },
  {
    description:
      "I'm looking for freelancer or contractors to take care of my project",
    title: 'I want to join affiliate',
    value: 'affiliate',
  },
];

export const Inputs2 = () => (
  <Box sx={{ p: 3 }}>
    <Stack component={RadioGroup} spacing={4}>
      <Stack spacing={1}>
        <Typography variant="h5">Please select one option</Typography>
        <Typography color="text.secondary" variant="body1">
          Proin tincidunt lacus sed ante efficitur efficitur. Quisque aliquam
          fringilla velit sit amet euismod.
        </Typography>
      </Stack>
      <Stack component={RadioGroup} spacing={3}>
        {typeOptions.map((option, index) => {
          const isDisabled = index === 2;

          return (
            <Paper
              key={option.value}
              sx={{
                alignItems: 'flex-start',
                display: 'flex',
                p: 2,
              }}
              variant="outlined"
            >
              <FormControlLabel
                control={<Radio />}
                disabled={isDisabled}
                key={option.value}
                label={
                  <Box sx={{ ml: 2 }}>
                    <Typography
                      sx={{
                        color: isDisabled ? 'action.disabled' : 'text.primary',
                      }}
                      variant="subtitle2"
                    >
                      {option.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: isDisabled
                          ? 'action.disabled'
                          : 'text.secondary',
                      }}
                      variant="body2"
                    >
                      {option.description}
                    </Typography>
                  </Box>
                }
                value={option.value}
              />
            </Paper>
          );
        })}
      </Stack>
    </Stack>
  </Box>
);
