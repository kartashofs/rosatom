import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import { TopNavItem } from './top-nav-item';

export const TopNavSection = (props) => {
  const { items = [], pathname } = props;

  return (
    <Stack
      component="ul"
      direction="row"
      spacing={1}
      sx={{
        listStyle: 'none',
        m: 0,
        p: 0,
      }}
    >
      {items.map((item) => {
        const checkPath = !!(item.path && pathname);
        const partialMatch = checkPath ? pathname.includes(item.path) : false;
        const exactMatch = checkPath ? pathname === item.path : false;

        // Branch

        if (item.items) {
          return (
            <TopNavItem
              active={partialMatch}
              disabled={item.disabled}
              icon={item.icon}
              items={item.items}
              key={item.title}
              label={item.label}
              path={item.path}
              title={item.title}
            />
          );
        }

        // Leaf

        return (
          <TopNavItem
            active={exactMatch}
            disabled={item.disabled}
            icon={item.icon}
            key={item.title}
            label={item.label}
            path={item.path}
            title={item.title}
          />
        );
      })}
    </Stack>
  );
};

TopNavSection.propTypes = {
  items: PropTypes.array,
  pathname: PropTypes.string,
  subheader: PropTypes.string,
};
