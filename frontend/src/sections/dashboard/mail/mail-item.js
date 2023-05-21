import { useCallback } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { format } from 'date-fns';
import Attachment01Icon from '@untitled-ui/icons-react/build/esm/Attachment01';
import BookmarkIcon from '@untitled-ui/icons-react/build/esm/Bookmark';
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import {
  Avatar,
  Box,
  Checkbox,
  Chip,
  IconButton,
  SvgIcon,
  Tooltip,
  Typography,
} from '@mui/material';
import { getInitials } from '../../../utils/get-initials';

export const MailItem = (props) => {
  const { email, onDeselect, onSelect, selected, href, ...other } = props;

  const handleSelectToggle = useCallback(
    (event) => {
      const { checked } = event.target;

      if (checked) {
        onSelect?.();
      } else {
        onDeselect?.();
      }
    },
    [onSelect, onDeselect],
  );

  const createdAt = format(email.createdAt, 'dd MMM');
  const hasAnyAttachments = !!(
    email.attachments && email.attachments.length > 0
  );
  const hasManyAttachments = !!(
    email.attachments && email.attachments.length > 1
  );

  return (
    <Box
      sx={{
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'divider',
        display: 'flex',
        p: 2,
        ...(!email.isUnread && {
          position: 'relative',
          '&:before': {
            backgroundColor: 'primary.main',
            content: '" "',
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 4,
          },
          '& $name, & $subject': {
            fontWeight: 600,
          },
        }),
        ...(selected && {
          backgroundColor: 'primary.lightest',
        }),
        ...(!selected && {
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }),
      }}
      {...other}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: {
            md: 'flex',
            xs: 'none',
          },
          mr: 1,
        }}
      >
        <Checkbox checked={selected} onChange={handleSelectToggle} />
        <Tooltip title="Starred">
          <IconButton>
            <SvgIcon
              sx={{
                ...(email.isStarred && {
                  color: 'warning.main',
                  '& path': {
                    fill: (theme) => theme.palette.warning.main,
                    fillOpacity: 1,
                  },
                }),
              }}
            >
              <Star01Icon />
            </SvgIcon>
          </IconButton>
        </Tooltip>
        <Tooltip title="Important">
          <IconButton>
            <SvgIcon
              sx={{
                ...(email.isImportant && {
                  color: 'warning.main',
                  '& path': {
                    fill: (theme) => theme.palette.warning.main,
                    fillOpacity: 1,
                  },
                }),
              }}
            >
              <BookmarkIcon />
            </SvgIcon>
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        component={NextLink}
        href={href}
        sx={{
          alignItems: 'center',
          cursor: 'pointer',
          display: 'flex',
          flexGrow: 1,
          flexWrap: {
            xs: 'wrap',
            md: 'nowrap',
          },
          minWidth: 1,
          textDecoration: 'none',
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Avatar src={email.from.avatar || undefined}>
            {getInitials(email.from.name)}
          </Avatar>
          <Typography
            color="text.primary"
            sx={{
              width: 120,
              ml: 2,
              ...(!email.isUnread && {
                fontWeight: 600,
              }),
            }}
            noWrap
            variant="body2"
          >
            {email.from.name}
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            ml: {
              xs: 0,
              md: 2,
            },
            my: {
              xs: 2,
              md: 0,
            },
            overflow: 'hidden',
            width: {
              xs: '100%',
              md: 'auto',
            },
          }}
        >
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              maxWidth: 800,
              width: '100%',
            }}
          >
            <Typography
              color="text.primary"
              sx={{
                fontWeight: 600,
                minWidth: 100,
                maxWidth: 400,
                mr: 1,
              }}
              noWrap
              variant="body2"
            >
              {email.subject}
            </Typography>
            <Typography color="text.secondary" noWrap variant="body2">
              —{email.message}
            </Typography>
          </Box>
          {hasAnyAttachments && (
            <Box sx={{ mt: 1 }}>
              <Chip
                icon={
                  <SvgIcon>
                    <Attachment01Icon />
                  </SvgIcon>
                }
                label={email.attachments[0].name}
                size="small"
              />
              {hasManyAttachments && (
                <Chip label="+1" size="small" sx={{ ml: 1 }} />
              )}
            </Box>
          )}
        </Box>
        <Typography
          color="text.secondary"
          variant="caption"
          sx={{
            display: 'block',
            textAlign: {
              xs: 'left',
              md: 'right',
            },
            whiteSpace: 'nowrap',
            width: 100,
          }}
        >
          {createdAt}
        </Typography>
      </Box>
    </Box>
  );
};

MailItem.propTypes = {
  // @ts-ignore
  email: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  onDeselect: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.bool.isRequired,
};
