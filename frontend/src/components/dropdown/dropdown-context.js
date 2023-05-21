import { createContext } from 'react';
import { noop } from '../../utils/noop';

export const DropdownContext = createContext({
  anchorEl: null,
  onMenuEnter: noop,
  onMenuLeave: noop,
  onTriggerEnter: noop,
  onTriggerLeave: noop,
  open: false,
});
