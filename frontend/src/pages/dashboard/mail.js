import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import { Box, Divider, useMediaQuery } from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../layouts/dashboard';
import { MailComposer } from '../../sections/dashboard/mail/mail-composer';
import { MailThread } from '../../sections/dashboard/mail/mail-thread';
import { MailContainer } from '../../sections/dashboard/mail/mail-container';
import { MailList } from '../../sections/dashboard/mail/mail-list';
import { MailSidebar } from '../../sections/dashboard/mail/mail-sidebar';
import { useDispatch, useSelector } from '../../store';
import { thunks } from '../../thunks/mail';

const useParams = () => {
  const searchParams = useSearchParams();
  const emailId = searchParams.get('emailId') || undefined;
  const label = searchParams.get('label') || undefined;

  return {
    emailId,
    label,
  };
};

const useLabels = () => {
  const dispatch = useDispatch();
  const labels = useSelector((state) => state.mail.labels);

  const getLabels = useCallback(() => {
    dispatch(thunks.getLabels());
  }, [dispatch]);

  useEffect(
    () => {
      getLabels();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return labels;
};

const useComposer = () => {
  const initialState = {
    isFullScreen: false,
    isOpen: false,
    message: '',
    subject: '',
    to: '',
  };

  const [state, setState] = useState(initialState);

  const handleOpen = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      isOpen: true,
    }));
  }, []);

  const handleClose = useCallback(
    () => {
      setState(initialState);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleMaximize = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      isFullScreen: true,
    }));
  }, []);

  const handleMinimize = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      isFullScreen: false,
    }));
  }, []);

  const handleMessageChange = useCallback((message) => {
    setState((prevState) => ({
      ...prevState,
      message,
    }));
  }, []);

  const handleSubjectChange = useCallback((subject) => {
    setState((prevState) => ({
      ...prevState,
      subject,
    }));
  }, []);

  const handleToChange = useCallback((to) => {
    setState((prevState) => ({
      ...prevState,
      to,
    }));
  }, []);

  return {
    ...state,
    handleClose,
    handleMaximize,
    handleMessageChange,
    handleMinimize,
    handleOpen,
    handleSubjectChange,
    handleToChange,
  };
};

const useSidebar = () => {
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
  const { emailId, label: currentLabelId } = useParams();
  const labels = useLabels();
  const composer = useComposer();
  const sidebar = useSidebar();

  usePageView();

  const view = emailId ? 'details' : 'list';

  return (
    <>
      <Head>
        <title>Dashboard: Mail | AtomAnalytics</title>
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
          <MailSidebar
            container={rootRef.current}
            currentLabelId={currentLabelId}
            labels={labels}
            onClose={sidebar.handleClose}
            onCompose={composer.handleOpen}
            open={sidebar.isOpen}
          />
          <MailContainer open={sidebar.isOpen}>
            {view === 'details' && (
              <MailThread currentLabelId={currentLabelId} emailId={emailId} />
            )}
            {view === 'list' && (
              <MailList
                currentLabelId={currentLabelId}
                onSidebarToggle={sidebar.handleToggle}
              />
            )}
          </MailContainer>
        </Box>
      </Box>
      <MailComposer
        maximize={composer.isFullScreen}
        message={composer.message}
        onClose={composer.handleClose}
        onMaximize={composer.handleMaximize}
        onMessageChange={composer.handleMessageChange}
        onMinimize={composer.handleMinimize}
        onSubjectChange={composer.handleSubjectChange}
        onToChange={composer.handleToChange}
        open={composer.isOpen}
        subject={composer.subject}
        to={composer.to}
      />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
