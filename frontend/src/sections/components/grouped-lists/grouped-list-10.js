import { formatDistanceToNowStrict, subHours, subMinutes } from 'date-fns';
import Download01Icon from '@untitled-ui/icons-react/build/esm/Download01';
import {
  Avatar,
  Box,
  Card,
  Link,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';

const now = new Date();

const activities = [
  {
    id: '5e8dd0828d628e6f40abdfe8',
    createdAt: subMinutes(now, 23).getTime(),
    description: 'has uploaded a new file',
    subject: 'Project author',
    type: 'upload_file',
  },
  {
    id: '5e8dd0893a6725f2bb603617',
    createdAt: subHours(now, 2).getTime(),
    description: 'joined team as a Front-End Developer',
    subject: 'Adrian Stefan',
    type: 'join_team',
  },
  {
    id: '5e8dd08f44603e3300b75cf1',
    createdAt: subHours(now, 9).getTime(),
    description: 'joined team as a Full Stack Developer',
    subject: 'Alexandru Robert',
    type: 'join_team',
  },
];

export const GroupedList10 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Stack spacing={3}>
      {activities.map((activity) => {
        const ago = formatDistanceToNowStrict(activity.createdAt);

        return (
          <Card
            key={activity.id}
            sx={{
              alignItems: 'center',
              display: 'flex',
              p: 2,
            }}
          >
            <Avatar
              sx={{
                backgroundColor: 'primary.main',
                color: 'common.white',
              }}
            >
              <SvgIcon>
                <Download01Icon />
              </SvgIcon>
            </Avatar>
            <Typography sx={{ ml: 2 }} variant="body2">
              <Link color="text.primary" variant="subtitle2">
                {activity.subject}
              </Link>{' '}
              {activity.description}
            </Typography>
            <Typography sx={{ ml: 'auto' }} variant="caption">
              {ago} ago
            </Typography>
          </Card>
        );
      })}
    </Stack>
  </Box>
);
