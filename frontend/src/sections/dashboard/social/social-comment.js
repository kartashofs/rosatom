import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
import { Avatar, Box, Link, Stack, Typography } from '@mui/material';

export const SocialComment = (props) => {
  const { authorAvatar, authorName, createdAt, message, ...other } = props;

  const ago = formatDistanceToNowStrict(createdAt);

  return (
    <Stack alignItems="flex-start" direction="row" spacing={2} {...other}>
      <Avatar component="a" href="#" src={authorAvatar} />
      <Stack
        spacing={1}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50',
          borderRadius: 1,
          flexGrow: 1,
          p: 2,
        }}
      >
        <Stack alignItems="center" direction="row" spacing={1}>
          <Link color="text.primary" href="#" variant="subtitle2">
            {authorName}
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Typography color="text.secondary" variant="caption">
            {ago} ago
          </Typography>
        </Stack>
        <Typography variant="body2">{message}</Typography>
      </Stack>
    </Stack>
  );
};

SocialComment.propTypes = {
  authorAvatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};
