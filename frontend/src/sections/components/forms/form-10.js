import { Box, Button, TextField, Typography } from '@mui/material';
import { QuillEditor } from '../../../components/quill-editor';

export const Form10 = () => (
  <Box sx={{ p: 3 }}>
    <form onSubmit={(event) => event.preventDefault()}>
      <TextField fullWidth label="Product Name" name="name" />
      <Typography
        sx={{
          mt: 3,
          mb: 2,
        }}
        variant="subtitle2"
      >
        Description
      </Typography>
      <QuillEditor placeholder="Write something" sx={{ height: 400 }} />
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
