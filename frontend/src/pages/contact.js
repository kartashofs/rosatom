import Head from 'next/head';
import NextLink from 'next/link';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import Mail01Icon from '@untitled-ui/icons-react/build/esm/Mail01';
import {
  Avatar,
  Box,
  Container,
  Link,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { usePageView } from '../hooks/use-page-view';
import { paths } from '../paths';
import { ContactForm } from '../sections/contact/contact-form';
import { LogoSamsung } from '../components/companies-logos/logo-samsung';
import { LogoVisma } from '../components/companies-logos/logo-visma';
import { LogoBolt } from '../components/companies-logos/logo-bolt';
import { LogoAws } from '../components/companies-logos/logo-aws';
import { LogoAccenture } from '../components/companies-logos/logo-accenture';
import { LogoAtt } from '../components/companies-logos/logo-att';

const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>Contact | AtomAnalytics</title>
      </Head>
      <Box
        component="main"
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            lg: 'repeat(2, 1fr)',
            xs: 'repeat(1, 1fr)',
          },
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50',
            py: 8,
          }}
        >
          <Container maxWidth="md" sx={{ pl: { lg: 15 } }}>
            <Stack spacing={3}>
              <div>
                <Link
                  color="text.primary"
                  component={NextLink}
                  href={paths.index}
                  sx={{
                    alignItems: 'center',
                    display: 'inline-flex',
                  }}
                  underline="hover"
                >
                  <SvgIcon sx={{ mr: 1 }}>
                    <ArrowLeftIcon />
                  </SvgIcon>
                  <Typography variant="subtitle2">Home</Typography>
                </Link>
              </div>
              <Typography variant="h3">Contact</Typography>
            </Stack>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{
                mb: 6,
                mt: 8,
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                }}
                variant="rounded"
              >
                <SvgIcon>
                  <Mail01Icon />
                </SvgIcon>
              </Avatar>
              <Typography variant="overline">Contact sales</Typography>
            </Stack>
            <Typography sx={{ mb: 3 }} variant="h1">
              Talk to our account expert
            </Typography>
            <Typography sx={{ mb: 3 }} variant="body1">
              Have questions about integrating our APIs? Fill out the form and a
              senior web expert will be in touch shortly.
            </Typography>
            <Typography color="primary" sx={{ mb: 3 }} variant="h6">
              Join 6,000+ forward-thinking companies:
            </Typography>
            <Stack
              alignItems="center"
              direction="row"
              flexWrap="wrap"
              gap={4}
              sx={{
                color: 'text.primary',
                '& > *': {
                  flex: '0 0 auto',
                },
              }}
            >
              <LogoSamsung />
              <LogoVisma />
              <LogoBolt />
              <LogoAws />
              <LogoAccenture />
              <LogoAtt />
            </Stack>
          </Container>
        </Box>
        <Box
          sx={{
            backgroundColor: 'background.paper',
            px: 6,
            py: 15,
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              pr: {
                lg: 15,
              },
            }}
          >
            <Typography sx={{ pb: 3 }} variant="h6">
              Fill the form below
            </Typography>
            <ContactForm />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Page;
