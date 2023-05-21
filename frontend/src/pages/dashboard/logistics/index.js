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
import { usePageView } from '../../../hooks/use-page-view';
import { useSettings } from '../../../hooks/use-settings';
import { Layout as DashboardLayout } from '../../../layouts/dashboard';
import { LogisticsDeviatedVehicles } from '../../../sections/dashboard/logistics/logistics-deviated-vehicles';
import { LogisticsErrorVehicles } from '../../../sections/dashboard/logistics/logistics-error-vehicles';
import { LogisticsLateVehicles } from '../../../sections/dashboard/logistics/logistics-late-vehicles';
import { LogisticsRouteVehicles } from '../../../sections/dashboard/logistics/logistics-route-vehicles';
import { LogisticsVehiclesCondition } from '../../../sections/dashboard/logistics/logistics-vehicles-condition';
import { LogisticsVehiclesList } from '../../../sections/dashboard/logistics/logistics-vehicles-list';
import { LogisticsVehiclesOverview } from '../../../sections/dashboard/logistics/logistics-vehicles-overview';

const Page = () => {
  const settings = useSettings();

  usePageView();

  return (
    <>
      <Head>
        <title>Dashboard: Logistics Dashboard | AtomAnalytics</title>
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
                <div>
                  <Typography variant="h4">Logistics</Typography>
                </div>
                <div>
                  <Stack direction="row" spacing={4}>
                    <Button
                      startIcon={
                        <SvgIcon>
                          <PlusIcon />
                        </SvgIcon>
                      }
                      variant="contained"
                    >
                      Add Vehicle
                    </Button>
                  </Stack>
                </div>
              </Stack>
            </Grid>
            <Grid xs={12} md={3}>
              <LogisticsRouteVehicles amount={38} />
            </Grid>
            <Grid xs={12} md={3}>
              <LogisticsErrorVehicles amount={2} />
            </Grid>
            <Grid xs={12} md={3}>
              <LogisticsDeviatedVehicles amount={1} />
            </Grid>
            <Grid xs={12} md={3}>
              <LogisticsLateVehicles amount={2} />
            </Grid>
            <Grid xs={12} lg={6}>
              <LogisticsVehiclesOverview
                chartSeries={[38, 50, 12]}
                labels={['Available', 'Out of service', 'On route']}
              />
            </Grid>
            <Grid xs={12} lg={6}>
              <LogisticsVehiclesCondition bad={12} excellent={181} good={24} />
            </Grid>
            <Grid xs={12}>
              <LogisticsVehiclesList
                vehicles={[
                  {
                    id: 'VOL-653CD1',
                    endingRoute: 'Cleveland, Ohio, USA',
                    startingRoute: 'Cleveland, Ohio, USA',
                    status: 'success',
                    temperature: 8,
                    temperatureLabel: 'Very Good',
                  },
                  {
                    id: 'VOL-653CD2',
                    endingRoute: 'Cleveland, Ohio, USA',
                    startingRoute: 'Cleveland, Ohio, USA',
                    status: 'warning',
                    temperature: 8,
                    temperatureLabel: 'Very Good',
                    warning: 'Temperature not optimal',
                  },
                  {
                    id: 'VOL-653CD3',
                    endingRoute: 'Cleveland, Ohio, USA',
                    startingRoute: 'Cleveland, Ohio, USA',
                    status: 'error',
                    temperature: 8,
                    temperatureLabel: 'Very Good',
                    warning: 'ECU not responding',
                  },
                  {
                    id: 'VOL-653CD4',
                    endingRoute: 'Cleveland, Ohio, USA',
                    startingRoute: 'Cleveland, Ohio, USA',
                    status: 'success',
                    temperature: 8,
                    temperatureLabel: 'Very Good',
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
