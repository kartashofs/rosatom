import React from 'react';
import CreditCard02Icon from '@untitled-ui/icons-react/build/esm/CreditCard02';
import Mail01Icon from '@untitled-ui/icons-react/build/esm/Mail01';
import Send01Icon from '@untitled-ui/icons-react/build/esm/Send01';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import {
  Box,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  SvgIcon,
  Tooltip,
  Typography,
} from '@mui/material';

const notifications = [
  {
    id: '5e8883a4f7877f898c408c27',
    message: 'to send service quotes',
    type: 'invite',
    value: 6,
  },
  {
    id: '5e8883aa34190e0457a6e2b9',
    message: 'from clients',
    type: 'message',
    value: 2,
  },
  {
    id: '5e8883af168cad3e1f4fe0ae',
    message: 'that needs your confirmation',
    type: 'payout',
    value: 1,
  },
];

const iconsMap = {
  invite: <Send01Icon />,
  message: <Mail01Icon />,
  payout: <CreditCard02Icon />,
};

export const GroupedList4 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Card>
      <List>
        {notifications.map((notification, index) => {
          const showDivider = index < notifications.length - 1;
          const icon = iconsMap[notification.type];
          const title = `${notification.value} ${notification.type}s ${notification.message}`;

          return (
            <ListItem divider={showDivider} key={notification.id}>
              <ListItemIcon>
                <SvgIcon>{icon}</SvgIcon>
              </ListItemIcon>
              <ListItemText>
                <Typography variant="subtitle2">{title}</Typography>
              </ListItemText>
              <ListItemSecondaryAction>
                <Tooltip title="View">
                  <IconButton edge="end">
                    <SvgIcon>
                      <ChevronRightIcon />
                    </SvgIcon>
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Card>
  </Box>
);
