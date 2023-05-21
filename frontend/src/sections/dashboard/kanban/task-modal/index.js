import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
// @ts-ignore
import debounce from 'lodash.debounce';
import ArchiveIcon from '@untitled-ui/icons-react/build/esm/Archive';
import EyeIcon from '@untitled-ui/icons-react/build/esm/Eye';
import EyeOffIcon from '@untitled-ui/icons-react/build/esm/EyeOff';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Chip,
  Divider,
  Drawer,
  IconButton,
  Input,
  Stack,
  SvgIcon,
  Tab,
  Tabs,
  Typography,
  Unstable_Grid2 as Grid,
  useMediaQuery,
} from '@mui/material';
import { useMockedUser } from '../../../../hooks/use-mocked-user';
import { useDispatch, useSelector } from '../../../../store';
import { thunks } from '../../../../thunks/kanban';
import { TaskChecklist } from './task-checklist';
import { TaskComment } from './task-comment';
import { TaskCommentAdd } from './task-comment-add';
import { TaskLabels } from './task-labels';
import { TaskStatus } from './task-status';

const useColumns = () => {
  return useSelector((state) => {
    const { columns } = state.kanban;

    return Object.values(columns.byId);
  });
};

const useTask = (taskId) => {
  return useSelector((state) => {
    const { tasks } = state.kanban;

    if (!taskId) {
      return null;
    }

    return tasks.byId[taskId] || null;
  });
};

const useColumn = (columnId) => {
  return useSelector((state) => {
    const { columns } = state.kanban;

    if (!columnId) {
      return null;
    }

    return columns.byId[columnId] || null;
  });
};

const useAuthor = (authorId) => {
  return useSelector((state) => {
    const { members } = state.kanban;

    if (!authorId) {
      return null;
    }

    return members.byId[authorId] || null;
  });
};

const useAssignees = (assigneesIds) => {
  return useSelector((state) => {
    const { members } = state.kanban;

    if (!assigneesIds) {
      return [];
    }

    return assigneesIds
      .map((assigneeId) => members.byId[assigneeId])
      .filter((assignee) => !!assignee);
  });
};

export const TaskModal = (props) => {
  const { taskId, onClose, open = false, ...other } = props;
  const user = useMockedUser();
  const dispatch = useDispatch();
  const columns = useColumns();
  const task = useTask(taskId);
  const column = useColumn(task?.columnId);
  const author = useAuthor(task?.authorId);
  const assignees = useAssignees(task?.assigneesIds);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [currentTab, setCurrentTab] = useState('overview');
  const [nameCopy, setNameCopy] = useState(task?.name || '');
  const debounceMs = 500;

  const handleTabsReset = useCallback(() => {
    setCurrentTab('overview');
  }, []);

  // Reset tab on task change
  useEffect(
    () => {
      handleTabsReset();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [taskId],
  );

  const handleNameReset = useCallback(() => {
    setNameCopy(task?.name || '');
  }, [task]);

  // Reset task name copy
  useEffect(
    () => {
      handleNameReset();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [task],
  );

  const handleTabsChange = useCallback((event, value) => {
    setCurrentTab(value);
  }, []);

  const handleMove = useCallback(
    async (columnId) => {
      try {
        await dispatch(
          thunks.moveTask({
            taskId: task.id,
            position: 0,
            columnId,
          }),
        );
        onClose?.();
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch, task, onClose],
  );

  const handleDelete = useCallback(async () => {
    try {
      await dispatch(
        thunks.deleteTask({
          taskId: task.id,
        }),
      );
      onClose?.();
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  }, [dispatch, task, onClose]);

  const handleNameUpdate = useCallback(
    async (name) => {
      try {
        await dispatch(
          thunks.updateTask({
            taskId: task.id,
            update: {
              name,
            },
          }),
        );
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch, task],
  );

  const handleNameBlur = useCallback(() => {
    if (!nameCopy) {
      setNameCopy(task.name);
      return;
    }

    if (nameCopy === task.name) {
      return;
    }

    handleNameUpdate(nameCopy);
  }, [task, nameCopy, handleNameUpdate]);

  const handleNameChange = useCallback((event) => {
    setNameCopy(event.target.value);
  }, []);

  const handleNameKeyUp = useCallback(
    (event) => {
      if (event.code === 'Enter') {
        if (nameCopy && nameCopy !== task.name) {
          handleNameUpdate(nameCopy);
        }
      }
    },
    [task, nameCopy, handleNameUpdate],
  );

  const handleDescriptionUpdate = useMemo(
    () =>
      debounce(async (description) => {
        try {
          await dispatch(
            thunks.updateTask({
              taskId: task.id,
              update: {
                description,
              },
            }),
          );
        } catch (err) {
          console.error(err);
          toast.error('Something went wrong!');
        }
      }, debounceMs),
    [dispatch, task],
  );

  const handleDescriptionChange = useCallback(
    (event) => {
      handleDescriptionUpdate(event.target.value);
    },
    [handleDescriptionUpdate],
  );

  const handleSubscribe = useCallback(async () => {
    try {
      await dispatch(
        thunks.updateTask({
          taskId: task.id,
          update: { isSubscribed: true },
        }),
      );
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  }, [dispatch, task]);

  const handleUnsubscribe = useCallback(async () => {
    try {
      await dispatch(
        thunks.updateTask({
          taskId: task.id,
          update: { isSubscribed: false },
        }),
      );
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  }, [dispatch, task]);

  const handleLabelsChange = useCallback(
    async (labels) => {
      try {
        await dispatch(
          thunks.updateTask({
            taskId: task.id,
            update: {
              labels,
            },
          }),
        );
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch, task],
  );

  const handleChecklistAdd = useCallback(async () => {
    try {
      await dispatch(
        thunks.addChecklist({
          taskId: task.id,
          name: 'Untitled Checklist',
        }),
      );
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  }, [dispatch, task]);

  const handleChecklistRename = useCallback(
    async (checklistId, name) => {
      try {
        await dispatch(
          thunks.updateChecklist({
            taskId: task.id,
            checklistId,
            update: { name },
          }),
        );
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch, task],
  );

  const handleChecklistDelete = useCallback(
    async (checklistId) => {
      try {
        await dispatch(
          thunks.deleteChecklist({
            taskId: task.id,
            checklistId,
          }),
        );
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch, task],
  );

  const handleCheckItemAdd = useCallback(
    async (checklistId, name) => {
      try {
        await dispatch(
          thunks.addCheckItem({
            taskId: task.id,
            checklistId,
            name,
          }),
        );
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch, task],
  );

  const handleCheckItemDelete = useCallback(
    async (checklistId, checkItemId) => {
      try {
        await dispatch(
          thunks.deleteCheckItem({
            taskId: task.id,
            checklistId,
            checkItemId,
          }),
        );
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch, task],
  );

  const handleCheckItemCheck = useCallback(
    async (checklistId, checkItemId) => {
      try {
        await dispatch(
          thunks.updateCheckItem({
            taskId: task.id,
            checklistId,
            checkItemId,
            update: {
              state: 'complete',
            },
          }),
        );
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch, task],
  );

  const handleCheckItemUncheck = useCallback(
    async (checklistId, checkItemId) => {
      try {
        await dispatch(
          thunks.updateCheckItem({
            taskId: task.id,
            checklistId,
            checkItemId,
            update: {
              state: 'incomplete',
            },
          }),
        );
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch, task],
  );

  const handleCheckItemRename = useCallback(
    async (checklistId, checkItemId, name) => {
      try {
        await dispatch(
          thunks.updateCheckItem({
            taskId: task.id,
            checklistId,
            checkItemId,
            update: {
              name,
            },
          }),
        );
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch, task],
  );

  const handleCommentAdd = useCallback(
    async (message) => {
      try {
        await dispatch(
          thunks.addComment({
            taskId: task.id,
            message,
          }),
        );
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch, task],
  );

  const statusOptions = useMemo(() => {
    return columns.map((column) => {
      return {
        label: column.name,
        value: column.id,
      };
    });
  }, [columns]);

  const content = !!(task && column) ? (
    <>
      <Stack
        alignItems={{
          sm: 'center',
        }}
        direction={{
          xs: 'column-reverse',
          sm: 'row',
        }}
        justifyContent={{
          sm: 'space-between',
        }}
        spacing={1}
        sx={{ p: 3 }}
      >
        <div>
          <TaskStatus
            onChange={(columnId) => handleMove(columnId)}
            options={statusOptions}
            value={column.id}
          />
        </div>
        <Stack
          justifyContent="flex-end"
          alignItems="center"
          direction="row"
          spacing={1}
        >
          {task.isSubscribed ? (
            <IconButton onClick={handleUnsubscribe}>
              <SvgIcon>
                <EyeOffIcon />
              </SvgIcon>
            </IconButton>
          ) : (
            <IconButton onClick={handleSubscribe}>
              <SvgIcon>
                <EyeIcon />
              </SvgIcon>
            </IconButton>
          )}
          <IconButton onClick={handleDelete}>
            <SvgIcon>
              <ArchiveIcon />
            </SvgIcon>
          </IconButton>
          {!mdUp && (
            <IconButton onClick={onClose}>
              <SvgIcon>
                <XIcon />
              </SvgIcon>
            </IconButton>
          )}
        </Stack>
      </Stack>
      <Box sx={{ px: 1 }}>
        <Input
          disableUnderline
          fullWidth
          onBlur={handleNameBlur}
          onChange={handleNameChange}
          onKeyUp={handleNameKeyUp}
          placeholder="Task name"
          sx={(theme) => ({
            ...theme.typography.h6,
            '& .MuiInputBase-input': {
              borderRadius: 1.5,
              overflow: 'hidden',
              px: 2,
              py: 1,
              textOverflow: 'ellipsis',
              wordWrap: 'break-word',
              '&:hover, &:focus': {
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
              },
            },
          })}
          value={nameCopy}
        />
      </Box>
      <Tabs onChange={handleTabsChange} sx={{ px: 3 }} value={currentTab}>
        <Tab value="overview" label="Overview" />
        <Tab value="checklists" label="Checklists" />
        <Tab value="comments" label="Comments" />
      </Tabs>
      <Divider />
      <Box sx={{ p: 3 }}>
        {currentTab === 'overview' && (
          <Grid container spacing={3}>
            <Grid xs={12} sm={4}>
              <Typography color="text.secondary" variant="caption">
                Created by
              </Typography>
            </Grid>
            <Grid xs={12} sm={8}>
              {author && <Avatar src={author.avatar || undefined} />}
            </Grid>
            <Grid xs={12} sm={4}>
              <Typography color="text.secondary" variant="caption">
                Assigned to
              </Typography>
            </Grid>
            <Grid xs={12} sm={8}>
              <Stack
                alignItems="center"
                direction="row"
                flexWrap="wrap"
                spacing={1}
              >
                <AvatarGroup max={5}>
                  {assignees.map((assignee) => (
                    <Avatar
                      key={assignee.id}
                      src={assignee.avatar || undefined}
                    />
                  ))}
                </AvatarGroup>
                <IconButton disabled>
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                </IconButton>
              </Stack>
            </Grid>
            <Grid xs={12} sm={4}>
              <Typography color="text.secondary" variant="caption">
                Attachments
              </Typography>
            </Grid>
            <Grid xs={12} sm={8}>
              <Stack
                alignItems="center"
                direction="row"
                flexWrap="wrap"
                spacing={1}
              >
                {task.attachments.map((attachment) => (
                  <Avatar
                    key={attachment.id}
                    src={attachment.url || undefined}
                    sx={{
                      height: 64,
                      width: 64,
                    }}
                    variant="rounded"
                  />
                ))}
                <IconButton disabled>
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                </IconButton>
              </Stack>
            </Grid>
            <Grid xs={12} sm={4}>
              <Typography color="text.secondary" variant="caption">
                Due date
              </Typography>
            </Grid>
            <Grid xs={12} sm={8}>
              {task.due && (
                <Chip size="small" label={format(task.due, 'MMM dd, yyyy')} />
              )}
            </Grid>
            <Grid xs={12} sm={4}>
              <Typography color="text.secondary" variant="caption">
                Labels
              </Typography>
            </Grid>
            <Grid xs={12} sm={8}>
              <TaskLabels labels={task.labels} onChange={handleLabelsChange} />
            </Grid>
            <Grid xs={12} sm={4}>
              <Typography color="text.secondary" variant="caption">
                Description
              </Typography>
            </Grid>
            <Grid xs={12} sm={8}>
              <Input
                defaultValue={task.description}
                fullWidth
                multiline
                disableUnderline
                onChange={handleDescriptionChange}
                placeholder="Leave a message"
                rows={6}
                sx={{
                  borderColor: 'divider',
                  borderRadius: 1,
                  borderStyle: 'solid',
                  borderWidth: 1,
                  p: 1,
                }}
              />
            </Grid>
          </Grid>
        )}
        {currentTab === 'checklists' && (
          <Stack spacing={2}>
            {task.checklists.map((checklist) => (
              <TaskChecklist
                key={checklist.id}
                checklist={checklist}
                onCheckItemAdd={(name) =>
                  handleCheckItemAdd(checklist.id, name)
                }
                onCheckItemDelete={(checkItemId) =>
                  handleCheckItemDelete(checklist.id, checkItemId)
                }
                onCheckItemCheck={(checkItemId) =>
                  handleCheckItemCheck(checklist.id, checkItemId)
                }
                onCheckItemUncheck={(checkItemId) =>
                  handleCheckItemUncheck(checklist.id, checkItemId)
                }
                onCheckItemRename={(checkItemId, name) =>
                  handleCheckItemRename(checklist.id, checkItemId, name)
                }
                onDelete={() => handleChecklistDelete(checklist.id)}
                onRename={(name) => handleChecklistRename(checklist.id, name)}
              />
            ))}
            <Button
              startIcon={
                <SvgIcon>
                  <PlusIcon />
                </SvgIcon>
              }
              onClick={handleChecklistAdd}
              variant="contained"
            >
              Add
            </Button>
          </Stack>
        )}
        {currentTab === 'comments' && (
          <Stack spacing={2}>
            {task.comments.map((comment) => (
              <TaskComment key={comment.id} comment={comment} />
            ))}
            <TaskCommentAdd avatar={user.avatar} onAdd={handleCommentAdd} />
          </Stack>
        )}
      </Box>
    </>
  ) : null;

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: 500,
        },
      }}
      {...other}
    >
      {content}
    </Drawer>
  );
};

TaskModal.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  taskId: PropTypes.string,
};
