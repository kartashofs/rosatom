import { useCallback, useMemo, useState } from 'react';
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import { codeStyle } from '../../utils/code-style';
import { alpha } from '@mui/material/styles';

const samples = [
  {
    lang: 'jsx',
    label: '.jsx',
    icon: '/assets/logos/logo-javascript.svg',
    code: `
import { useState } from 'react';
import { usePageView } from '../hooks/use-page-view';
import { useUser } from '../hooks/use-user';

const Page = () => {
  const user = useUser();
  const [currentTab, setCurrentTab] = useState('general');

  usePageView();

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, py: 8 }}
    >
      <Container maxWidth="xl">
        <Stack
          spacing={3}
          sx={{ mb: 3 }}
        >
          <Typography variant="h4">
            Account
          </Typography>
          <div>
            <Tabs
              indicatorColor="primary"
              onChange={() => {}}
              scrollButtons="auto"
              textColor="primary"
              value={currentTab}
              variant="scrollable"
            >
              {[].map((tab) => (
                <Tab
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                />
              ))}
            </Tabs>
            <Divider />
          </div>
        </Stack>
      </Container>
    </Box>
  );
};
`,
  },
  {
    lang: 'tsx',
    label: '.tsx',
    icon: '/assets/logos/logo-typescript.svg',
    code: `
import { useState } from 'react';
import type { NextPage } from 'next';
import { usePageView } from '../hooks/use-page-view';
import { useUser } from '../hooks/use-user';

const Page: NextPage = () => {
  const user = useUser();
  const [currentTab, setCurrentTab] = useState<string>('general');

  usePageView();

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, py: 8 }}
    >
      <Container maxWidth="xl">
        <Stack
          spacing={3}
          sx={{ mb: 3 }}
        >
          <Typography variant="h4">
            Account
          </Typography>
          <div>
            <Tabs
              indicatorColor="primary"
              onChange={() => {}}
              scrollButtons="auto"
              textColor="primary"
              value={currentTab}
              variant="scrollable"
            >
              {[].map((tab) => (
                <Tab
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                />
              ))}
            </Tabs>
            <Divider />
          </div>
        </Stack>
      </Container>
    </Box>
  );
};
`,
  },
];

export const HomeCodeSamples = () => {
  const [currentLang, setCurrentLang] = useState(samples[0].lang);

  const handleLangChange = useCallback((event, value) => {
    setCurrentLang(value);
  }, []);

  const code = useMemo(() => {
    return (
      samples.find((sample) => sample.lang === currentLang)?.code.trim() || ''
    );
  }, [currentLang]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.neutral[800], 0.95),
          borderBottomColor: 'neutral.700',
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
          borderTopLeftRadius: (theme) => theme.shape.borderRadius,
          borderTopRightRadius: (theme) => theme.shape.borderRadius,
          boxShadow: 24,
          flex: '0 0 auto',
          overflow: 'hidden',
          px: 2,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
          sx={{
            py: 2,
            '& > div': {
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              borderRadius: '50%',
              height: 10,
              width: 10,
            },
          }}
        >
          <div />
          <div />
          <div />
        </Stack>
        <Tabs onChange={handleLangChange} value={currentLang}>
          {samples.map((sample) => (
            <Tab
              key={sample.lang}
              label={
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Box
                    sx={{
                      borderRadius: '4px',
                      flex: '0 0 auto',
                      height: 20,
                      overflow: 'hidden',
                      width: 20,
                      '& img': {
                        width: '100%',
                      },
                    }}
                  >
                    <img src={sample.icon} />
                  </Box>
                  <Typography sx={{ color: 'neutral.300' }} variant="body2">
                    {sample.label}
                  </Typography>
                </Stack>
              }
              value={sample.lang}
            />
          ))}
        </Tabs>
      </Stack>
      <Box
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.neutral[800], 0.9),
          borderBottomLeftRadius: (theme) => theme.shape.borderRadius,
          borderBottomRightRadius: (theme) => theme.shape.borderRadius,
          flex: '1 1 auto',
          overflow: 'hidden',
          p: 2,
          '& pre': {
            background: 'none !important',
            borderRadius: '0 !important',
            fontSize: '12px !important',
            height: '100%',
            m: '0 !important',
            overflow: 'hidden !important',
            p: '0 !important',
          },
          '& code': {
            fontSize: '12px !important',
          },
        }}
      >
        <SyntaxHighlighter
          children={code}
          language={currentLang}
          style={codeStyle}
        />
      </Box>
    </Box>
  );
};
