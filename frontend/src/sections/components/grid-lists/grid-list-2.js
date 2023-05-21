import { formatDistanceToNowStrict, subHours, subMinutes } from 'date-fns';
import numeral from 'numeral';
import HeartIcon from '@untitled-ui/icons-react/build/esm/Heart';
import Users01Icon from '@untitled-ui/icons-react/build/esm/Users01';
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Divider,
  IconButton,
  Link,
  Rating,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';

const now = new Date();

const projects = [
  {
    id: '5e8dcef8f95685ce21f16f3d',
    author: {
      id: '5e887b7602bdbc4dbb234b27',
      avatar: '/assets/avatars/avatar-jie-yan-song.png',
      name: 'Jie Yan Song',
    },
    budget: 6125.0,
    caption:
      "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.",
    currency: '$',
    isLiked: true,
    likes: 7,
    location: 'Europe',
    image: '/assets/covers/abstract-2-4x4-small.png',
    rating: 5,
    membersCount: 2,
    title: 'Mella Full Screen Slider',
    type: 'Full-Time',
    updatedAt: subMinutes(now, 24).getTime(),
  },
  {
    id: '5e8dcf076c50b9d8e756a5a2',
    author: {
      id: '5e887d0b3d090c1b8f162003',
      avatar: '/assets/avatars/avatar-omar-darboe.png',
      name: 'Omar Darobe',
    },
    budget: 4205.0,
    caption:
      "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.",
    currency: '$',
    isLiked: true,
    likes: 12,
    location: 'Europe',
    image: '/assets/covers/business-1-4x4-small.png',
    rating: 4.5,
    membersCount: 3,
    title: 'Overview Design',
    type: 'Full-Time',
    updatedAt: subHours(now, 1).getTime(),
  },
  {
    id: '5e8dcf105a6732b3ed82cf7a',
    author: {
      id: '5e88792be2d4cfb4bf0971d9',
      avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
      name: 'Siegbert Gottfried',
    },
    budget: 2394.0,
    caption:
      "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.",
    currency: '$',
    isLiked: true,
    likes: 18,
    location: 'Europe',
    image: '/assets/covers/minimal-2-4x4-small.png',
    rating: 4.7,
    membersCount: 8,
    title: 'Ten80 Web Design',
    type: 'Full-Time',
    updatedAt: subHours(now, 16).getTime(),
  },
];

export const GridList2 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Grid container spacing={3}>
      {projects.map((project) => {
        const updatedAgo = formatDistanceToNowStrict(project.updatedAt);
        const budget = numeral(project.budget).format(
          `${project.currency}0,0.00`,
        );

        return (
          <Grid key={project.id} xs={12} md={4}>
            <Card>
              <Box sx={{ p: 2 }}>
                <CardMedia
                  image={project.image}
                  sx={{
                    backgroundColor: 'neutral.50',
                    height: 200,
                  }}
                />
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    mt: 2,
                  }}
                >
                  <Avatar src={project.author.avatar} />
                  <Box sx={{ ml: 2 }}>
                    <Link color="text.primary" variant="h6">
                      {project.title}
                    </Link>
                    <Typography color="text.secondary" variant="body2">
                      by{' '}
                      <Link color="text.primary" variant="subtitle2">
                        {project.author.name}
                      </Link>{' '}
                      | Updated {updatedAgo} ago
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  pb: 2,
                  px: 3,
                }}
              >
                <Typography color="text.secondary" variant="body2">
                  {project.caption}
                </Typography>
              </Box>
              <Box
                sx={{
                  px: 3,
                  py: 2,
                }}
              >
                <Stack
                  alignItems="center"
                  direction="row"
                  justifyContent="space-between"
                  spacing={3}
                >
                  <div>
                    <Typography variant="subtitle2">{budget}</Typography>
                    <Typography color="text.secondary" variant="body2">
                      Budget
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2">
                      {project.location}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      Location
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2">{project.type}</Typography>
                    <Typography color="text.secondary" variant="body2">
                      Type
                    </Typography>
                  </div>
                </Stack>
              </Box>
              <Divider />
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  pl: 2,
                  pr: 3,
                  py: 2,
                }}
              >
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <Tooltip title="Unlike">
                    <IconButton>
                      <SvgIcon
                        sx={{
                          color: 'error.main',
                          '& path': {
                            fill: (theme) => theme.palette.error.main,
                            fillOpacity: 1,
                          },
                        }}
                      >
                        <HeartIcon />
                      </SvgIcon>
                    </IconButton>
                  </Tooltip>
                  <Typography color="text.secondary" variant="subtitle2">
                    {project.likes}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: 2,
                  }}
                >
                  <SvgIcon>
                    <Users01Icon />
                  </SvgIcon>
                  <Typography
                    color="text.secondary"
                    sx={{ ml: 1 }}
                    variant="subtitle2"
                  >
                    {project.membersCount}
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Rating readOnly size="small" value={project.rating} />
              </Box>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  </Box>
);
