import { format, subHours, subMinutes, subSeconds } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Chip,
  Link,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';

const now = new Date();

const posts = [
  {
    id: '24b76cac9a128cd949747080',
    author: {
      avatar: '/assets/avatars/avatar-jie-yan-song.png',
      name: 'Jie Yan Song',
    },
    category: 'Programming',
    cover: '/assets/covers/business-2-4x4-large.png',
    publishedAt: subMinutes(subSeconds(now, 16), 45).getTime(),
    readTime: '5 min',
    shortDescription:
      'Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh. Vivamus sit amet tristique dui. Praesent in bibendum arcu, at placerat augue. Nam varius fermentum diam, at tristique libero ultrices non. Praesent scelerisque diam vitae posuere dignissim. In et purus ac sapien posuere accumsan sit amet id diam. Pellentesque sit amet nulla ante. Maecenas nec leo vitae quam volutpat pretium id vitae augue.',
    title: 'Why I Still Lisp, and You Should Too',
  },
  {
    id: 'a9c19d0caf2ca91020aacd1f',
    author: {
      avatar: '/assets/avatars/avatar-omar-darboe.png',
      name: 'Omar Darobe',
    },
    category: 'Productivity',
    cover: '/assets/covers/minimal-1-4x4-small.png',
    publishedAt: subHours(subMinutes(subSeconds(now, 29), 51), 6).getTime(),
    readTime: '6 min',
    shortDescription:
      'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in turpis ac quam luctus interdum. Nullam ac lorem ligula. Integer sed massa bibendum, blandit ipsum et, iaculis augue. Curabitur nec enim eget dolor tincidunt posuere eget nec dolor. Ut ullamcorper dignissim arcu vel laoreet. Sed ligula dolor, vulputate quis eros ac, maximus pharetra orci. Aenean lobortis volutpat vehicula. Suspendisse vel nunc enim. Cras ultrices metus libero, non aliquam diam condimentum vel. Vestibulum arcu leo, consectetur id diam a, semper elementum odio. Proin eleifend volutpat sapien tempor bibendum. Etiam sagittis nulla sit amet aliquam sollicitudin.',
    title: 'Scrum Has Hit the Glass Ceiling',
  },
  {
    id: '44df90cbf89963b8aa625c7d',
    author: {
      avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
      name: 'Siegbert Gottfried',
    },
    category: 'Entrepreneurs',
    cover: '/assets/covers/business-2-4x4-small.png',
    publishedAt: subHours(subMinutes(subSeconds(now, 6), 46), 16).getTime(),
    readTime: '3 min',
    shortDescription:
      'Praesent eget leo mauris. Morbi ac vulputate nibh. In hac habitasse platea dictumst. Praesent fermentum lacus eleifend erat cursus, congue rhoncus mi porta. Mauris rhoncus mollis nisl, vitae tempus tortor. Proin sit amet feugiat felis. Donec nunc urna, pretium sed viverra vel, blandit at urna. Integer pharetra placerat mauris, at fringilla arcu dignissim a. Morbi nec fermentum purus. Integer vel justo interdum lectus euismod bibendum.',
    title: 'How Model View Controller (MVC) Architectures Work',
  },
];

export const GridList1 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Grid container spacing={3}>
      {posts.map((post) => (
        <Grid key={post.id} xs={12} md={4}>
          <Card
            sx={{
              height: '100%',
              p: 2,
            }}
          >
            <Box
              sx={{
                pt: 'calc(100% * 4 / 4)',
                position: 'relative',
              }}
            >
              <CardMedia
                image={post.cover}
                sx={{
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                }}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <div>
                <Chip label={post.category} variant="outlined" />
              </div>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  my: 2,
                }}
              >
                <Avatar src={post.author.avatar} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="subtitle2">
                    {post.author.name}
                  </Typography>
                  <Typography color="text.secondary" variant="caption">
                    {`${format(post.publishedAt, 'dd MMM')} · ${
                      post.readTime
                    } read`}
                  </Typography>
                </Box>
              </Box>
              <Link color="text.primary" variant="h6">
                {post.title}
              </Link>
              <Typography
                color="text.secondary"
                sx={{
                  height: 72,
                  mt: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                }}
                variant="body1"
              >
                {post.shortDescription}
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);
