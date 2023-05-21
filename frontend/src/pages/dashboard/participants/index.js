import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import { useCallback, useState } from 'react';
import { useContest } from '../../../hooks/use-contest';
import { usePageView } from '../../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../../layouts/dashboard';
import {
  OverviewCompletionPercentage,
  OverviewParticipantsCount,
  OverviewTopCompletionPercentage,
} from '../../../sections/dashboard/overview/overview-stats';
import { ParticipantsListSearch } from '../../../sections/dashboard/participants/participants-list-search';
import { ParticipantsListTable } from '../../../sections/dashboard/participants/participants-list-table';

const useSearch = () => {
  const [search, setSearch] = useState({
    filters: {
      query: undefined,
      hasAcceptedMarketing: undefined,
      isProspect: undefined,
      isReturning: undefined,
    },
    page: 0,
    rowsPerPage: 5,
    sortBy: 'updatedAt',
    sortDir: 'desc',
  });

  return {
    search,
    updateSearch: setSearch,
  };
};

const Page = () => {
  const contest = useContest();
  const { search, updateSearch } = useSearch();
  const teams = contest.data['commands-info'].slice(
    search.page * search.rowsPerPage,
    (search.page + 1) * search.rowsPerPage,
  );
  const teamsCount = contest.data['commands-info'].length;
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);

  usePageView();

  const handleFiltersChange = useCallback(
    (filters) => {
      updateSearch((prevState) => ({
        ...prevState,
        filters,
      }));
    },
    [updateSearch],
  );

  const handleSortChange = useCallback(
    (sort) => {
      updateSearch((prevState) => ({
        ...prevState,
        sortBy: sort.sortBy,
        sortDir: sort.sortDir,
      }));
    },
    [updateSearch],
  );

  const handlePageChange = useCallback(
    (event, page) => {
      updateSearch((prevState) => ({
        ...prevState,
        page,
      }));
    },
    [updateSearch],
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      updateSearch((prevState) => ({
        ...prevState,
        rowsPerPage: parseInt(event.target.value, 10),
      }));
    },
    [updateSearch],
  );

  const handleTeamSelect = useCallback(
    (team) => {
      setSelectedTeam(team);
    },
    [setSelectedTeam],
  );

  return (
    <>
      <Head>
        <title>Участники | AtomAnalytics</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={4}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Typography variant="h4">Участники AtomSkills 2021</Typography>
            </Stack>
            <Card>
              <ParticipantsListSearch
                onFiltersChange={handleFiltersChange}
                onSortChange={handleSortChange}
                sortBy={search.sortBy}
                sortDir={search.sortDir}
              />
              <ParticipantsListTable
                customers={teams}
                customersCount={teamsCount}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                rowsPerPage={search.rowsPerPage}
                page={search.page}
                selectedTeam={selectedTeam}
                onTeamSelect={handleTeamSelect}
              />
            </Card>
            {/* <Typography variant="h4">
              Команда{' '}
              <Box display="inline" color="primary.main">
                {selectedTeam['Название команды']}
              </Box>
            </Typography> */}
            {/* <Grid container spacing={4}>
              <Grid xs={12} md={3.5}>
                <OverviewParticipantsCount
                  onClick={() => alert('x')}
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
            </Grid> */}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
