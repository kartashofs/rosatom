import Head from 'next/head';
import { subDays, subHours, subMinutes } from 'date-fns';
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
import { useTheme } from '@mui/material/styles';
import { usePageView } from '../../hooks/use-page-view';
import { useSettings } from '../../hooks/use-settings';
import { Layout as DashboardLayout } from '../../layouts/dashboard';
import { CryptoCards } from '../../sections/dashboard/crypto/crypto-cards';
import { CryptoOperation } from '../../sections/dashboard/crypto/crypto-operation';
import { CryptoWallet } from '../../sections/dashboard/crypto/crypto-wallet';
import { CryptoTransactions } from '../../sections/dashboard/crypto/crypto-transactions';
import { CryptoUpgrade } from '../../sections/dashboard/crypto/crypto-upgrade';
import { CryptoCurrentBalance } from '../../sections/dashboard/crypto/crypto-current-balance';

const now = new Date();

const Page = () => {
  const settings = useSettings();
  const theme = useTheme();

  usePageView();

  return (
    <>
      <Head>
        <title>Dashboard: Crypto | AtomAnalytics</title>
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
              <Stack direction="row" justifyContent="space-between" spacing={4}>
                <div>
                  <Typography variant="h4">Crypto</Typography>
                </div>
                <Stack alignItems="center" direction="row" spacing={2}>
                  <Button
                    startIcon={
                      <SvgIcon>
                        <PlusIcon />
                      </SvgIcon>
                    }
                    variant="contained"
                  >
                    Add Wallet
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid xs={12} md={7}>
              <Stack direction="row" spacing={3}>
                <CryptoWallet
                  chartColor={theme.palette.primary.main}
                  chartSeries={[
                    {
                      name: 'BTC',
                      data: [
                        56, 61, 64, 60, 63, 61, 60, 68, 66, 64, 77, 60, 65, 51,
                        72, 80, 74, 67, 77, 83, 94, 95, 89, 100, 94, 104, 101,
                        105, 104, 103, 107, 120,
                      ],
                    },
                  ]}
                  coinAmount={0.7568}
                  currency="BTC"
                  rate={0.56}
                  sx={{ flexBasis: '50%' }}
                  usdValue={16213.2}
                />
                <CryptoWallet
                  chartColor={theme.palette.info.main}
                  chartSeries={[
                    {
                      name: 'ETH',
                      data: [
                        65, 64, 32, 45, 54, 76, 82, 80, 85, 78, 82, 95, 93, 80,
                        112, 102, 105, 95, 98, 102, 104, 99, 101, 100, 109, 106,
                        111, 105, 108, 112, 108, 111,
                      ],
                    },
                  ]}
                  coinAmount={2.0435}
                  currency="ETH"
                  rate={-0.32}
                  sx={{ flexBasis: '50%' }}
                  usdValue={9626.8}
                />
              </Stack>
            </Grid>
            <Grid xs={12} md={5}>
              <CryptoCards
                cards={[
                  {
                    id: '79f8212e4245e4c11952f2cf',
                    brand: 'Mastercard',
                    cardNumber: '5823 4492 2385 1102',
                    expiryDate: '05/28',
                    holderName: 'John Carter',
                  },
                  {
                    id: '99f231b1c079b810ba66bef1',
                    brand: 'VISA',
                    cardNumber: '3455 4562 7710 3507',
                    expiryDate: '02/30',
                    holderName: 'John Carter',
                  },
                ]}
              />
            </Grid>
            <Grid xs={12} md={8}>
              <Stack
                spacing={{
                  xs: 3,
                  lg: 4,
                }}
              >
                <CryptoCurrentBalance
                  chartSeries={[16213.2, 9626.8, 10076.81]}
                  labels={['Bitcoin', 'Ethereum', 'US Dollars']}
                />
                <CryptoTransactions
                  transactions={[
                    {
                      id: '3cc450e88286fdd4e220c719',
                      amount: 0.1337,
                      balance: 4805,
                      coin: 'BTC',
                      createdAt: subDays(
                        subHours(subMinutes(now, 43), 5),
                        3,
                      ).getTime(),
                      operation: 'add',
                      title: 'Buy BTC',
                    },
                    {
                      id: '6442793e96a90d4e584a19f7',
                      amount: 0.2105,
                      balance: 2344,
                      coin: 'BTC',
                      createdAt: subDays(
                        subHours(subMinutes(now, 32), 54),
                        6,
                      ).getTime(),
                      operation: 'sub',
                      title: 'Sell BTC',
                    },
                  ]}
                />
              </Stack>
            </Grid>
            <Grid xs={12} md={4}>
              <Stack
                spacing={{
                  xs: 3,
                  lg: 4,
                }}
              >
                <CryptoOperation />
                <CryptoUpgrade />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
