import { formatDistanceToNowStrict, subHours } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Link,
  Rating,
  Stack,
  Typography,
} from '@mui/material';

const now = new Date();

const reviews = [
  {
    id: '5f0366cd843161f193ebadd4',
    author: {
      avatar: '/assets/avatars/avatar-marcus-finn.png',
      name: 'Marcus Finn',
    },
    comment: 'Great company, providing an awesome & easy to use product.',
    createdAt: subHours(now, 2).getTime(),
    value: 5,
  },
  {
    id: 'to33twsyjphcfj55y3t07261',
    author: {
      avatar: '/assets/avatars/avatar-miron-vitold.png',
      name: 'Miron Vitold',
    },
    comment:
      "Not the best people managers, poor management skills, poor career development programs. Communication from corporate & leadership isn't always clear and is sometime one-sided. Low pay compared to FANG.",
    createdAt: subHours(now, 2).getTime(),
    value: 2,
  },
  {
    id: '6z9dwxjzkqbmxuluxx2681jd',
    author: {
      avatar: '/assets/avatars/avatar-carson-darrin.png',
      name: 'Carson Darrin',
    },
    comment:
      'I have been working with this company full-time. Great for the work life balance. Cons, decentralized decision making process across the organization.',
    createdAt: subHours(now, 2).getTime(),
    value: 4,
  },
];

export const GroupedList9 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Stack spacing={3}>
      {reviews.map((review) => {
        const ago = formatDistanceToNowStrict(review.createdAt);

        return (
          <Card key={review.id}>
            <CardHeader
              avatar={<Avatar src={review.author.avatar} />}
              disableTypography
              subheader={
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    mt: 1,
                  }}
                >
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      mr: 1,
                    }}
                  >
                    <Rating readOnly value={5} />
                    <Typography sx={{ ml: 1 }} variant="subtitle2">
                      {review.value}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary" variant="body2">
                    | For{' '}
                    <Link color="text.primary" variant="subtitle2">
                      Low Budget
                    </Link>{' '}
                    | {ago} ago
                  </Typography>
                </Box>
              }
              title={
                <Link color="text.primary" variant="subtitle2">
                  {review.author.name}
                </Link>
              }
            />
            <Box
              sx={{
                pb: 2,
                px: 3,
              }}
            >
              <Typography color="text.secondary" variant="body1">
                {review.comment}
              </Typography>
            </Box>
          </Card>
        );
      })}
    </Stack>
  </Box>
);
