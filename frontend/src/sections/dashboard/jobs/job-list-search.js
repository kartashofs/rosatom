import { useMemo } from 'react';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import {
  Box,
  Card,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Input,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { MultiSelect } from '../../../components/multi-select';

const typeOptions = [
  {
    label: 'Freelance',
    value: 'freelance',
  },
  {
    label: 'Full Time',
    value: 'fullTime',
  },
  {
    label: 'Part Time',
    value: 'partTime',
  },
  {
    label: 'Internship',
    value: 'internship',
  },
];

const levelOptions = [
  {
    label: 'Novice',
    value: 'novice',
  },
  {
    label: 'Expert',
    value: 'expert',
  },
];

const locationOptions = [
  {
    label: 'Africa',
    value: 'africa',
  },
  {
    label: 'Asia',
    value: 'asia',
  },
  {
    label: 'Europe',
    value: 'europe',
  },
  {
    label: 'North America',
    value: 'northAmerica',
  },
  {
    label: 'South America',
    value: 'southAmerica',
  },
];

const roleOptions = [
  {
    label: 'Web Developer',
    value: 'webDeveloper',
  },
  {
    label: 'Android Developer',
    value: 'androidDeveloper',
  },
  {
    label: 'iOS Developer',
    value: 'iosDeveloper',
  },
];

export const JobListSearch = (props) => {
  const chips = useMemo(
    () => [
      {
        label: 'Type',
        field: 'type',
        value: 'freelance',
        displayValue: 'Freelance',
      },
      {
        label: 'Type',
        field: 'type',
        value: 'internship',
        displayValue: 'Internship',
      },
      {
        label: 'Level',
        field: 'level',
        value: 'novice',
        displayValue: 'Novice',
      },
      {
        label: 'Location',
        field: 'location',
        value: 'asia',
        displayValue: 'Asia',
      },
      {
        label: 'Role',
        field: 'role',
        value: 'webDeveloper',
        displayValue: 'Web Developer',
      },
    ],
    [],
  );

  // We memoize this part to prevent re-render issues
  const typeValues = useMemo(
    () =>
      chips.filter((chip) => chip.field === 'type').map((chip) => chip.value),
    [chips],
  );

  const levelValues = useMemo(
    () =>
      chips.filter((chip) => chip.field === 'level').map((chip) => chip.value),
    [chips],
  );

  const locationValues = useMemo(
    () =>
      chips
        .filter((chip) => chip.field === 'location')
        .map((chip) => chip.value),
    [chips],
  );

  const roleValues = useMemo(
    () =>
      chips.filter((chip) => chip.field === 'role').map((chip) => chip.value),
    [chips],
  );

  const showChips = chips.length > 0;

  return (
    <Card {...props}>
      <Stack alignItems="center" direction="row" spacing={2} sx={{ p: 2 }}>
        <SvgIcon>
          <SearchMdIcon />
        </SvgIcon>
        <Box sx={{ flexGrow: 1 }}>
          <Input disableUnderline fullWidth placeholder="Enter a keyword" />
        </Box>
      </Stack>
      <Divider />
      {showChips ? (
        <Stack
          alignItems="center"
          direction="row"
          flexWrap="wrap"
          gap={1}
          sx={{ p: 2 }}
        >
          {chips.map((chip, index) => (
            <Chip
              key={index}
              label={
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    '& span': {
                      fontWeight: 600,
                    },
                  }}
                >
                  <>
                    <span>{chip.label}</span>: {chip.displayValue || chip.value}
                  </>
                </Box>
              }
              onDelete={() => {}}
              variant="outlined"
            />
          ))}
        </Stack>
      ) : (
        <Box sx={{ p: 2.5 }}>
          <Typography color="text.secondary" variant="subtitle2">
            No filters applied
          </Typography>
        </Box>
      )}
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        spacing={2}
        sx={{ p: 1 }}
      >
        <MultiSelect label="Type" options={typeOptions} value={typeValues} />
        <MultiSelect label="Level" options={levelOptions} value={levelValues} />
        <MultiSelect
          label="Location"
          options={locationOptions}
          value={locationValues}
        />
        <MultiSelect label="Role" options={roleOptions} value={roleValues} />
        <Box sx={{ flexGrow: 1 }} />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="In network"
        />
      </Stack>
    </Card>
  );
};
