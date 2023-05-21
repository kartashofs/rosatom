import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { paths } from '../../../paths';
import { getInitials } from '../../../utils/get-initials';

export const PostCard = (props) => {
  const {
    authorAvatar,
    authorName,
    category,
    cover,
    publishedAt,
    readTime,
    shortDescription,
    title,
    ...other
  } = props;

  const formattedPublishedAt = format(publishedAt, 'MMM d, yyyy');

  return (
    <Card {...other}>
      <CardMedia
        component={NextLink}
        href={paths.dashboard.blog.postDetails}
        image={cover}
        sx={{ height: 280 }}
      />
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Chip label={category} />
        </Box>
        <Link
          color="text.primary"
          component={NextLink}
          href={paths.dashboard.blog.postDetails}
          variant="h5"
        >
          {title}
        </Link>
        <Typography
          color="text.secondary"
          sx={{
            height: 48,
            mt: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}
          variant="body1"
        >
          {shortDescription}
        </Typography>
        <Stack
          alignItems="center"
          direction="row"
          flexWrap="wrap"
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <Avatar src={authorAvatar}>{getInitials(authorName)}</Avatar>
            <Typography variant="subtitle2">
              By {authorName} • {formattedPublishedAt}
            </Typography>
          </Stack>
          <Typography
            align="right"
            color="text.secondary"
            sx={{ flexGrow: 1 }}
            variant="body2"
          >
            {readTime} read
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

PostCard.propTypes = {
  authorAvatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  publishedAt: PropTypes.number.isRequired,
  readTime: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
