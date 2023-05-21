import { addDays, addHours, differenceInDays, isAfter } from 'date-fns';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  SvgIcon,
  Tooltip,
} from '@mui/material';
import { Scrollbar } from '../../../components/scrollbar';

const now = new Date();

const tasks = [
  {
    id: '5eff24b501ba5281ddb5378c',
    deadline: addDays(addHours(now, 1), 1).getTime(),
    members: [
      {
        avatar: '/assets/avatars/avatar-marcus-finn.png',
        name: 'Marcus Finn',
      },
      {
        avatar: '/assets/avatars/avatar-carson-darrin.png',
        name: 'Carson Darrin',
      },
    ],
    title: 'Update the API for the project',
  },
  {
    id: '5eff24bb5bb3bd1beeddde78',
    deadline: addDays(addHours(now, 1), 2).getTime(),
    members: [
      {
        avatar: '/assets/avatars/avatar-penjani-inyene.png',
        name: 'Penjani Inyene',
      },
      {
        avatar: '/assets/avatars/avatar-anika-visser.png',
        name: 'Анастасия Виссер',
      },
      {
        avatar: '/assets/avatars/avatar-nasimiyu-danai.png',
        name: 'Nasimiyu Danai',
      },
    ],
    title: 'Redesign the landing page',
  },
  {
    id: '5eff24c019175119993fc1ff',
    deadline: now.getTime(),
    members: [
      {
        avatar: '/assets/avatars/avatar-miron-vitold.png',
        name: 'Miron Vitold',
      },
    ],
    title: 'Solve the bug for the showState',
  },
  {
    id: '5eff24c52ce9fdadffa11959',
    deadline: null,
    members: [
      {
        avatar: '/assets/avatars/avatar-marcus-finn.png',
        name: 'Marcus Finn',
      },
      {
        avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
        name: 'Siegbert Gottfried',
      },
    ],
    title: 'Release v1.0 Beta',
  },
  {
    id: '5eff24ca3ffab939b667258b',
    deadline: null,
    members: [
      {
        avatar: '/assets/avatars/avatar-jie-yan-song.png',
        name: 'Jie Yan Song',
      },
      {
        avatar: '/assets/avatars/avatar-marcus-finn.png',
        name: 'Marcus Finn',
      },
      {
        avatar: '/assets/avatars/avatar-anika-visser.png',
        name: 'Анастасия Виссер',
      },
    ],
    title: 'GDPR Compliance',
  },
  {
    id: '5eff24cf8740fc9faca4e463',
    deadline: null,
    members: [
      {
        avatar: '/assets/avatars/avatar-penjani-inyene.png',
        name: 'Penjani Inyene',
      },
    ],
    title: 'Redesign Landing Page',
  },
];

const getDeadline = (task) => {
  let deadline = '';

  if (task.deadline) {
    const deadlineDate = task.deadline;

    if (isAfter(deadlineDate, now) && differenceInDays(deadlineDate, now) < 3) {
      deadline = `${differenceInDays(deadlineDate, now)} days remaining`;
    }
  }

  return deadline;
};

export const GroupedList3 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Card>
      <CardHeader
        action={
          <IconButton>
            <SvgIcon>
              <DotsHorizontalIcon />
            </SvgIcon>
          </IconButton>
        }
        title="Team Tasks"
      />
      <Divider />
      <Scrollbar>
        <List sx={{ minWidth: 400 }}>
          {tasks.map((task, index) => {
            const showDivider = index < tasks.length - 1;
            const deadline = getDeadline(task);

            return (
              <ListItem divider={showDivider} key={task.id}>
                <ListItemText
                  primary={
                    <Link
                      color="text.primary"
                      noWrap
                      sx={{ cursor: 'pointer' }}
                      variant="subtitle2"
                    >
                      {task.title}
                    </Link>
                  }
                  secondary={deadline}
                />
                <AvatarGroup max={3}>
                  {task.members.map((member) => (
                    <Tooltip key={member.name} title="View">
                      <Avatar src={member.avatar} />
                    </Tooltip>
                  ))}
                </AvatarGroup>
              </ListItem>
            );
          })}
        </List>
      </Scrollbar>
    </Card>
  </Box>
);
