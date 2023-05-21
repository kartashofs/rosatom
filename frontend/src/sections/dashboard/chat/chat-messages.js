import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import { ChatMessage } from './chat-message';
import { useMockedUser } from '../../../hooks/use-mocked-user';

const getAuthor = (message, participants, user) => {
  const participant = participants.find(
    (participant) => participant.id === message.authorId,
  );

  // This should never happen
  if (!participant) {
    return {
      name: 'Unknown',
      avatar: '',
      isUser: false,
    };
  }

  // Since chat mock db is not synced with external auth providers
  // we set the user details from user auth state instead of thread participants
  if (message.authorId === user.id) {
    return {
      name: 'Me',
      avatar: user.avatar,
      isUser: true,
    };
  }

  return {
    avatar: participant.avatar,
    name: participant.name,
    isUser: false,
  };
};

export const ChatMessages = (props) => {
  const { messages, participants, ...other } = props;
  const user = useMockedUser();

  return (
    <Stack spacing={2} sx={{ p: 3 }} {...other}>
      {messages.map((message) => {
        const author = getAuthor(message, participants, user);

        return (
          <ChatMessage
            authorAvatar={author.avatar}
            authorName={author.name}
            body={message.body}
            contentType={message.contentType}
            createdAt={message.createdAt}
            key={message.id}
            position={author.isUser ? 'right' : 'left'}
          />
        );
      })}
    </Stack>
  );
};

ChatMessages.propTypes = {
  // @ts-ignore
  messages: PropTypes.array,
  // @ts-ignore
  participants: PropTypes.array,
};
