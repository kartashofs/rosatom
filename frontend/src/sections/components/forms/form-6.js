import { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';

export const Form6 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Box sx={{ p: 3 }}>
      <form onSubmit={(event) => event.preventDefault()}>
        <Stack spacing={3}>
          <TextField fullWidth label="Title" name="title" />
          <TextField fullWidth label="Description" name="description" />
          <div>
            <FormControlLabel
              control={<Switch name="allDay" />}
              label="All day"
            />
          </div>
          <DateTimePicker
            onChange={(newDate) => setStartDate(newDate)}
            label="Start date"
            renderInput={(inputProps) => (
              <TextField fullWidth {...inputProps} />
            )}
            value={startDate}
          />
          <DateTimePicker
            onChange={(newDate) => setEndDate(newDate)}
            label="End date"
            renderInput={(inputProps) => (
              <TextField fullWidth {...inputProps} />
            )}
            value={endDate}
          />
        </Stack>
        <Divider sx={{ my: 3 }} />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit">Cancel</Button>
          <Button sx={{ ml: 1 }} type="submit" variant="contained">
            Confirm
          </Button>
        </Box>
      </form>
    </Box>
  );
};
