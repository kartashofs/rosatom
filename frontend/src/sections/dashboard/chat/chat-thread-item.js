import PropTypes from 'prop-types';
import { formatDistanceStrict } from 'date-fns';
import {
  Avatar,
  avatarClasses,
  AvatarGroup,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import { useMockedUser } from '../../../hooks/use-mocked-user';
import { customLocale } from '../../../utils/date-locale';

const getLastMessage = (thread) => {
  return thread.messages?.[thread.messages.length - 1];
};

const getRecipients = (participants, userId) => {
  return participants.filter((participant) => participant.id !== userId);
};

const getDisplayName = (recipients) => {
  return recipients.map((participant) => participant.name).join(', ');
};

const getDisplayContent = (userId, lastMessage) => {
  if (!lastMessage) {
    return '';
  }

  const author = lastMessage.authorId === userId ? 'Me: ' : '';
  const message =
    lastMessage.contentType === 'image' ? 'Sent a photo' : lastMessage.body;

  return `${author}${message}`;
};

const getLastActivity = (lastMessage) => {
  if (!lastMessage) {
    return null;
  }

  return formatDistanceStrict(lastMessage.createdAt, new Date(), {
    addSuffix: false,
    locale: customLocale,
  });
};

export const ChatThreadItem = (props) => {
  const { active, thread, onSelect, ...other } = props;
  const user = useMockedUser();

  const recipients = getRecipients(thread.participants || [], user.id);
  const lastMessage = getLastMessage(thread);
  const lastActivity = getLastActivity(lastMessage);
  const displayName = getDisplayName(recipients);
  const displayContent = getDisplayContent(user.id, lastMessage);
  const groupThread = recipients.length > 1;
  const isUnread = !!(thread.unreadCount && thread.unreadCount > 0);

  return (
    <Stack
      component="li"
      direction="row"
      onClick={onSelect}
      spacing={2}
      sx={{
        borderRadius: 2.5,
        cursor: 'pointer',
        px: 3,
        py: 2,
        '&:hover': {
          backgroundColor: 'action.hover',
        },
        ...(active && {
          backgroundColor: 'action.hover',
        }),
      }}
      {...other}
    >
      <div>
        <AvatarGroup
          max={2}
          sx={{
            [`& .${avatarClasses.root}`]: groupThread
              ? {
                  height: 26,
                  width: 26,
                  '&:nth-of-type(2)': {
                    mt: '10px',
                  },
                }
              : {
                  height: 36,
                  width: 36,
                },
          }}
        >
          {recipients.map((recipient) => (
            <Avatar key={recipient.id} src={recipient.avatar || undefined} />
          ))}
        </AvatarGroup>
      </div>
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        <Typography noWrap variant="subtitle2">
          {displayName}
        </Typography>
        <Stack alignItems="center" direction="row" spacing={1}>
          {isUnread && (
            <Box
              sx={{
                backgroundColor: 'primary.main',
                borderRadius: '50%',
                height: 8,
                width: 8,
              }}
            />
          )}
          <Typography
            color="text.secondary"
            noWrap
            sx={{ flexGrow: 1 }}
            variant="subtitle2"
          >
            {displayContent}
          </Typography>
        </Stack>
      </Box>
      {lastActivity && (
        <Typography
          color="text.secondary"
          sx={{ whiteSpace: 'nowrap' }}
          variant="caption"
        >
          {lastActivity}
        </Typography>
      )}
    </Stack>
  );
};

ChatThreadItem.propTypes = {
  active: PropTypes.bool,
  onSelect: PropTypes.func,
  // @ts-ignore
  thread: PropTypes.object.isRequired,
};

ChatThreadItem.defaultProps = {
  active: false,
};
