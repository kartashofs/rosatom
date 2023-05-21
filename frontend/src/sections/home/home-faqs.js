import { useState } from 'react';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import {
  Box,
  Collapse,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';

const faqs = [
  {
    question: 'Do you have a free demo to review the code before purchasing?',
    answer:
      'Yes, you can check out our open source dashboard template which should give you an overview of the code quality and folder structure. Keep in mind that some aspects may differ from this Paid version.',
  },
  {
    question: 'How many projects can I build with AtomAnalytics?',
    answer:
      "The license is per project (domain), but if you intend to develop an unknown number of projects feel free to contact us and we'll find a solution.",
  },
  {
    question: 'How many projects can I build with this template?',
    answer:
      'Absolutely! If you intend to charge users for using your product Extended license is created specifically for this context.',
  },
  {
    question: 'What browsers does the template support?',
    answer:
      "The components in MUI are designed to work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge. We don't support Internet Explorer 11.",
  },
  {
    question: 'For what kind of projects is the Standard license intended?',
    answer:
      'The Standard license is designed for internal applications in which staff will access the application. An example could be the back-office dashboard of a public-facing e-commerce website in which staff would sign in and manage inventory, customers, etc.',
  },
];

const Faq = (props) => {
  const { answer, question } = props;
  const [expanded, setExpanded] = useState(false);

  return (
    <Stack
      onClick={() => setExpanded((prevState) => !prevState)}
      spacing={2}
      sx={{ cursor: 'pointer' }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="subtitle1">{question}</Typography>
        <SvgIcon>
          {expanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
        </SvgIcon>
      </Stack>
      <Collapse in={expanded}>
        <Typography color="text.secondary" variant="body2">
          {answer}
        </Typography>
      </Collapse>
    </Stack>
  );
};

export const HomeFaqs = () => {
  return (
    <Box sx={{ py: '120px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="h3">Everything you need to know</Typography>
              <Typography color="text.secondary" variant="subtitle2">
                Frequently asked questions
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={4}>
              {faqs.map((faq, index) => (
                <Faq key={index} {...faq} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
