import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import {
  Box,
  Button,
  Card,
  OutlinedInput,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';

export const TaskAdd = (props) => {
  const { onAdd, ...other } = props;
  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState('');

  const handleNameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handleAddInit = useCallback(() => {
    setIsAdding(true);
  }, []);

  const handleAddCancel = useCallback(() => {
    setIsAdding(false);
    setName('');
  }, []);

  const handleAddConfirm = useCallback(async () => {
    onAdd?.(name);
    setIsAdding(false);
    setName('');
  }, [name, onAdd]);

  return (
    <Card
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'neutral.800' : 'background.paper',
      }}
      {...other}
    >
      {isAdding ? (
        <Box sx={{ p: 2 }}>
          <OutlinedInput
            autoFocus
            fullWidth
            placeholder="My new task"
            name="name"
            onChange={handleNameChange}
            sx={{
              '& .MuiInputBase-input': {
                px: 2,
                py: 1,
              },
            }}
            value={name}
          />
          <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button
              onClick={handleAddConfirm}
              size="small"
              startIcon={
                <SvgIcon>
                  <PlusIcon />
                </SvgIcon>
              }
              variant="contained"
            >
              Add Task
            </Button>
            <Button color="inherit" onClick={handleAddCancel} size="small">
              Cancel
            </Button>
          </Stack>
        </Box>
      ) : (
        <Stack
          alignItems="center"
          direction="row"
          onClick={handleAddInit}
          spacing={1}
          sx={{
            cursor: 'pointer',
            p: 2,
            userSelect: 'none',
          }}
        >
          <SvgIcon color="action">
            <PlusIcon />
          </SvgIcon>
          <Typography color="text.secondary" variant="subtitle1">
            Add Task
          </Typography>
        </Stack>
      )}
    </Card>
  );
};

TaskAdd.propTypes = {
  onAdd: PropTypes.func,
};
