import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { PropertyList } from '../../../components/property-list';
import { PropertyListItem } from '../../../components/property-list-item';
import { getInitials } from '../../../utils/get-initials';

export const CompanySummary = (props) => {
  const { company, ...other } = props;

  return (
    <Card {...other}>
      <CardContent>
        <Typography
          color="text.secondary"
          component="p"
          sx={{ mb: 2 }}
          variant="overline"
        >
          About
        </Typography>
        <PropertyList>
          <PropertyListItem
            align="vertical"
            label="Website"
            sx={{
              px: 0,
              py: 1,
            }}
            value={company.website}
          />
          <PropertyListItem
            align="vertical"
            label="Locations"
            sx={{
              px: 0,
              py: 1,
            }}
          >
            {(company.locations || []).map((location) => (
              <Typography key={location} color="text.secondary" variant="body2">
                {location}
              </Typography>
            ))}
          </PropertyListItem>
          <PropertyListItem
            align="vertical"
            label="Company size"
            sx={{
              px: 0,
              py: 1,
            }}
            value={company.employees}
          />
        </PropertyList>
        <Divider sx={{ my: 2 }} />
        <Typography
          color="text.secondary"
          component="p"
          sx={{ mb: 2 }}
          variant="overline"
        >
          Founders
        </Typography>
        <Stack spacing={2}>
          {(company.founders || []).map((founder) => (
            <Stack
              alignItems="center"
              direction="row"
              key={founder.id}
              spacing={2}
            >
              <Avatar src={founder.avatar}>{getInitials(founder.name)}</Avatar>
              <div>
                <Typography variant="subtitle2">{founder.name}</Typography>
                <Typography color="text.secondary" variant="body2">
                  {founder.role}
                </Typography>
              </div>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

CompanySummary.propTypes = {
  // @ts-ignore
  company: PropTypes.object.isRequired,
};
