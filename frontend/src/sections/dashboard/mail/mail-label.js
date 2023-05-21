import PropTypes from 'prop-types';
import AlertCircleIcon from '@untitled-ui/icons-react/build/esm/AlertCircle';
import BookmarkIcon from '@untitled-ui/icons-react/build/esm/Bookmark';
import Inbox01Icon from '@untitled-ui/icons-react/build/esm/Inbox01';
import Mail01Icon from '@untitled-ui/icons-react/build/esm/Mail01';
import Mail04Icon from '@untitled-ui/icons-react/build/esm/Mail04';
import Send01Icon from '@untitled-ui/icons-react/build/esm/Send01';
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import Tag01Icon from '@untitled-ui/icons-react/build/esm/Tag01';
import Trash02Icon from '@untitled-ui/icons-react/build/esm/Trash02';
import { Box, ButtonBase, ListItem, SvgIcon, Typography } from '@mui/material';

const systemLabelIcons = {
  all: <Mail01Icon />,
  inbox: <Inbox01Icon />,
  sent: <Send01Icon />,
  trash: <Trash02Icon />,
  drafts: <Mail04Icon />,
  spam: <AlertCircleIcon />,
  starred: <Star01Icon />,
  important: <BookmarkIcon />,
};

const getIcon = (label) => {
  if (label.type === 'system') {
    return systemLabelIcons[label.id];
  }

  return <Tag01Icon />;
};

const getColor = (label) => {
  if (label.type === 'custom') {
    return label.color || 'inherit';
  }

  return 'inherit';
};

export const MailLabel = (props) => {
  const { active, label, ...other } = props;

  const icon = getIcon(label);
  const color = getColor(label);
  const showUnreadCount = !!(label.unreadCount && label.unreadCount > 0);

  return (
    <ListItem
      disableGutters
      disablePadding
      sx={{
        '& + &': {
          mt: 1,
        },
      }}
      {...other}
    >
      <ButtonBase
        sx={{
          borderRadius: 1,
          color: 'text.secondary',
          flexGrow: 1,
          fontSize: (theme) => theme.typography.button.fontSize,
          fontWeight: (theme) => theme.typography.button.fontWeight,
          justifyContent: 'flex-start',
          lineHeight: (theme) => theme.typography.button.lineHeight,
          py: 1,
          px: 2,
          textAlign: 'left',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
          ...(active && {
            backgroundColor: 'action.selected',
            color: 'text.primary',
          }),
        }}
      >
        <SvgIcon
          sx={{
            color,
            mr: 1,
          }}
        >
          {icon}
        </SvgIcon>
        <Box sx={{ flexGrow: 1 }}>{label.name}</Box>
        {showUnreadCount && (
          <Typography color="inherit" variant="subtitle2">
            {label.unreadCount}
          </Typography>
        )}
      </ButtonBase>
    </ListItem>
  );
};

MailLabel.propTypes = {
  active: PropTypes.bool,
  // @ts-ignore
  label: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
