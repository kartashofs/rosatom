import { useCallback, useMemo, useRef, useState } from 'react';
import {
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  SvgIcon,
} from '@mui/material';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import PropTypes from 'prop-types';

const options = ['Business', 'Planning', 'Frontend', 'Design'];

export const TaskLabels = (props) => {
  const { labels = [], onChange } = props;
  const menuRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const availableOptions = useMemo(() => {
    return options.filter((option) => !labels.includes(option));
  }, [labels]);

  const handleMenuOpen = useCallback(() => {
    setOpenMenu(true);
  }, []);

  const handleMenuClose = useCallback(() => {
    setOpenMenu(false);
  }, []);

  const handleDelete = useCallback(
    (label) => {
      const newLabels = labels.filter((item) => item !== label);

      onChange?.(newLabels);
    },
    [labels, onChange],
  );

  const handleToggle = useCallback(
    (label) => {
      let newLabels;

      const found = labels.find((item) => item === label);

      if (found) {
        newLabels = labels.filter((item) => item !== label);
      } else {
        newLabels = [...labels, label];
      }

      setOpenMenu(false);
      onChange?.(newLabels);
    },
    [labels, onChange],
  );

  const canAdd = availableOptions.length > 0;

  return (
    <>
      <Stack alignItems="center" direction="row" flexWrap="wrap" gap={1}>
        {labels.map((label) => (
          <Chip
            key={label}
            label={label}
            onDelete={() => handleDelete(label)}
            size="small"
          />
        ))}
        <IconButton onClick={handleMenuOpen} ref={menuRef} disabled={!canAdd}>
          <SvgIcon fontSize="small">
            <PlusIcon />
          </SvgIcon>
        </IconButton>
      </Stack>
      <Menu
        anchorEl={menuRef.current}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        onClose={handleMenuClose}
        open={openMenu}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
      >
        {availableOptions.map((option) => (
          <MenuItem key={option} onClick={() => handleToggle(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

TaskLabels.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string.isRequired),
  onChange: PropTypes.func,
};
