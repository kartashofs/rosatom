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

const contacts = [
  {
    id: '5e887ac47eed253091be10cb',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    commonContacts: 10,
    name: 'Carson Darrin',
    status: 'Rejected',
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    avatar: '/assets/avatars/avatar-fran-perez.png',
    commonContacts: 8,
    name: 'Fran Perez',
    status: 'Pending',
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    avatar: '/assets/avatars/avatar-miron-vitold.png',
    commonContacts: 5,
    name: 'Miron Vitold',
    status: 'Not Connected',
  },
];

export const GridList6 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Stack spacing={3}>
      {contacts.map((contact) => (
        <Card key={contact.id}>
          <Stack alignItems="center" direction="row" sx={{ p: 2 }} spacing={2}>
            <Avatar
              src={contact.avatar}
              sx={{
                height: 60,
                width: 60,
              }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Link color="text.primary" variant="h5">
                {contact.name}
              </Link>
              <Typography color="text.secondary" gutterBottom variant="body2">
                {contact.commonContacts} connections in common
              </Typography>
              <Button size="small" variant="outlined">
                {contact.status}
              </Button>
            </Box>
            <IconButton>
              <SvgIcon>
                <DotsHorizontalIcon />
              </SvgIcon>
            </IconButton>
          </Stack>
        </Card>
      ))}
    </Stack>
  </Box>
);
