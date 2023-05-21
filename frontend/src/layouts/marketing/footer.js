import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { Logo } from '../../components/logo';
import { paths } from '../../paths';
import NextLink from 'next/link';

const sections = [
  /* {
    title: 'Menu',
    items: [
      {
        title: 'Browse Components',
        path: paths.components.index,
      },
    ],
  }, */
  {
    title: 'Legal',
    items: [
      {
        title: 'Terms & Conditions',
        path: '#',
      },
      {
        title: 'License',
        path: '#',
      },
      {
        title: 'Contact',
        path: '#',
      },
    ],
  },
  {
    title: 'Social',
    items: [
      {
        title: 'Instagram',
        path: '#',
      },
      {
        title: 'LinkedIn',
        path: '#',
      },
    ],
  },
];

export const Footer = (props) => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50',
      borderTopColor: 'divider',
      borderTopStyle: 'solid',
      borderTopWidth: 1,
      pb: 6,
      pt: {
        md: 15,
        xs: 6,
      },
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid
          xs={12}
          sm={4}
          md={3}
          sx={{
            order: {
              xs: 4,
              md: 1,
            },
          }}
        >
          <Stack spacing={1}>
            <Stack
              alignItems="center"
              component={NextLink}
              direction="row"
              display="inline-flex"
              href={paths.index}
              spacing={1}
              sx={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  height: 24,
                  width: 24,
                }}
              >
                <Logo />
              </Box>
              <Box
                sx={{
                  color: 'text.primary',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: '0.3px',
                  lineHeight: 2.5,
                  '& span': {
                    color: 'primary.main',
                  },
                }}
              >
                AtomAnalytics
              </Box>
            </Stack>
            <Typography color="text.secondary" variant="caption">
              © 2022 Devias IO
            </Typography>
          </Stack>
        </Grid>
        {sections.map((section, index) => (
          <Grid
            key={section.title}
            xs={12}
            sm={4}
            md={3}
            sx={{
              order: {
                md: index + 2,
                xs: index + 1,
              },
            }}
          >
            <Typography color="text.secondary" variant="overline">
              {section.title}
            </Typography>
            <Stack
              component="ul"
              spacing={1}
              sx={{
                listStyle: 'none',
                m: 0,
                p: 0,
              }}
            >
              {section.items.map((item) => (
                <Stack
                  alignItems="center"
                  direction="row"
                  key={item.title}
                  spacing={2}
                >
                  <Box
                    sx={{
                      backgroundColor: 'primary.main',
                      height: 2,
                      width: 12,
                    }}
                  />
                  <Link
                    href={item.path}
                    color="text.primary"
                    variant="subtitle2"
                  >
                    {item.title}
                  </Link>
                </Stack>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 6 }} />
      <Typography color="text.secondary" variant="caption">
        All Rights Reserved.
      </Typography>
    </Container>
  </Box>
);
