import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Link,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';

const applicants = [
  {
    id: '5e887a62195cc5aef7e8ca5d',
    avatar: '/assets/avatars/avatar-marcus-finn.png',
    commonContacts: 12,
    cover: '/assets/covers/minimal-1-4x4-small.png',
    name: 'Marcus Finn',
    skills: ['UX', 'Frontend development', 'HTML5', 'VueJS', 'ReactJS'],
  },
  {
    id: '5e86809283e28b96d2d38537',
    avatar: '/assets/avatars/avatar-anika-visser.png',
    commonContacts: 17,
    cover: '/assets/covers/abstract-1-4x4-small.png',
    name: 'Анастасия Виссер',
    skills: ['Backend development', 'Firebase', 'MongoDB', 'ExpressJS'],
  },
  {
    id: '5e887ac47eed253091be10cb',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    commonContacts: 5,
    cover: '/assets/covers/minimal-2-4x4-small.png',
    name: 'Carson Darrin',
    skills: ['UI', 'UX', 'Full-Stack development', 'Angular', 'ExpressJS'],
  },
];

export const GridList4 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Grid container spacing={3}>
      {applicants.map((applicant) => (
        <Grid key={applicant.id} md={4} xs={12}>
          <Card sx={{ height: '100%' }}>
            <CardMedia image={applicant.cover} sx={{ height: 200 }} />
            <CardContent sx={{ pt: 0 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                  mt: '-50px',
                }}
              >
                <Avatar
                  alt="Applicant"
                  src={applicant.avatar}
                  sx={{
                    border: '3px solid #FFFFFF',
                    height: 100,
                    width: 100,
                  }}
                />
              </Box>
              <Link
                align="center"
                color="text.primary"
                sx={{ display: 'block' }}
                underline="none"
                variant="h6"
              >
                {applicant.name}
              </Link>
              <Typography align="center" variant="body2" color="text.secondary">
                {applicant.commonContacts} contacts in common
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Stack
                alignItems="center"
                direction="row"
                flexWrap="wrap"
                gap={0.5}
              >
                {applicant.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{ m: 0.5 }}
                    variant="outlined"
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);
