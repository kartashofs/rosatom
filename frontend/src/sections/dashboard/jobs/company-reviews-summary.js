import PropTypes from 'prop-types';
import { Card, CardContent, Rating, Stack, Typography } from '@mui/material';

export const CompanyReviewsSummary = (props) => {
  const { averageRating, totalReviews } = props;

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack
          alignItems={{
            xs: 'flex-start',
            sm: 'center',
          }}
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          flexWrap="wrap"
          gap={2}
        >
          <Typography variant="subtitle2">Overall reviews</Typography>
          <Stack
            alignItems="center"
            direction="row"
            divider={<span>•</span>}
            spacing={2}
          >
            <Stack alignItems="center" direction="row" spacing={1}>
              <Rating
                value={averageRating / 5}
                precision={0.1}
                readOnly
                max={1}
              />
              <Typography noWrap variant="subtitle2">
                {averageRating}/5
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="body2">
              {totalReviews} reviews in total
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

CompanyReviewsSummary.propTypes = {
  averageRating: PropTypes.number.isRequired,
  totalReviews: PropTypes.number.isRequired,
};
