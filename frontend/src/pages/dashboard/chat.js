import { useCallback, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import Menu01Icon from '@untitled-ui/icons-react/build/esm/Menu01';
import {
  Box,
  Divider,
  IconButton,
  SvgIcon,
  useMediaQuery,
} from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../layouts/dashboard';
import { ChatBlank } from '../../sections/dashboard/chat/chat-blank';
import { ChatComposer } from '../../sections/dashboard/chat/chat-composer';
import { ChatContainer } from '../../sections/dashboard/chat/chat-container';
import { ChatSidebar } from '../../sections/dashboard/chat/chat-sidebar';
import { ChatThread } from '../../sections/dashboard/chat/chat-thread';
import { useDispatch } from '../../store';
import { thunks } from '../../thunks/chat';

/**
 * NOTE:
 * In our case there two possible routes
 * one that contains /chat and one with a chat?threadKey={{threadKey}}
 * if threadKey does not exist, it means that the chat is in compose mode
 */

const useParams = () => {
  const searchParams = useSearchParams();
  const compose = searchParams.get('compose') === 'true';
  const threadKey = searchParams.get('threadKey') || undefined;

  return {
    compose,
    threadKey,
  };
};

const useThreads = () => {
  const dispatch = useDispatch();

  const getThreads = useCallback(() => {
    dispatch(thunks.getThreads());
  }, [dispatch]);

  useEffect(
    () => {
      getThreads();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
};

const useSidebar = () => {
  const searchParams = useSearchParams();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [isOpen, setIsOpen] = useState(mdUp);

  const handleScreenResize = useCallback(() => {
    if (!mdUp) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [mdUp]);

  useEffect(
    () => {
      handleScreenResize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mdUp],
  );

  const handeParamsUpdate = useCallback(() => {
    if (!mdUp) {
      setIsOpen(false);
    }
  }, [mdUp]);

  useEffect(
    () => {
      handeParamsUpdate();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams],
  );

  const handleToggle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    handleToggle,
    handleClose,
  };
};

const Page = () => {
  const rootRef = useRef(null);
  const { compose, threadKey } = useParams();
  const sidebar = useSidebar();

  usePageView();

  useThreads();

  const view = threadKey ? 'thread' : compose ? 'compose' : 'blank';

  return (
    <>
      <Head>
        <title>Dashboard: Chat | AtomAnalytics</title>
      </Head>
      <Divider />
      <Box
        component="main"
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          ref={rootRef}
          sx={{
            bottom: 0,
            display: 'flex',
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        >
          <ChatSidebar
            container={rootRef.current}
            onClose={sidebar.handleClose}
            open={sidebar.isOpen}
          />
          <ChatContainer open={sidebar.isOpen}>
            <Box sx={{ p: 2 }}>
              <IconButton onClick={sidebar.handleToggle}>
                <SvgIcon>
                  <Menu01Icon />
                </SvgIcon>
              </IconButton>
            </Box>
            <Divider />
            {view === 'thread' && <ChatThread threadKey={threadKey} />}
            {view === 'compose' && <ChatComposer />}
            {view === 'blank' && <ChatBlank />}
          </ChatContainer>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
