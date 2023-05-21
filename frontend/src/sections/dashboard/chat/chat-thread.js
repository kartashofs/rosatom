import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, Divider, Stack } from '@mui/material';
import { chatApi } from '../../../api/chat';
import { Scrollbar } from '../../../components/scrollbar';
import { useMockedUser } from '../../../hooks/use-mocked-user';
import { paths } from '../../../paths';
import { useDispatch, useSelector } from '../../../store';
import { thunks } from '../../../thunks/chat';
import { ChatMessageAdd } from './chat-message-add';
import { ChatMessages } from './chat-messages';
import { ChatThreadToolbar } from './chat-thread-toolbar';

const useParticipants = (threadKey) => {
  const router = useRouter();
  const [participants, setParticipants] = useState([]);

  const getParticipants = useCallback(async () => {
    try {
      const participants = await chatApi.getParticipants({ threadKey });
      setParticipants(participants);
    } catch (err) {
      console.error(err);
      router.push(paths.dashboard.chat);
    }
  }, [router, threadKey]);

  useEffect(
    () => {
      getParticipants();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [threadKey],
  );

  return participants;
};

const useThread = (threadKey) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const thread = useSelector((state) => {
    const { threads, currentThreadId } = state.chat;

    return threads.byId[currentThreadId];
  });

  const getThread = useCallback(async () => {
    // If thread key is not a valid key (thread id or contact id)
    // the server throws an error, this means that the user tried a shady route
    // and we redirect them on the home view

    let threadId;

    try {
      threadId = await dispatch(
        thunks.getThread({
          threadKey,
        }),
      );
    } catch (err) {
      console.error(err);
      router.push(paths.dashboard.chat);
      return;
    }

    // Set the active thread
    // If the thread exists, then is sets it as active, otherwise it sets is as undefined

    dispatch(
      thunks.setCurrentThread({
        threadId,
      }),
    );

    // Mark the thread as seen only if it exists

    if (threadId) {
      dispatch(
        thunks.markThreadAsSeen({
          threadId,
        }),
      );
    }
  }, [router, dispatch, threadKey]);

  useEffect(
    () => {
      getThread();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [threadKey],
  );

  return thread;
};

const useMessagesScroll = (thread) => {
  const messagesRef = useRef(null);

  const handleUpdate = useCallback(() => {
    // Thread does not exist
    if (!thread) {
      return;
    }

    // Ref is not used
    if (!messagesRef.current) {
      return;
    }

    const container = messagesRef.current;
    const scrollElement = container.getScrollElement();
    scrollElement.scrollTop = container.el.scrollHeight;
  }, [thread]);

  useEffect(
    () => {
      handleUpdate();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [thread],
  );

  return {
    messagesRef,
  };
};

export const ChatThread = (props) => {
  const { threadKey, ...other } = props;
  const dispatch = useDispatch();
  const user = useMockedUser();
  const thread = useThread(threadKey);
  const participants = useParticipants(threadKey);
  const { messagesRef } = useMessagesScroll(thread);

  const handleSend = useCallback(
    async (body) => {
      // If we have the thread, we use its ID to add a new message

      if (thread) {
        try {
          await dispatch(
            thunks.addMessage({
              threadId: thread.id,
              body,
            }),
          );
        } catch (err) {
          console.error(err);
        }

        return;
      }

      // Otherwise we use the recipients IDs. When using participant IDs, it means that we have to
      // get the thread.

      // Filter the current user to get only the other participants

      const recipientIds = participants
        .filter((participant) => participant.id !== user.id)
        .map((participant) => participant.id);

      // Add the new message

      let threadId;

      try {
        threadId = await dispatch(
          thunks.addMessage({
            recipientIds,
            body,
          }),
        );
      } catch (err) {
        console.error(err);
        return;
      }

      // Load the thread because we did not have it

      try {
        await dispatch(
          thunks.getThread({
            threadKey: threadId,
          }),
        );
      } catch (err) {
        console.error(err);
        return;
      }

      // Set the new thread as active

      dispatch(thunks.setCurrentThread({ threadId }));
    },
    [dispatch, participants, thread, user],
  );

  // Maybe implement a loading state

  return (
    <Stack
      sx={{
        flexGrow: 1,
        overflow: 'hidden',
      }}
      {...other}
    >
      <ChatThreadToolbar participants={participants} />
      <Divider />
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        <Scrollbar ref={messagesRef} sx={{ maxHeight: '100%' }}>
          <ChatMessages
            messages={thread?.messages || []}
            participants={thread?.participants || []}
          />
        </Scrollbar>
      </Box>
      <Divider />
      <ChatMessageAdd onSend={handleSend} />
    </Stack>
  );
};

ChatThread.propTypes = {
  threadKey: PropTypes.string.isRequired,
};
