import { addDays, format, subMinutes } from 'date-fns';
import numeral from 'numeral';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material';

export const DetailList7 = () => {
  const deadline = format(addDays(new Date(), 14).getTime(), 'dd MMM yyyy');
  const budget = numeral(12500.0).format('$0,0.00');
  const lastUpdate = format(
    subMinutes(new Date(), 23).getTime(),
    'dd MMM yyyy',
  );

  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
        p: 3,
      }}
    >
      <Card>
        <CardHeader
          avatar={<Avatar src="/assets/avatars/avatar-omar-darboe.png" />}
          disableTypography
          subheader={
            <Link color="text.primary" underline="none" variant="subtitle2">
              Omar Darobe
            </Link>
          }
          style={{ paddingBottom: 0 }}
          title={
            <Typography
              color="text.secondary"
              sx={{ display: 'block' }}
              variant="overline"
            >
              Contest holder
            </Typography>
          }
        />
        <CardContent sx={{ pt: 0 }}>
          <List>
            <ListItem
              disableGutters
              divider
              sx={{
                justifyContent: 'space-between',
                padding: 2,
              }}
            >
              <Typography variant="subtitle2">Deadline</Typography>
              <Typography color="text.secondary" variant="body2">
                {deadline}
              </Typography>
            </ListItem>
            <ListItem
              disableGutters
              divider
              sx={{
                justifyContent: 'space-between',
                padding: 2,
              }}
            >
              <Typography variant="subtitle2">Budget</Typography>
              <Typography color="text.secondary" variant="body2">
                {budget}
              </Typography>
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                justifyContent: 'space-between',
                padding: 2,
              }}
            >
              <Typography variant="subtitle2">Last Update</Typography>
              <Typography color="text.secondary" variant="body2">
                {lastUpdate}
              </Typography>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
