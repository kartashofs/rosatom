import PropTypes from 'prop-types';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import { getInitials } from '../../../utils/get-initials';

export const CompanyMember = (props) => {
  const { member } = props;

  return (
    <Box
      sx={{
        borderColor: 'divider',
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        px: 3,
        py: 4,
      }}
    >
      <Stack alignItems="center" direction="row" spacing={2}>
        <Avatar src={member.avatar}>{getInitials(member.name)}</Avatar>
        <div>
          <Typography variant="subtitle2">{member.name}</Typography>
          <Typography color="text.secondary" variant="body2">
            {member.role}
          </Typography>
        </div>
      </Stack>
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        spacing={1}
        sx={{ mt: 2 }}
      >
        {(member.skills || []).map((skill) => (
          <Chip key={skill} label={skill} size="small" />
        ))}
      </Stack>
    </Box>
  );
};

CompanyMember.propTypes = {
  // @ts-ignore
  member: PropTypes.object.isRequired,
};
