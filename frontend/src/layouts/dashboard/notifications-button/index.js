import { useCallback, useMemo, useRef, useState } from 'react';
import Bell01Icon from '@untitled-ui/icons-react/build/esm/Bell01';
import { Badge, IconButton, SvgIcon, Tooltip } from '@mui/material';
import { notifications as initialNotifications } from './notifications';
import { NotificationsPopover } from './notifications-popover';

const useNotifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unread = useMemo(() => {
    return notifications.reduce(
      (acc, notification) => acc + (notification.read ? 0 : 1),
      0,
    );
  }, [notifications]);

  const handleRemoveOne = useCallback((notificationId) => {
    setNotifications((prevState) => {
      return prevState.filter(
        (notification) => notification.id !== notificationId,
      );
    });
  }, []);

  const handleMarkAllAsRead = useCallback(() => {
    setNotifications((prevState) => {
      return prevState.map((notification) => ({
        ...notification,
        read: true,
      }));
    });
  }, []);

  return {
    handleMarkAllAsRead,
    handleRemoveOne,
    notifications,
    unread,
  };
};

export const NotificationsButton = () => {
  const anchorRef = useRef(null);
  const [openPopover, setOpenPopover] = useState(false);
  const { handleRemoveOne, handleMarkAllAsRead, notifications, unread } =
    useNotifications();

  const handlePopoverOpen = useCallback(() => {
    setOpenPopover(true);
  }, []);

  const handlePopoverClose = useCallback(() => {
    setOpenPopover(false);
  }, []);

  return (
    <>
      <Tooltip title="Notifications">
        <IconButton ref={anchorRef} onClick={handlePopoverOpen}>
          <Badge color="error" badgeContent={unread}>
            <SvgIcon>
              <Bell01Icon />
            </SvgIcon>
          </Badge>
        </IconButton>
      </Tooltip>
      <NotificationsPopover
        anchorEl={anchorRef.current}
        notifications={notifications}
        onClose={handlePopoverClose}
        onMarkAllAsRead={handleMarkAllAsRead}
        onRemoveOne={handleRemoveOne}
        open={openPopover}
      />
    </>
  );
};
