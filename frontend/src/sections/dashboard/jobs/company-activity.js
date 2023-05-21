import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Avatar, Box, Button, Link, Stack, Typography } from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { getInitials } from '../../../utils/get-initials';

const renderContent = (activity) => {
  switch (activity.type) {
    case 'new_job':
      return (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <Typography sx={{ mr: 0.5 }} variant="subtitle2">
            {activity.author}
          </Typography>
          <Typography sx={{ mr: 0.5 }} variant="body2">
            added a new job
          </Typography>
          <Typography color="primary" variant="subtitle2">
            <Link component={NextLink} href="#">
              {activity.addedJob}
            </Link>
          </Typography>
        </Box>
      );
    case 'new_team_member':
      return (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <Typography sx={{ mr: 0.5 }} variant="subtitle2">
            {activity.author}
          </Typography>
          <Typography sx={{ mr: 0.5 }} variant="body2">
            added
          </Typography>
          <Typography sx={{ mr: 0.5 }} variant="subtitle2">
            {activity.addedMember}
          </Typography>
          <Typography variant="body2">as a team member</Typography>
        </Box>
      );
    case 'created':
      return (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <Typography sx={{ mr: 0.5 }} variant="subtitle2">
            {activity.author}
          </Typography>
          <Typography sx={{ mr: 0.5 }} variant="body2">
            created
          </Typography>
          <Typography variant="subtitle2">{activity.createdCompany}</Typography>
        </Box>
      );
    default:
      return null;
  }
};

export const CompanyActivity = (props) => {
  const { activities, ...other } = props;

  return (
    <Stack spacing={3} {...other}>
      <div>
        <Typography variant="h6">Activity</Typography>
      </div>
      <Stack spacing={3}>
        <Timeline
          sx={{
            p: 0,
            m: 0,
          }}
        >
          {activities.map((activity, index) => {
            const showConnector = activities.length - 1 > index;
            const createdAt = format(activity.createdAt, 'MMM dd, HH:mm a');

            return (
              <TimelineItem
                key={activity.id}
                sx={{
                  '&:before': {
                    display: 'none',
                  },
                }}
              >
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      border: 0,
                      p: 0,
                    }}
                  >
                    <Avatar src={activity.avatar}>
                      {getInitials(activity.author)}
                    </Avatar>
                  </TimelineDot>
                  {showConnector && (
                    <TimelineConnector sx={{ minHeight: 30 }} />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  {renderContent(activity)}
                  <Typography
                    color="text.secondary"
                    variant="caption"
                    sx={{ mt: 1 }}
                  >
                    {createdAt}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button color="inherit">Load more</Button>
        </Box>
      </Stack>
    </Stack>
  );
};

CompanyActivity.defaultProps = {
  activities: [],
};

CompanyActivity.propTypes = {
  // @ts-ignore
  activities: PropTypes.array,
};
