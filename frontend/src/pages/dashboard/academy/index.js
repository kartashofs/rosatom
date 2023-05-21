import Head from 'next/head';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { usePageView } from '../../../hooks/use-page-view';
import { useSettings } from '../../../hooks/use-settings';
import { Layout as DashboardLayout } from '../../../layouts/dashboard';
import { AcademyDailyProgress } from '../../../sections/dashboard/academy/academy-daily-progress';
import { AcademyFind } from '../../../sections/dashboard/academy/academy-find';
import { CourseCard } from '../../../sections/dashboard/academy/course-card';
import { CourseSearch } from '../../../sections/dashboard/academy/course-search';

const useCourses = () => {
  return [
    {
      id: 'c3a2b7331eef8329e2a87c79',
      description: 'Introductory course for design and framework basics',
      duration: '78 hours',
      media: '/assets/courses/course-1.png',
      progress: 23,
      title: 'React and Redux Tutorial',
    },
    {
      id: '3f02f696f869ecd1c68e95a3',
      description: 'Introductory course for design and framework basics',
      duration: '14 hours',
      media: '/assets/courses/course-2.png',
      progress: 52,
      title: 'React and Express Tutorial',
    },
    {
      id: 'f6e76a6474038384cd9e032b',
      description: 'Introductory course for design and framework basics',
      duration: '21 hours',
      media: '/assets/courses/course-3.png',
      progress: 90,
      title: 'React Crash Course: Beginner',
    },
  ];
};

const Page = () => {
  const settings = useSettings();
  const courses = useCourses();

  usePageView();

  return (
    <>
      <Head>
        <title>Dashboard: Academy Dashboard | AtomAnalytics</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            backgroundColor: 'primary.darkest',
            color: 'primary.contrastText',
            py: '120px',
          }}
        >
          <Container maxWidth="xl">
            <Typography color="inherit" variant="h5">
              Find unparalleled knowledge
            </Typography>
            <Typography color="inherit" sx={{ mt: 1, mb: 6 }}>
              Learn from the top-tier creatives and leading experts in AI
            </Typography>
            <CourseSearch />
          </Container>
        </Box>
        <Box sx={{ py: '64px' }}>
          <Container maxWidth={settings.stretch ? false : 'xl'}>
            <Grid
              container
              spacing={{
                xs: 3,
                lg: 4,
              }}
            >
              <Grid xs={12}>
                <Typography variant="h6">Welcome back, Anika</Typography>
                <Typography
                  color="text.secondary"
                  sx={{ mt: 1 }}
                  variant="body2"
                >
                  Nice progress so far, keep it up!
                </Typography>
              </Grid>
              <Grid xs={12} md={9}>
                <AcademyDailyProgress timeCurrent={20} timeGoal={35} />
              </Grid>
              <Grid xs={12} md={3}>
                <AcademyFind />
              </Grid>
              <Grid xs={12}>
                <Stack
                  alignItems="flex-start"
                  direction="row"
                  justifyContent="space-between"
                  spacing={3}
                >
                  <Typography variant="h6">My Courses</Typography>
                  <Button
                    color="inherit"
                    endIcon={
                      <SvgIcon>
                        <ArrowRightIcon />
                      </SvgIcon>
                    }
                  >
                    See all
                  </Button>
                </Stack>
              </Grid>
              {courses.map((course) => (
                <Grid key={course.id} xs={12} md={4}>
                  <CourseCard course={course} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
