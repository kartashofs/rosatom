import { format } from 'date-fns';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import CalendarIcon from '@untitled-ui/icons-react/build/esm/Calendar';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  SvgIcon,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

export const OverviewEvents = (props) => {
  const { events } = props;

  return (
    <Card>
      <CardHeader
        title="Upcoming events"
        subheader="Based on the linked bank accounts"
      />
      <CardContent sx={{ pt: 0 }}>
        <List disablePadding>
          {events.map((event) => {
            const createdAtMonth = format(event.createdAt, 'LLL').toUpperCase();
            const createdAtDay = format(event.createdAt, 'd');

            return (
              <ListItem disableGutters sx={{ py: 1.5 }} key={event.id}>
                <ListItemAvatar>
                  <Box
                    sx={{
                      p: 1,
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'neutral.800'
                          : 'neutral.100',
                      borderRadius: 2,
                      maxWidth: 'fit-content',
                    }}
                  >
                    <Typography
                      align="center"
                      color="text.primary"
                      variant="caption"
                    >
                      {createdAtMonth}
                    </Typography>
                    <Typography
                      align="center"
                      color="text.primary"
                      variant="h6"
                    >
                      {createdAtDay}
                    </Typography>
                  </Box>
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant="subtitle2">{event.title}</Typography>
                  <Typography color="text.secondary" variant="body2">
                    {event.description}
                  </Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton color="inherit">
                    <SvgIcon fontSize="small">
                      <CalendarIcon />
                    </SvgIcon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
        >
          See all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewEvents.propTypes = {
  events: PropTypes.array.isRequired,
};
