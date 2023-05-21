import { useState } from 'react';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';

export const Form8 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const tags = ['Full-Time'];

  return (
    <Box sx={{ p: 3 }}>
      <form onSubmit={(event) => event.preventDefault()}>
        <Stack spacing={4}>
          <Stack spacing={1}>
            <Typography variant="h5">Please select one option</Typography>
            <Typography color="text.secondary" variant="body1">
              Proin tincidunt lacus sed ante efficitur efficitur. Quisque
              aliquam fringilla velit sit amet euismod.
            </Typography>
          </Stack>
          <Stack spacing={4}>
            <TextField fullWidth label="Project Name" name="projectName" />
            <Stack spacing={2}>
              <Stack alignItems="center" direction="row" spacing={2}>
                <TextField fullWidth label="Tags" name="tags" />
                <IconButton>
                  <SvgIcon>
                    <PlusIcon />
                  </SvgIcon>
                </IconButton>
              </Stack>
              <Stack
                alignItems="center"
                direction="row"
                flexWrap="wrap"
                spacing={1}
              >
                {tags.map((tag) => (
                  <Chip
                    avatar={<Avatar>{tag.slice(0, 1)}</Avatar>}
                    key={tag}
                    label={tag}
                    onDelete={() => {}}
                    variant="outlined"
                  />
                ))}
              </Stack>
            </Stack>
            <Stack alignItems="center" direction="row" spacing={3}>
              <MobileDatePicker
                label="Start Date"
                onChange={(newDate) => setStartDate(newDate)}
                renderInput={(inputProps) => <TextField {...inputProps} />}
                value={startDate}
              />
              <MobileDatePicker
                label="End Date"
                onChange={(newDate) => setEndDate(newDate)}
                renderInput={(inputProps) => <TextField {...inputProps} />}
                value={endDate}
              />
            </Stack>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button color="primary" type="submit" variant="contained">
              Next
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};
