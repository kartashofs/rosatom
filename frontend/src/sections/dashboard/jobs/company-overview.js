import NextLink from 'next/link';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Box,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CompanyJobs } from './company-jobs';
import { CompanyMember } from './company-member';
import { paths } from '../../../paths';

const MarkdownWrapper = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
  '& p': {
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    marginBottom: theme.spacing(2),
  },
}));

export const CompanyOverview = (props) => {
  const { company, ...other } = props;

  // Limit to 2 members visible
  const members = (company.members || []).slice(0, 2);
  const images = company.images || [];

  return (
    <div {...other}>
      <div>
        <Typography variant="h5">{company.shortDescription}</Typography>
      </div>
      <Box sx={{ mt: 3 }}>
        <MarkdownWrapper>
          {company.description && <Markdown children={company.description} />}
        </MarkdownWrapper>
      </Box>
      <ImageList cols={3} gap={24} variant="masonry">
        {images.map((image, index) => (
          <ImageListItem key={index}>
            <img
              alt={`${company.name} gallery`}
              src={`${image}?w=248&fit=crop&auto=format`}
              srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
        spacing={3}
        sx={{ mt: 3 }}
      >
        <Typography variant="h6">Jobs</Typography>
        <Link
          color="inherit"
          component={NextLink}
          href={paths.dashboard.jobs.companies.details}
          variant="subtitle2"
          sx={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Typography sx={{ mr: 1 }} variant="subtitle2">
            Jobs
          </Typography>
          <SvgIcon>
            <ArrowRightIcon />
          </SvgIcon>
        </Link>
      </Stack>
      <Box sx={{ mt: 3 }}>
        <CompanyJobs jobs={company.jobs} />
      </Box>
      <Divider sx={{ my: 3 }} />
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
        spacing={3}
      >
        <Typography variant="h6">Members</Typography>
        <Link
          color="inherit"
          component={NextLink}
          href={paths.dashboard.jobs.companies.details}
          variant="subtitle2"
          sx={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Typography sx={{ mr: 1 }} variant="subtitle2">
            Members
          </Typography>
          <SvgIcon>
            <ArrowRightIcon />
          </SvgIcon>
        </Link>
      </Stack>
      <Box
        sx={{
          mb: -1.5,
          mt: 1.5,
          mx: -1.5,
        }}
      >
        <Grid container spacing={3}>
          {members.map((member) => (
            <Grid key={member.id} xs={12} sm={6}>
              <CompanyMember member={member} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

CompanyOverview.propTypes = {
  // @ts-ignore
  company: PropTypes.object.isRequired,
};
