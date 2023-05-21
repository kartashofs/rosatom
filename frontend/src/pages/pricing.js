import Head from 'next/head';
import {
  Box,
  Chip,
  Container,
  Divider,
  Stack,
  Switch,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { PlanIcon } from '../components/plan-icon';
import { usePageView } from '../hooks/use-page-view';
import { Layout as MarketingLayout } from '../layouts/marketing';
import { PricingPlan } from '../sections/pricing/pricing-plan';
import { PricingFaqs } from '../sections/pricing/pricing-faqs';

const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>Pricing | AtomAnalytics</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50',
            pb: '120px',
            pt: '184px',
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                mb: 4,
              }}
            >
              <Typography variant="h3">
                Start today. Boost up your services!
              </Typography>
              <Typography color="text.secondary" sx={{ my: 2 }} variant="body1">
                Join 6,000+ developers &amp; designers using Devias to power
                modern web projects.
              </Typography>
              <Stack alignItems="center" direction="row" spacing={1}>
                <Switch checked />
                <Typography variant="body1">Yearly Payment</Typography>
                <Chip color="primary" label="25% OFF" size="small" />
              </Stack>
            </Box>
            <Grid container spacing={4}>
              <Grid xs={12} md={4}>
                <PricingPlan
                  cta="Start Free Trial"
                  currency="$"
                  description="To familiarize yourself with our tools."
                  features={[
                    'Create contracts',
                    'Chat support',
                    'Email alerts',
                  ]}
                  icon={<PlanIcon variant="startup" />}
                  name="Startup"
                  price="0"
                  sx={{
                    height: '100%',
                    maxWidth: 460,
                    mx: 'auto',
                  }}
                />
              </Grid>
              <Grid xs={12} md={4}>
                <PricingPlan
                  cta="Start Free Trial"
                  currency="$"
                  description="To familiarize yourself with our tools."
                  features={[
                    'All previous',
                    'Highlights reporting',
                    'Data history',
                    'Unlimited users',
                  ]}
                  icon={<PlanIcon variant="standard" />}
                  name="Standard"
                  popular
                  price="4.99"
                  sx={{
                    height: '100%',
                    maxWidth: 460,
                    mx: 'auto',
                  }}
                />
              </Grid>
              <Grid xs={12} md={4}>
                <PricingPlan
                  cta="Contact Us"
                  currency="$"
                  description="To familiarize yourself with our tools."
                  features={[
                    'All previous',
                    'Unlimited contacts',
                    'Analytics platform',
                    'Public API access',
                    'Send and sign unlimited contracts',
                  ]}
                  icon={<PlanIcon variant="business" />}
                  name="Business"
                  price="29.99"
                  sx={{
                    height: '100%',
                    maxWidth: 460,
                    mx: 'auto',
                  }}
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 4 }}>
              <Typography
                align="center"
                color="text.secondary"
                component="p"
                variant="caption"
              >
                30% of our income goes into Whale Charity
              </Typography>
            </Box>
          </Container>
        </Box>
        <Divider />
        <PricingFaqs />
      </Box>
    </>
  );
};

Page.getLayout = (page) => <MarketingLayout>{page}</MarketingLayout>;

export default Page;
