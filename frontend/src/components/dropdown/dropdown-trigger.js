import { cloneElement, useContext } from 'react';
import PropTypes from 'prop-types';
import { DropdownContext } from './dropdown-context';

export const DropdownTrigger = (props) => {
  const { children } = props;
  const { onTriggerEnter, onTriggerLeave } = useContext(DropdownContext);

  return cloneElement(children, {
    onMouseEnter: (event) => {
      children.props.onMouseEnter?.(event);
      onTriggerEnter(event);
    },
    onMouseLeave: (event) => {
      children.props.onMouseLeave?.(event);
      onTriggerLeave(event);
    },
  });
};

DropdownTrigger.propTypes = {
  children: PropTypes.element.isRequired,
};
