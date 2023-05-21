import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import { paths } from '../../../paths';
import { useDispatch, useSelector } from '../../../store';
import { thunks } from '../../../thunks/mail';
import { MailThreadAttachments } from './mail-thread-attachments';
import { MailThreadMessage } from './mail-thread-message';
import { MailThreadReply } from './mail-thread-reply';
import { MailThreadToolbar } from './mail-thread-toolbar';

const useEmail = (emailId) => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.mail.emails.byId[emailId]);

  useEffect(
    () => {
      dispatch(
        thunks.getEmail({
          emailId,
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [emailId],
  );

  return email;
};

export const MailThread = (props) => {
  const { emailId, currentLabelId } = props;
  const email = useEmail(emailId);

  if (!email) {
    return null;
  }

  const backHref =
    currentLabelId && currentLabelId !== 'inbox'
      ? paths.dashboard.mail + `?label=${currentLabelId}`
      : paths.dashboard.mail;

  const hasMessage = !!email.message;
  const hasAttachments = email.attachments && email.attachments.length > 0;

  return (
    <Stack
      sx={{
        flexGrow: 1,
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <MailThreadToolbar
        backHref={backHref}
        createdAt={email.createdAt}
        from={email.from}
        to={email.to}
      />
      <Box
        sx={{
          flexGrow: 1,
          px: 3,
          py: 6,
        }}
      >
        <Typography variant="h3">{email.subject}</Typography>
        <Stack sx={{ mt: 2 }} spacing={6}>
          {hasMessage && <MailThreadMessage message={email.message} />}
          {hasAttachments && (
            <MailThreadAttachments attachments={email.attachments} />
          )}
        </Stack>
      </Box>
      <MailThreadReply />
    </Stack>
  );
};

MailThread.propTypes = {
  emailId: PropTypes.string.isRequired,
  currentLabelId: PropTypes.string,
};
