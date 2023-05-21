import { useCallback, useEffect, useRef, useState } from 'react';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import { Button, ButtonGroup, MenuItem, Popover } from '@mui/material';

export const TaskStatus = (props) => {
  const { onChange, options = [], value } = props;
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState(() => {
    return options.find((option) => option.value === value);
  });

  useEffect(() => {
    const option = options.find((option) => option.value === value);
    setCurrentOption(option);
  }, [options, value]);

  const handleOptionConfirm = useCallback(() => {
    if (!currentOption) {
      return;
    }

    onChange?.(currentOption.value);
  }, [currentOption, onChange]);

  const handleOptionSelect = useCallback(
    (value) => {
      const option = options.find((option) => option.value === value);
      setCurrentOption(option);
      setOpen(false);
    },
    [options],
  );

  const handleMenuToggle = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  const handleMenuClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <ButtonGroup ref={anchorRef} variant="contained" size="small">
        <Button onClick={handleOptionConfirm}>
          Submit as {currentOption?.label}
        </Button>
        <Button size="small" onClick={handleMenuToggle}>
          <ChevronDownIcon />
        </Button>
      </ButtonGroup>
      <Popover
        anchorEl={anchorRef.current}
        disableScrollLock
        onClose={handleMenuClose}
        open={open}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === value}
            onClick={() => handleOptionSelect(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};
