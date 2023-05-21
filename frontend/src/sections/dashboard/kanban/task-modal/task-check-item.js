import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Trash02Icon from '@untitled-ui/icons-react/build/esm/Trash02';
import {
  Button,
  Checkbox,
  IconButton,
  Input,
  Stack,
  SvgIcon,
} from '@mui/material';

export const TaskCheckItem = (props) => {
  const {
    checkItem,
    isRenaming = false,
    onCheck,
    onDelete,
    onRenameCancel,
    onRenameComplete,
    onRenameInit,
    onUncheck,
    ...other
  } = props;
  const [nameCopy, setNameCopy] = useState(checkItem.name);

  const handleNameReset = useCallback(() => {
    setNameCopy(checkItem.name);
  }, [checkItem]);

  useEffect(
    () => {
      handleNameReset();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checkItem],
  );

  const handleCheckChange = useCallback(
    (event) => {
      if (event.target.checked) {
        onCheck?.();
      } else {
        onUncheck?.();
      }
    },
    [onCheck, onUncheck],
  );

  const handleNameChange = useCallback((event) => {
    setNameCopy(event.target.value);
  }, []);

  const handleRenameCancel = useCallback(() => {
    setNameCopy(checkItem.name);
    onRenameCancel?.();
  }, [checkItem, onRenameCancel]);

  const handleRenameComplete = useCallback(async () => {
    onRenameComplete?.(nameCopy);
  }, [nameCopy, onRenameComplete]);

  const isChecked = checkItem.state === 'complete';
  const isDashed = !isRenaming && isChecked;

  return (
    <Stack
      alignItems="center"
      direction="row"
      spacing={1}
      sx={{
        px: 3,
        py: 1,
      }}
      {...other}
    >
      <Checkbox edge="start" checked={isChecked} onChange={handleCheckChange} />
      <Stack
        alignItems="center"
        direction="row"
        spacing={2}
        sx={{ flexGrow: 1 }}
      >
        <Input
          disableUnderline
          fullWidth
          onChange={handleNameChange}
          onClick={onRenameInit}
          sx={{
            ...(isDashed && {
              textDecoration: 'line-through',
            }),
            '& .MuiInputBase-input': {
              borderRadius: 1.5,
              fontWeight: 500,
              overflow: 'hidden',
              px: 2,
              py: 1,
              textOverflow: 'ellipsis',
              wordWrap: 'break-word',
              '&:hover, &:focus': {
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
                borderRadius: 1,
              },
            },
          }}
          value={nameCopy}
        />
        {isRenaming ? (
          <>
            <Button
              onClick={handleRenameComplete}
              size="small"
              variant="contained"
            >
              Update
            </Button>
            <Button color="inherit" onClick={handleRenameCancel} size="small">
              Cancel
            </Button>
          </>
        ) : (
          <IconButton onClick={onDelete}>
            <SvgIcon fontSize="small">
              <Trash02Icon />
            </SvgIcon>
          </IconButton>
        )}
      </Stack>
    </Stack>
  );
};

TaskCheckItem.propTypes = {
  // @ts-ignore
  checkItem: PropTypes.object.isRequired,
  isRenaming: PropTypes.bool,
  onCheck: PropTypes.func,
  onDelete: PropTypes.func,
  onRenameCancel: PropTypes.func,
  onRenameComplete: PropTypes.func,
  onRenameInit: PropTypes.func,
  onUncheck: PropTypes.func,
};
