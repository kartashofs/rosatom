import Head from 'next/head';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { useSettings } from '../../hooks/use-settings';
import { Layout as DashboardLayout } from '../../layouts/dashboard';
import { AnalyticsStats } from '../../sections/dashboard/analytics/analytics-stats';
import { AnalyticsMostVisited } from '../../sections/dashboard/analytics/analytics-most-visited';
import { AnalyticsSocialSources } from '../../sections/dashboard/analytics/analytics-social-sources';
import { AnalyticsTrafficSources } from '../../sections/dashboard/analytics/analytics-traffic-sources';
import { AnalyticsVisitsByCountry } from '../../sections/dashboard/analytics/analytics-visits-by-country';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { useContest } from '../../hooks/use-contest';
import { ContestContext } from '../../contexts/contest-context';

const Page = () => {
  const contest = useContest(ContestContext);
  const settings = useSettings();

  const propsFor = (key) => {
    return {
      value: `${contest.data[key] > 0 ? '+' : ''}${contest.data[key]}%`,
      chartSeries: [{ data: [0, contest.data[key]] }],
    };
  };

  usePageView();

  if (!contest.data) {
    return;
  }

  return (
    <>
      <Head>
        <title>Dashboard: Analytics | AtomAnalytics</title>
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
            spacing={{
              xs: 3,
              lg: 4,
            }}
          >
            <Grid xs={12}>
              <Stack direction="row" justifyContent="space-between" spacing={4}>
                <Stack spacing={1}>
                  <Typography variant="h4">
                    Динамика {contest.data['contest-name']}
                  </Typography>
                </Stack>
                {/* <Stack alignItems="center" direction="row" spacing={2}>
                  <Button
                    startIcon={
                      <SvgIcon>
                        <PlusIcon />
                      </SvgIcon>
                    }
                    variant="contained"
                  >
                    New Dashboard
                  </Button>
                </Stack> */}
              </Stack>
            </Grid>
            <Grid xs={12} md={4}>
              <AnalyticsStats
                title="Всего участников"
                {...propsFor('competitors-increase')}
              />
            </Grid>
            <Grid xs={12} md={4}>
              <AnalyticsStats
                title="Средний процент решения заданий"
                {...propsFor('perfomance-increase')}
              />
            </Grid>
            <Grid xs={12} md={4}>
              <AnalyticsStats
                title="Компетенции"
                {...propsFor('competences-increase')}
              />
            </Grid>
            <Grid xs={12} md={4}>
              <AnalyticsStats
                title="Средний процент прироста результата старых участников"
                {...propsFor('oldies-increase')}
              />
            </Grid>
            <Grid xs={12} md={4}>
              <AnalyticsStats
                title="Порог вхождения в соревнование"
                {...propsFor('diving-increase')}
              />
            </Grid>
            <Grid xs={12} md={4}>
              <AnalyticsStats
                title="Средний опыт участников"
                {...propsFor('comp-exp-increase')}
              />
            </Grid>
            <Grid xs={12} lg={8}>
              <AnalyticsTrafficSources />
            </Grid>
            {/* <Grid xs={12} lg={4}>
              <AnalyticsVisitsByCountry
                visits={[
                  {
                    id: 'us',
                    name: 'United States',
                    seoPercentage: 40,
                    value: 31200,
                  },
                  {
                    id: 'uk',
                    name: 'United Kingdom',
                    seoPercentage: 47,
                    value: 12700,
                  },
                  {
                    id: 'ru',
                    name: 'Russia',
                    seoPercentage: 65,
                    value: 10360,
                  },
                  {
                    id: 'ca',
                    name: 'Canada',
                    seoPercentage: 23,
                    value: 5749,
                  },
                  {
                    id: 'de',
                    name: 'Germany',
                    seoPercentage: 45,
                    value: 2932,
                  },
                  {
                    id: 'es',
                    name: 'Spain',
                    seoPercentage: 56,
                    value: 200,
                  },
                ]}
              />
            </Grid>
            <Grid xs={12} lg={8}>
              <AnalyticsMostVisited
                pages={[
                  {
                    bounceRate: 16,
                    uniqueVisits: 8584,
                    url: '/',
                    visitors: 95847,
                  },
                  {
                    bounceRate: 5,
                    uniqueVisits: 648,
                    url: '/auth/login',
                    visitors: 7500,
                  },
                  {
                    bounceRate: 2,
                    uniqueVisits: 568,
                    url: '/dashboard',
                    visitors: 85406,
                  },
                  {
                    bounceRate: 12,
                    uniqueVisits: 12322,
                    url: '/blog/top-5-react-frameworks',
                    visitors: 75050,
                  },
                  {
                    bounceRate: 10,
                    uniqueVisits: 11645,
                    url: '/blog/understand-programming-principles',
                    visitors: 68003,
                  },
                  {
                    bounceRate: 8,
                    uniqueVisits: 10259,
                    url: '/blog/design-patterns',
                    visitors: 49510,
                  },
                ]}
              />
            </Grid>
            <Grid xs={12} lg={4}>
              <AnalyticsSocialSources
                chartSeries={[10, 10, 20]}
                labels={['Linkedin', 'Facebook', 'Instagram']}
              />
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
