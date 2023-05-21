import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Link,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import Users01Icon from '@untitled-ui/icons-react/build/esm/Users01';
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import CheckVerified01 from '@untitled-ui/icons-react/build/esm/CheckVerified01';
import { getInitials } from '../../../utils/get-initials';
import { CompanyJobs } from './company-jobs';
import { paths } from '../../../paths';

export const CompanyCard = (props) => {
  const { company, ...other } = props;

  return (
    <Card {...other}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          spacing={2}
          direction={{
            xs: 'column',
            sm: 'row',
          }}
        >
          <Avatar
            component={NextLink}
            href={paths.dashboard.jobs.companies.details}
            src={company.logo}
            variant="rounded"
          >
            {getInitials(company.name)}
          </Avatar>
          <div>
            <Link
              color="text.primary"
              component={NextLink}
              href={paths.dashboard.jobs.companies.details}
              variant="h6"
            >
              {company.name}
            </Link>
            <Typography variant="body2">{company.shortDescription}</Typography>
            <Stack
              alignItems="center"
              direction="row"
              flexWrap="wrap"
              spacing={3}
              sx={{ mt: 1 }}
            >
              <Stack alignItems="center" spacing={1} direction="row">
                <SvgIcon color="action">
                  <Users01Icon />
                </SvgIcon>
                <Typography color="text.secondary" noWrap variant="overline">
                  {company.employees}
                </Typography>
              </Stack>
              <Stack alignItems="center" spacing={1} direction="row">
                <SvgIcon color="action">
                  <Star01Icon />
                </SvgIcon>
                <Typography color="text.secondary" noWrap variant="overline">
                  {company.averageRating}
                  /5
                </Typography>
              </Stack>
              {company.isVerified && (
                <Stack alignItems="center" direction="row" spacing={0.5}>
                  <SvgIcon
                    sx={{
                      color: 'background.paper',
                      '& path': {
                        fill: (theme) => theme.palette.success.main,
                        fillOpacity: 1,
                      },
                    }}
                  >
                    <CheckVerified01 />
                  </SvgIcon>
                  <Typography color="success" noWrap variant="overline">
                    Verified
                  </Typography>
                </Stack>
              )}
            </Stack>
          </div>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <CompanyJobs jobs={company.jobs} />
        </Box>
      </CardContent>
    </Card>
  );
};

CompanyCard.propTypes = {
  // @ts-ignore
  company: PropTypes.object.isRequired,
};
