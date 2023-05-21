import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import EyeIcon from '@untitled-ui/icons-react/build/esm/Eye';
import FileCheck03Icon from '@untitled-ui/icons-react/build/esm/FileCheck03';
import ListIcon from '@untitled-ui/icons-react/build/esm/List';
import MessageDotsCircleIcon from '@untitled-ui/icons-react/build/esm/MessageDotsCircle';
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardMedia,
  Chip,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { useSelector } from '../../../store';

const useTask = (taskId) => {
  return useSelector((state) => {
    const { tasks } = state.kanban;

    return tasks.byId[taskId];
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

export const TaskCard = forwardRef((props, ref) => {
  const { taskId, dragging, onOpen, ...other } = props;
  const task = useTask(taskId);
  const assignees = useAssignees(task?.assigneesIds);

  if (!task) {
    return null;
  }

  const hasAssignees = task.assigneesIds.length > 0;
  const hasAttachments = task.attachments.length > 0;
  const hasChecklists = task.checklists.length > 0;
  const hasComments = task.comments.length > 0;
  const hasLabels = task.labels.length > 0;

  return (
    <Card
      elevation={dragging ? 8 : 1}
      onClick={onOpen}
      ref={ref}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'neutral.800' : 'background.paper',
        ...(dragging && {
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? 'neutral.800' : 'background.paper',
        }),
        p: 3,
        userSelect: 'none',
        '&:hover': {
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? 'neutral.700' : 'neutral.50',
        },
        '&.MuiPaper-elevation1': {
          boxShadow: 1,
        },
      }}
      {...other}
    >
      {hasAttachments && (
        <CardMedia
          image={task.attachments[0].url}
          sx={{
            borderRadius: 1.5,
            height: 120,
            mb: 1,
          }}
        />
      )}
      <Typography variant="subtitle1">{task.name}</Typography>
      {hasLabels && (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            m: -1,
            mt: 1,
          }}
        >
          {task.labels.map((label) => (
            <Chip key={label} label={label} size="small" sx={{ m: 1 }} />
          ))}
        </Box>
      )}
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
      >
        <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
          {task.isSubscribed && (
            <SvgIcon color="action">
              <EyeIcon />
            </SvgIcon>
          )}
          {hasAttachments && (
            <SvgIcon color="action">
              <FileCheck03Icon />
            </SvgIcon>
          )}
          {hasChecklists && (
            <SvgIcon color="action">
              <ListIcon />
            </SvgIcon>
          )}
          {hasComments && (
            <SvgIcon color="action">
              <MessageDotsCircleIcon />
            </SvgIcon>
          )}
        </Stack>
        {hasAssignees && (
          <AvatarGroup max={3}>
            {assignees.map((assignee) => (
              <Avatar key={assignee.id} src={assignee.avatar || undefined} />
            ))}
          </AvatarGroup>
        )}
      </Stack>
    </Card>
  );
});

TaskCard.propTypes = {
  taskId: PropTypes.string.isRequired,
  dragging: PropTypes.bool,
};

TaskCard.defaultProps = {
  dragging: false,
};
