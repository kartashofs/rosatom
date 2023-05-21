import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import { Box, Button, Card, Stack, SvgIcon, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const platformOptions = ['Web', 'Node.js', 'Python', 'C#'];

export const CourseSearch = () => {
  return (
    <Card>
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        gap={3}
        sx={{ p: 3 }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            defaultValue=""
            fullWidth
            label="Search"
            name="query"
            placeholder="Title or description"
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            defaultValue="web"
            fullWidth
            label="Platform"
            name="platform"
            select
            SelectProps={{ native: true }}
          >
            {platformOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </Box>
        <div>
          <DatePicker
            inputFormat="dd/MM/yyyy"
            label="From"
            onChange={() => {}}
            renderInput={(inputProps) => <TextField {...inputProps} />}
            value={new Date()}
          />
        </div>
        <div>
          <DatePicker
            inputFormat="dd/MM/yyyy"
            label="To"
            onChange={() => {}}
            renderInput={(inputProps) => <TextField {...inputProps} />}
            value={new Date()}
          />
        </div>
        <Button
          size="large"
          startIcon={
            <SvgIcon>
              <SearchMdIcon />
            </SvgIcon>
          }
          variant="contained"
        >
          Search
        </Button>
      </Stack>
    </Card>
  );
};
