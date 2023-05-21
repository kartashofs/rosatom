import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Unstable_Grid2 as Grid,
} from '@mui/material';

export const Form11 = () => (
  <Box sx={{ p: 3 }}>
    <form onSubmit={(event) => event.preventDefault()}>
      <Grid container spacing={3}>
        <Grid xs={12} md={6}>
          <TextField fullWidth label="Price" name="price" type="number" />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Sale price"
            name="salePrice"
            type="number"
          />
        </Grid>
        <Grid xs={12}>
          <div>
            <FormControlLabel
              control={<Checkbox name="isTaxable" />}
              label="Product is taxable"
            />
          </div>
          <div>
            <FormControlLabel
              control={<Checkbox name="includesTaxes" />}
              label="Price includes taxes"
            />
          </div>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mt: 3,
        }}
      >
        <Button type="submit" variant="contained">
          Update
        </Button>
      </Box>
    </form>
  </Box>
);
