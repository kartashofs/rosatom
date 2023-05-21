import { useCallback, useRef, useState } from 'react';
import Attachment01Icon from '@untitled-ui/icons-react/build/esm/Attachment01';
import FaceSmileIcon from '@untitled-ui/icons-react/build/esm/FaceSmile';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import Link01Icon from '@untitled-ui/icons-react/build/esm/Link01';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  SvgIcon,
  TextField,
  Tooltip,
} from '@mui/material';
import { useMockedUser } from '../../../hooks/use-mocked-user';

export const MailThreadReply = (props) => {
  const user = useMockedUser();
  const fileRef = useRef(null);
  const [message, setMessage] = useState('');

  const handleMessageChange = useCallback((event) => {
    setMessage(event.target.value);
  }, []);

  const handleFileAttach = useCallback(() => {
    fileRef.current?.click();
  }, []);

  return (
    <>
      <Box sx={{ p: 3 }} {...props}>
        <Stack alignItems="flex-start" direction="row" spacing={2}>
          <Avatar src={user.avatar} />
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              fullWidth
              maxRows={7}
              minRows={3}
              multiline
              onChange={handleMessageChange}
              placeholder="Leave a message"
              value={message}
              variant="outlined"
            />
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              spacing={3}
              sx={{ mt: 2 }}
            >
              <Stack alignItems="center" direction="row" spacing={1}>
                <Tooltip title="Attach image">
                  <IconButton onClick={handleFileAttach} size="small">
                    <SvgIcon>
                      <Image01Icon />
                    </SvgIcon>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Attach file">
                  <IconButton onClick={handleFileAttach} size="small">
                    <SvgIcon>
                      <Attachment01Icon />
                    </SvgIcon>
                  </IconButton>
                </Tooltip>
                <IconButton>
                  <SvgIcon>
                    <Link01Icon />
                  </SvgIcon>
                </IconButton>
                <IconButton>
                  <SvgIcon>
                    <FaceSmileIcon />
                  </SvgIcon>
                </IconButton>
              </Stack>
              <div>
                <Button variant="contained">Reply</Button>
              </div>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <input hidden ref={fileRef} type="file" />
    </>
  );
};
