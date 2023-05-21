import { useCallback, useState } from 'react';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import {
  Box,
  Button,
  OutlinedInput,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';

export const ColumnAdd = (props) => {
  const { onAdd, ...other } = props;
  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState('');

  const handleChange = useCallback((event) => {
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
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
        borderRadius: 2.5,
        mt: 7,
        mx: 1,
        width: {
          sm: 380,
          xs: 300,
        },
      }}
      {...other}
    >
      {isAdding ? (
        <Box sx={{ p: 2 }}>
          <OutlinedInput
            autoFocus
            fullWidth
            placeholder="My new column"
            name="name"
            onChange={handleChange}
            value={name}
            sx={{
              '& .MuiInputBase-input': {
                px: 2,
                py: 1,
              },
            }}
          />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              mt: 2,
            }}
          >
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
              Add Column
            </Button>
            <Button
              color="inherit"
              onClick={handleAddCancel}
              size="small"
              sx={{ ml: 2 }}
            >
              Cancel
            </Button>
          </Box>
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
            Add Column
          </Typography>
        </Stack>
      )}
    </Box>
  );
};
