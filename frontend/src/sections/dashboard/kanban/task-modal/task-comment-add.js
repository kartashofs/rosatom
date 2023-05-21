import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, OutlinedInput, Stack } from '@mui/material';

export const TaskCommentAdd = (props) => {
  const { avatar, onAdd, ...other } = props;
  const [message, setMessage] = useState('');

  const handleMessageChange = useCallback((event) => {
    setMessage(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      if (!message) {
        return;
      }

      onAdd?.(message);
      setMessage('');
    },
    [message, onAdd],
  );

  return (
    <Stack alignItems="flex-start" direction="row" spacing={2} {...other}>
      <Avatar src={avatar} />
      <Box component="form" onSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
        <OutlinedInput
          fullWidth
          multiline
          onChange={handleMessageChange}
          placeholder="Write a comment..."
          rows={3}
          size="small"
          value={message}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mt: 3,
          }}
        >
          <Button size="small" type="submit" variant="contained">
            Comment
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

TaskCommentAdd.propTypes = {
  avatar: PropTypes.string.isRequired,
  onAdd: PropTypes.func,
};
