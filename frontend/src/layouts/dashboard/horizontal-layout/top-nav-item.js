import NextLink from 'next/link';
import PropTypes from 'prop-types';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import {
  Box,
  ButtonBase,
  ListItemButton,
  ListItemText,
  SvgIcon,
} from '@mui/material';
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
} from '../../../components/dropdown';

const renderChildItems = ({ items, depth = 0 }) => {
  return items.map((item) => {
    const { disabled, items, path, title } = item;

    // Branch
    if (items) {
      return (
        <Dropdown key={title}>
          <DropdownTrigger>
            <ListItemButton
              disabled={disabled}
              sx={{
                borderRadius: 1,
                px: 1.5,
                py: 0.5,
              }}
            >
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  sx: {
                    color: 'text.secondary',
                    fontSize: 14,
                    fontWeight: 500,
                  },
                }}
              />
              <SvgIcon fontSize="small" sx={{ color: 'neutral.400' }}>
                <ChevronRightIcon />
              </SvgIcon>
            </ListItemButton>
          </DropdownTrigger>
          <DropdownMenu
            anchorOrigin={{
              horizontal: 'right',
              vertical: 'top',
            }}
            disableScrollLock
            PaperProps={{
              elevation: 8,
              sx: {
                maxWidth: '100%',
                ml: 1,
                p: 1,
                width: 200,
              },
            }}
            transformOrigin={{
              horizontal: 'left',
              vertical: 'top',
            }}
          >
            {renderChildItems({ items, depth: depth + 1 })}
          </DropdownMenu>
        </Dropdown>
      );
    }

    let linkProps = undefined;

    if (path) {
      const isExternal = path.startsWith('http');

      linkProps = isExternal
        ? {
            component: 'a',
            href: path,
            target: '_blank',
          }
        : {
            component: NextLink,
            href: path,
          };
    }

    // Leaf
    return (
      <ListItemButton
        disabled={disabled}
        key={title}
        sx={{
          borderRadius: 1,
          px: 1.5,
          py: 0.5,
        }}
        {...linkProps}
      >
        <ListItemText
          primary={item.title}
          primaryTypographyProps={{
            sx: {
              color: 'text.secondary',
              fontSize: 14,
              fontWeight: 500,
            },
          }}
        />
      </ListItemButton>
    );
  });
};

export const TopNavItem = (props) => {
  const { active, disabled, items, icon, label, path, title } = props;

  // With dropdown

  if (items) {
    return (
      <Dropdown>
        <DropdownTrigger>
          <li>
            <ButtonBase
              disabled={disabled}
              sx={{
                alignItems: 'center',
                borderRadius: 1,
                display: 'flex',
                justifyContent: 'flex-start',
                px: '16px',
                py: '6px',
                textAlign: 'left',
                width: '100%',
                ...(active && {
                  backgroundColor: 'var(--nav-item-active-bg)',
                }),
                '&:hover': {
                  backgroundColor: 'var(--nav-item-hover-bg)',
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  alignItems: 'center',
                  color: 'var(--nav-item-icon-color)',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  mr: 2,
                  ...(active && {
                    color: 'var(--nav-item-icon-active-color)',
                  }),
                }}
              >
                {icon}
              </Box>
              <Box
                component="span"
                sx={{
                  color: 'var(--nav-item-color)',
                  flexGrow: 1,
                  fontFamily: (theme) => theme.typography.fontFamily,
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: '24px',
                  whiteSpace: 'nowrap',
                  ...(active && {
                    color: 'var(--nav-item-active-color)',
                  }),
                  ...(disabled && {
                    color: 'var(--nav-item-disabled-color)',
                  }),
                }}
              >
                {title}
              </Box>
              <SvgIcon
                sx={{
                  color: 'var(--nav-item-chevron-color)',
                  fontSize: 16,
                  ml: 1,
                }}
              >
                <ChevronDownIcon />
              </SvgIcon>
            </ButtonBase>
          </li>
        </DropdownTrigger>
        <DropdownMenu
          disableScrollLock
          PaperProps={{
            elevation: 8,
            sx: {
              maxWidth: '100%',
              p: 1,
              width: 200,
            },
          }}
        >
          {renderChildItems({ items, depth: 0 })}
        </DropdownMenu>
      </Dropdown>
    );
  }

  // Without dropdown

  let linkProps = undefined;

  if (path) {
    const isExternal = path.startsWith('http');

    linkProps = isExternal
      ? {
          component: 'a',
          href: path,
          target: '_blank',
        }
      : {
          component: NextLink,
          href: path,
        };
  }

  return (
    <li>
      <ButtonBase
        disabled={disabled}
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          px: '16px',
          py: '6px',
          textAlign: 'left',
          width: '100%',
          ...(active && {
            backgroundColor: 'var(--nav-item-active-bg)',
          }),
          '&:hover': {
            backgroundColor: 'var(--nav-item-hover-bg)',
          },
        }}
        {...linkProps}
      >
        {icon && (
          <Box
            component="span"
            sx={{
              alignItems: 'center',
              color: 'var(--nav-item-icon-color)',
              display: 'inline-flex',
              justifyContent: 'center',
              mr: 2,
              ...(active && {
                color: 'var(--nav-item-icon-active-color)',
              }),
            }}
          >
            {icon}
          </Box>
        )}
        <Box
          component="span"
          sx={{
            color: 'var(--nav-item-color)',
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            ...(active && {
              color: 'var(--nav-item-active-color)',
            }),
            ...(disabled && {
              color: 'var(--nav-item-disabled-color)',
            }),
          }}
        >
          {title}
        </Box>
        {label && (
          <Box component="span" sx={{ ml: 1 }}>
            {label}
          </Box>
        )}
      </ButtonBase>
    </li>
  );
};

TopNavItem.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.node,
  items: PropTypes.array,
  label: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};
