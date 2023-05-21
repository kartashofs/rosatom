import {
  formatDistanceToNowStrict,
  subDays,
  subHours,
  subMinutes,
} from 'date-fns';
import {
  Avatar,
  Box,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { Presence } from '../../../components/presence';

const now = new Date();

const contacts = [
  {
    id: '5e8891ab188cd2855e6029b7',
    avatar: '/assets/avatars/avatar-alcides-antonio.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Alcides Antonio',
  },
  {
    id: '5e887a62195cc5aef7e8ca5d',
    avatar: '/assets/avatars/avatar-marcus-finn.png',
    isActive: false,
    lastActivity: subHours(now, 2).getTime(),
    name: 'Marcus Finn',
  },
  {
    id: '5e887ac47eed253091be10cb',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    isActive: false,
    lastActivity: subMinutes(now, 15).getTime(),
    name: 'Carson Darrin',
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    avatar: '/assets/avatars/avatar-fran-perez.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Fran Perez',
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    avatar: '/assets/avatars/avatar-jie-yan-song.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Jie Yan Song',
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    avatar: '/assets/avatars/avatar-miron-vitold.png',
    isActive: false,
    lastActivity: subDays(now, 2).getTime(),
    name: 'Miron Vitold',
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    avatar: '/assets/avatars/avatar-penjani-inyene.png',
    isActive: false,
    lastActivity: subHours(now, 6).getTime(),
    name: 'Penjani Inyene',
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    avatar: '/assets/avatars/avatar-omar-darboe.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Omar Darobe',
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Siegbert Gottfried',
  },
  {
    id: '5e8877da9a65442b11551975',
    avatar: '/assets/avatars/avatar-iulia-albu.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Iulia Albu',
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    avatar: '/assets/avatars/avatar-nasimiyu-danai.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Nasimiyu Danai',
  },
];

export const Modal4 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Paper
      elevation={12}
      sx={{
        maxWidth: 320,
        mx: 'auto',
        p: 2,
      }}
    >
      <Typography variant="h6">Contacts</Typography>
      <Box sx={{ mt: 2 }}>
        <List disablePadding>
          {contacts.map((contact) => {
            const showOnline = contact.isActive;
            const lastActivity =
              !contact.isActive && contact.lastActivity
                ? formatDistanceToNowStrict(contact.lastActivity)
                : undefined;

            return (
              <ListItem disableGutters key={contact.id}>
                <ListItemAvatar>
                  <Avatar src={contact.avatar} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Link
                      color="text.primary"
                      noWrap
                      underline="none"
                      variant="subtitle2"
                    >
                      {contact.name}
                    </Link>
                  }
                />
                {showOnline && <Presence size="small" status="online" />}
                {lastActivity && (
                  <Typography color="text.secondary" noWrap variant="caption">
                    {lastActivity} ago
                  </Typography>
                )}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Paper>
  </Box>
);
