import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import { Button, OutlinedInput, Stack, SvgIcon } from '@mui/material';

export const TaskCheckItemAdd = (props) => {
  const { onAdd, ...other } = props;
  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState('');

  const handleAdd = useCallback(() => {
    setIsAdding(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsAdding(false);
    setName('');
  }, []);

  const handleChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handleSave = useCallback(async () => {
    if (!name) {
      return;
    }

    onAdd?.(name);
    setIsAdding(false);
    setName('');
  }, [name, onAdd]);

  return (
    <div {...other}>
      {isAdding ? (
        <Stack alignItems="center" direction="row" spacing={2}>
          <OutlinedInput
            onChange={handleChange}
            placeholder="Add an item"
            value={name}
            sx={{
              flexGrow: 1,
              '& .MuiInputBase-input': {
                px: 2,
                py: 1,
              },
            }}
          />
          <Button onClick={handleSave} size="small" variant="contained">
            Add
          </Button>
          <Button color="inherit" onClick={handleCancel} size="small">
            Cancel
          </Button>
        </Stack>
      ) : (
        <Button
          color="inherit"
          onClick={handleAdd}
          size="small"
          startIcon={
            <SvgIcon>
              <PlusIcon />
            </SvgIcon>
          }
        >
          Add Item
        </Button>
      )}
    </div>
  );
};

TaskCheckItemAdd.propTypes = {
  onAdd: PropTypes.func,
};
