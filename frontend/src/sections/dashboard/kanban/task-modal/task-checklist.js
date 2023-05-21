import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Trash02Icon from '@untitled-ui/icons-react/build/esm/Trash02';
import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Input,
  LinearProgress,
  linearProgressClasses,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { TaskCheckItem } from './task-check-item';
import { TaskCheckItemAdd } from './task-check-item-add';

const calculateProgress = (checkItems) => {
  const totalCheckItems = checkItems.length;
  const completedCheckItems = checkItems.filter(
    (checkItem) => checkItem.state === 'complete',
  ).length;
  const progress =
    totalCheckItems === 0 ? 100 : (completedCheckItems / totalCheckItems) * 100;

  return Math.round(progress);
};

export const TaskChecklist = (props) => {
  const {
    checklist,
    onCheckItemAdd,
    onCheckItemDelete,
    onCheckItemCheck,
    onCheckItemUncheck,
    onCheckItemRename,
    onDelete,
    onRename,
    ...other
  } = props;
  const [nameCopy, setNameCopy] = useState(checklist.name);
  const [isRenaming, setIsRenaming] = useState(false);
  // The current check item that is being renamed
  const [checkItemId, setCheckItemId] = useState(null);

  const handleNameReset = useCallback(() => {
    setNameCopy(checklist.name);
  }, [checklist]);

  useEffect(
    () => {
      handleNameReset();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checklist],
  );

  const handleNameChange = useCallback((event) => {
    setNameCopy(event.target.value);
  }, []);

  const handleRenameInit = useCallback(() => {
    setIsRenaming(true);
  }, []);

  const handleRenameCancel = useCallback(() => {
    setIsRenaming(false);
    setNameCopy(checklist.name);
  }, [checklist]);

  const handleRenameComplete = useCallback(async () => {
    if (!nameCopy || nameCopy === checklist.name) {
      setIsRenaming(false);
      setNameCopy(checklist.name);
      return;
    }

    setIsRenaming(false);
    onRename?.(nameCopy);
  }, [checklist, nameCopy, onRename]);

  const handleCheckItemRenameInit = useCallback((checkItemId) => {
    setCheckItemId(checkItemId);
  }, []);

  const handleCheckItemRenameCancel = useCallback(() => {
    setCheckItemId(null);
  }, []);

  const handleCheckItemRenameComplete = useCallback(
    (checkItemId, name) => {
      setCheckItemId(null);
      onCheckItemRename?.(checkItemId, name);
    },
    [onCheckItemRename],
  );

  // Maybe use memo to calculate the progress
  const progress = calculateProgress(checklist.checkItems);
  const hasCheckItems = checklist.checkItems.length > 0;

  return (
    <Card variant="outlined" {...other}>
      <Stack alignItems="center" direction="row" spacing={2} sx={{ p: 1 }}>
        <Input
          disableUnderline
          fullWidth
          onChange={handleNameChange}
          onClick={handleRenameInit}
          sx={{
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
              Save
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
      <Stack
        alignItems="center"
        direction="row"
        spacing={2}
        sx={{
          pb: 3,
          pt: 2,
          px: 3,
        }}
      >
        <LinearProgress
          color="primary"
          sx={{
            borderRadius: 1,
            flexGrow: 1,
            height: 8,
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 'inherit',
            },
          }}
          value={progress}
          variant="determinate"
        />
        <Typography color="text.secondary" variant="body2">
          {progress}%
        </Typography>
      </Stack>
      <Divider />
      {hasCheckItems && (
        <>
          <Stack divider={<Divider />} spacing={1}>
            {checklist.checkItems.map((checkItem) => {
              const isRenaming = checkItemId === checkItem.id;

              return (
                <TaskCheckItem
                  key={checkItem.id}
                  checkItem={checkItem}
                  onCheck={() => onCheckItemCheck?.(checkItem.id)}
                  onDelete={() => onCheckItemDelete?.(checkItem.id)}
                  onRenameCancel={handleCheckItemRenameCancel}
                  onRenameComplete={(name) =>
                    handleCheckItemRenameComplete(checkItem.id, name)
                  }
                  onRenameInit={() => handleCheckItemRenameInit(checkItem.id)}
                  onUncheck={() => onCheckItemUncheck?.(checkItem.id)}
                  isRenaming={isRenaming}
                />
              );
            })}
          </Stack>
          <Divider />
        </>
      )}
      <Box sx={{ p: 1 }}>
        <TaskCheckItemAdd onAdd={onCheckItemAdd} />
      </Box>
    </Card>
  );
};

TaskChecklist.propTypes = {
  // @ts-ignore
  checklist: PropTypes.object.isRequired,
};
