import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import FilterFunnel01Icon from '@untitled-ui/icons-react/build/esm/FilterFunnel01';
import Head from 'next/head';
import { useContest } from '../../hooks/use-contest';
import { usePageView } from '../../hooks/use-page-view';
import { useSettings } from '../../hooks/use-settings';
import { Layout as DashboardLayout } from '../../layouts/dashboard';
import { OverviewAge } from '../../sections/dashboard/overview/overview-age';
import { OverviewCompetitorClusters } from '../../sections/dashboard/overview/overview-competitor-clusters';
import { OverviewGender } from '../../sections/dashboard/overview/overview-gender';
import {
  OverviewCompletionPercentage,
  OverviewParticipantsCount,
  OverviewTopCompletionPercentage,
} from '../../sections/dashboard/overview/overview-stats';
import { OverviewTasksSolved } from '../../sections/dashboard/overview/overview-tasks-solved';

const Page = () => {
  const settings = useSettings();
  const contest = useContest();

  usePageView();

  console.log(contest);
  if (!contest.data) {
    return;
  }

  return (
    <>
      <Head>
        <title>Обзор | AtomAnalytics</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Grid
            container
            disableEqualOverflow
            spacing={{
              xs: 3,
              lg: 4,
            }}
          >
            <Grid xs={12}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={4}
              >
                <div>
                  <Typography variant="h4" mb={1}>
                    Обзор результатов {contest.data['contest-name']}
                  </Typography>
                  <Typography component="h5" variant="h6">
                    по всем направлениям
                  </Typography>
                </div>
                <div>
                  <Stack direction="row" spacing={4}>
                    <Button
                      startIcon={
                        <SvgIcon>
                          <FilterFunnel01Icon />
                        </SvgIcon>
                      }
                      variant="contained"
                    >
                      Выбрать направления
                    </Button>
                  </Stack>
                </div>
              </Stack>
            </Grid>
            <Grid xs={12} md={3.5}>
              <OverviewParticipantsCount
                sx={{ height: '100%' }}
                amount={contest.data['competitors-count']}
              />
            </Grid>
            <Grid xs={6} md={3.5}>
              <OverviewCompletionPercentage
                sx={{ height: '100%' }}
                amount={contest.data['mean-done-per'] + '%'}
              />
            </Grid>
            <Grid xs={6} md={3.5}>
              <OverviewTopCompletionPercentage
                sx={{ height: '100%' }}
                amount={contest.data['mean-top-per'] + '%'}
              />
            </Grid>
            {/* <Grid xs={12} md={7}>
              <OverviewBanner />
            </Grid>
            <Grid xs={12} md={5}>
              <OverviewTips
                sx={{ height: '100%' }}
                tips={[
                  {
                    title: 'New fresh design.',
                    content:
                      'Your favorite template has a new trendy look, more customization options, screens & more.',
                  },
                  {
                    title: 'Tip 2.',
                    content: 'Tip content',
                  },
                  {
                    title: 'Tip 3.',
                    content: 'Tip content',
                  },
                ]}
              />
            </Grid> */}
            <Grid xs={12} md={6}>
              <OverviewCompetitorClusters />
            </Grid>
            <Grid xs={12} md={6}>
              <OverviewTasksSolved sx={{ height: '100%' }} />
            </Grid>
            <Grid xs={12} md={8}>
              <OverviewAge />
            </Grid>
            <Grid xs={12} md={3}>
              <OverviewGender />
            </Grid>
            {/* <Grid xs={12} md={7}>
              <OverviewTransactions
                transactions={[
                  {
                    id: 'd46800328cd510a668253b45',
                    amount: 25000,
                    createdAt: now.getTime(),
                    currency: 'usd',
                    sender: 'Devias',
                    status: 'on_hold',
                    type: 'receive',
                  },
                  {
                    id: 'b4b19b21656e44b487441c50',
                    amount: 6843,
                    createdAt: subDays(now, 1).getTime(),
                    currency: 'usd',
                    sender: 'Zimbru',
                    status: 'confirmed',
                    type: 'send',
                  },
                  {
                    id: '56c09ad91f6d44cb313397db',
                    amount: 91823,
                    createdAt: subDays(now, 1).getTime(),
                    currency: 'usd',
                    sender: 'Vertical Jelly',
                    status: 'failed',
                    type: 'send',
                  },
                  {
                    id: 'aaeb96c5a131a55d9623f44d',
                    amount: 49550,
                    createdAt: subDays(now, 3).getTime(),
                    currency: 'usd',
                    sender: 'Devias',
                    status: 'confirmed',
                    type: 'receive',
                  },
                ]}
              />
            </Grid> */}
            {/* <Grid xs={12} md={5}>
              <OverviewEvents
                events={[
                  {
                    id: '3bfa0bc6cbc99bf747c94d51',
                    createdAt: addDays(now, 1),
                    description: '17:00 to 18:00',
                    title: 'Meeting with Partners',
                  },
                  {
                    id: 'dd6c8ce8655ac222b01f24f9',
                    createdAt: addDays(now, 4),
                    description: '17:00 to 18:00',
                    title: 'Weekly Meeting',
                  },
                  {
                    id: 'f274902e2bf226865b3cf947',
                    createdAt: addDays(now, 4),
                    description: '17:00 to 18:00',
                    title: 'Weekly Meeting',
                  },
                  {
                    id: 'd2a66e24110f52acb0cd0b9f',
                    createdAt: addDays(now, 7),
                    description: '17:00 to 18:00',
                    title: 'Weekly Meeting',
                  },
                ]}
              />
            </Grid>
            <Grid xs={6}>
              <OverviewJobs />
            </Grid>
            <Grid xs={6}>
              <OverviewHelp />
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
