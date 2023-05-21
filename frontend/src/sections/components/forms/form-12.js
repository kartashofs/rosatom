import { Box, Button, Stack, TextField } from '@mui/material';

const categoryOptions = [
  {
    label: 'Shirts',
    value: 'shirts',
  },
  {
    label: 'Phones',
    value: 'phones',
  },
  {
    label: 'Cars',
    value: 'cars',
  },
];

export const Form12 = () => (
  <Box sx={{ p: 3 }}>
    <form onSubmit={(event) => event.preventDefault()}>
      <Stack spacing={3}>
        <TextField
          fullWidth
          label="Category"
          name="category"
          select
          SelectProps={{ native: true }}
        >
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField fullWidth label="Product Code" name="productCode" />
        <TextField fullWidth label="Product Sku" name="productSku" />
      </Stack>
      <Box sx={{ mt: 3 }}>
        <Button type="submit" variant="contained">
          Create Product
        </Button>
      </Box>
    </form>
  </Box>
);
