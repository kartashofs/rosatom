import PropTypes from 'prop-types';
import { FileIcon } from '../../../components/file-icon';

export const ItemIcon = (props) => {
  const { type, extension } = props;

  return type === 'folder' ? (
    <img src="/assets/icons/icon-folder.svg" />
  ) : (
    <FileIcon extension={extension} />
  );
};

ItemIcon.propTypes = {
  extension: PropTypes.string,
  type: PropTypes.oneOf(['file', 'folder']).isRequired,
};
