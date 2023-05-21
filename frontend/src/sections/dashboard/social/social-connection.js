import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  Link,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';

export const SocialConnection = (props) => {
  const { connection } = props;
  const [status, setStatus] = useState(connection.status);

  const handleConnectionAdd = useCallback(() => {
    setStatus('pending');
    toast.success('Request sent');
  }, []);

  const handleConnectionRemove = useCallback(() => {
    setStatus('not_connected');
  }, []);

  const showConnect = status === 'not_connected';
  const showPending = status === 'pending';

  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <Stack
        alignItems="flex-start"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack alignItems="flex-start" direction="row" spacing={2}>
          <Avatar
            component="a"
            href="#"
            src={connection.avatar}
            sx={{
              height: 56,
              width: 56,
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Link color="text.primary" href="#" variant="subtitle2">
              {connection.name}
            </Link>
            <Typography color="text.secondary" gutterBottom variant="body2">
              {connection.commonConnections} connections in common
            </Typography>
            {showConnect && (
              <Button
                onClick={handleConnectionAdd}
                size="small"
                variant="outlined"
              >
                Connect
              </Button>
            )}
            {showPending && (
              <Button
                onClick={handleConnectionRemove}
                size="small"
                color="inherit"
              >
                Pending
              </Button>
            )}
          </Box>
        </Stack>
        <IconButton>
          <SvgIcon>
            <DotsHorizontalIcon />
          </SvgIcon>
        </IconButton>
      </Stack>
    </Card>
  );
};

SocialConnection.propTypes = {
  // @ts-ignore
  connection: PropTypes.object,
};
