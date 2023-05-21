import { useMemo } from 'react';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import {
  Box,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Input,
  Stack,
  SvgIcon,
} from '@mui/material';
import { MultiSelect } from '../../../components/multi-select';

const categoryOptions = [
  {
    label: 'Digital',
    value: 'digital',
  },
  {
    label: 'Service',
    value: 'service',
  },
];

const statusOptions = [
  {
    label: 'Published',
    value: 'published',
  },
  {
    label: 'Draft',
    value: 'draft',
  },
];

const stockOptions = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Available',
    value: 'available',
  },
  {
    label: 'Out of Stock',
    value: 'outOfStock',
  },
];

export const Form2 = () => {
  // We memoize this part to prevent re-render issues
  const chips = useMemo(
    () => [
      {
        label: 'Category',
        field: 'category',
        value: 'digital',
        displayValue: 'Digital',
      },
      {
        label: 'Category',
        field: 'category',
        value: 'service',
        displayValue: 'Service',
      },
      {
        label: 'Status',
        field: 'status',
        value: 'published',
        displayValue: 'Published',
      },
      {
        label: 'Stock',
        field: 'inStock',
        value: 'outOfStock',
        displayValue: 'Out of Stock',
      },
    ],
    [],
  );

  const categoryValues = useMemo(
    () =>
      chips
        .filter((chip) => chip.field === 'category')
        .map((chip) => chip.value),
    [chips],
  );

  const statusValues = useMemo(
    () =>
      chips.filter((chip) => chip.field === 'status').map((chip) => chip.value),
    [chips],
  );

  const stockValues = useMemo(
    () =>
      chips
        .filter((chip) => chip.field === 'inStock')
        .map((chip) => chip.value),
    [chips],
  );

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          p: 2,
        }}
      >
        <SvgIcon>
          <SearchMdIcon />
        </SvgIcon>
        <Box
          sx={{
            flexGrow: 1,
            ml: 3,
          }}
        >
          <Input disableUnderline fullWidth placeholder="Enter a keyword" />
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          p: 2,
        }}
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
                <span>{chip.label}</span>: {chip.displayValue}
              </Box>
            }
            onDelete={() => {}}
            sx={{ m: 1 }}
            variant="outlined"
          />
        ))}
      </Box>
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        spacing={2}
        sx={{ p: 1 }}
      >
        <MultiSelect
          label="Category"
          options={categoryOptions}
          value={categoryValues}
        />
        <MultiSelect
          label="Status"
          options={statusOptions}
          value={statusValues}
        />
        <MultiSelect label="Stock" options={stockOptions} value={stockValues} />
        <Box sx={{ flexGrow: 1 }} />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="In network"
        />
      </Stack>
    </Box>
  );
};
