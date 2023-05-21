import { formatDistanceStrict, subHours, subMinutes } from 'date-fns';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { customLocale } from '../../../utils/date-locale';

const now = new Date();

const messages = [
  {
    id: 'b91cbe81ee3efefba6b915a7',
    content: 'Hello, we spoke earlier on the phone',
    createdAt: subMinutes(now, 2).getTime(),
    senderAvatar: '/assets/avatars/avatar-alcides-antonio.png',
    senderName: 'Alcides Antonio',
    senderOnline: true,
  },
  {
    id: 'de0eb1ac517aae1aa57c0b7e',
    content: 'Is the job still available?',
    createdAt: subMinutes(now, 56).getTime(),
    senderAvatar: '/assets/avatars/avatar-marcus-finn.png',
    senderName: 'Marcus Finn',
    senderOnline: true,
  },
  {
    id: '38e2b0942c90d0ad724e6f40',
    content: 'What is a screening task? I’d like to',
    createdAt: subHours(subMinutes(now, 23), 3).getTime(),
    senderAvatar: '/assets/avatars/avatar-carson-darrin.png',
    senderName: 'Carson Darrin',
    senderOnline: false,
  },
  {
    id: '467505f3356f25a69f4c4890',
    content: 'Still waiting for feedback',
    createdAt: subHours(subMinutes(now, 6), 8).getTime(),
    senderAvatar: '/assets/avatars/avatar-fran-perez.png',
    senderName: 'Fran Perez',
    senderOnline: true,
  },
  {
    id: '7e6af808e801a8361ce4cf8b',
    content: 'Need more information about current campaigns',
    createdAt: subHours(subMinutes(now, 18), 10).getTime(),
    senderAvatar: '/assets/avatars/avatar-jie-yan-song.png',
    senderName: 'Jie Yan Song',
    senderOnline: false,
  },
];

export const GroupedList7 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      display: 'flex',
      justifyContent: 'center',
      p: 3,
    }}
  >
    <Card sx={{ maxWidth: 363 }}>
      <CardHeader title="Inbox" />
      <List disablePadding>
        {messages.map((message) => {
          const ago = formatDistanceStrict(message.createdAt, new Date(), {
            addSuffix: true,
            locale: customLocale,
          });

          return (
            <ListItem
              key={message.id}
              sx={{
                '&:hover': {
                  backgroundColor: 'action.hover',
                  cursor: 'pointer',
                },
              }}
            >
              <ListItemAvatar>
                {message.senderOnline ? (
                  <Badge
                    anchorOrigin={{
                      horizontal: 'right',
                      vertical: 'bottom',
                    }}
                    color="success"
                    variant="dot"
                  >
                    <Avatar src={message.senderAvatar} />
                  </Badge>
                ) : (
                  <Avatar src={message.senderAvatar} />
                )}
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                    variant="subtitle2"
                  >
                    {message.senderName}
                  </Typography>
                }
                secondary={
                  <Typography
                    color="text.secondary"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                    variant="body2"
                  >
                    {message.content}
                  </Typography>
                }
                sx={{ pr: 2 }}
              />
              <Typography
                color="text.secondary"
                sx={{ whiteSpace: 'nowrap' }}
                variant="caption"
              >
                {ago}
              </Typography>
            </ListItem>
          );
        })}
      </List>
      <CardActions>
        <Button color="inherit" size="small">
          Go to chat
        </Button>
      </CardActions>
    </Card>
  </Box>
);
