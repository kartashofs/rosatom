import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Link,
  Stack,
  SvgIcon,
  Tab,
  Tabs,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { jobsApi } from '../../../../api/jobs';
import { useMounted } from '../../../../hooks/use-mounted';
import { usePageView } from '../../../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../../../layouts/dashboard';
import { paths } from '../../../../paths';
import { CompanyActivity } from '../../../../sections/dashboard/jobs/company-activity';
import { CompanyAssets } from '../../../../sections/dashboard/jobs/company-assets';
import { CompanyOverview } from '../../../../sections/dashboard/jobs/company-overview';
import { CompanyReviews } from '../../../../sections/dashboard/jobs/company-reviews';
import { CompanySummary } from '../../../../sections/dashboard/jobs/company-summary';
import { CompanyTeam } from '../../../../sections/dashboard/jobs/company-team';
import { getInitials } from '../../../../utils/get-initials';

const tabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Reviews', value: 'reviews' },
  { label: 'Activity', value: 'activity' },
  { label: 'Team', value: 'team' },
  { label: 'Assets', value: 'assets' },
];

const useCompany = () => {
  const isMounted = useMounted();
  const [company, setCompany] = useState(null);

  const getCompany = useCallback(async () => {
    try {
      const response = await jobsApi.getCompany();

      if (isMounted()) {
        setCompany(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(
    () => {
      getCompany();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return company;
};

const Page = () => {
  const company = useCompany();
  const [currentTab, setCurrentTab] = useState('overview');

  usePageView();

  const handleTabsChange = useCallback((event, value) => {
    setCurrentTab(value);
  }, []);

  if (!company) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Dashboard: Company Details | AtomAnalytics</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid xs={12}>
              <div>
                <Link
                  color="text.primary"
                  component={NextLink}
                  href={paths.dashboard.jobs.index}
                  sx={{
                    alignItems: 'center',
                    display: 'inline-flex',
                  }}
                  underline="hover"
                >
                  <SvgIcon sx={{ mr: 1 }}>
                    <ArrowLeftIcon />
                  </SvgIcon>
                  <Typography variant="subtitle2">Jobs</Typography>
                </Link>
              </div>
            </Grid>
            <Grid xs={12} lg={8}>
              <Card>
                <CardHeader
                  disableTypography
                  title={
                    <Stack alignItems="flex-start" direction="row" spacing={2}>
                      <Avatar src={company.logo} variant="rounded">
                        {getInitials(company.name)}
                      </Avatar>
                      <Stack spacing={1}>
                        <Typography variant="h6">{company.name}</Typography>
                        <Typography variant="body2">
                          {company.shortDescription}
                        </Typography>
                      </Stack>
                    </Stack>
                  }
                />
                <Divider />
                <Tabs
                  indicatorColor="primary"
                  onChange={handleTabsChange}
                  scrollButtons="auto"
                  sx={{ px: 3 }}
                  textColor="primary"
                  value={currentTab}
                  variant="scrollable"
                >
                  {tabs.map((tab) => (
                    <Tab key={tab.value} label={tab.label} value={tab.value} />
                  ))}
                </Tabs>
                <Divider />
                <CardContent>
                  {currentTab === 'overview' && (
                    <CompanyOverview company={company} />
                  )}
                  {currentTab === 'reviews' && (
                    <CompanyReviews
                      reviews={company.reviews || []}
                      averageRating={company.averageRating}
                    />
                  )}
                  {currentTab === 'activity' && (
                    <CompanyActivity activities={company.activities || []} />
                  )}
                  {currentTab === 'team' && (
                    <CompanyTeam members={company.members || []} />
                  )}
                  {currentTab === 'assets' && (
                    <CompanyAssets assets={company.assets || []} />
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} lg={4}>
              <CompanySummary company={company} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
