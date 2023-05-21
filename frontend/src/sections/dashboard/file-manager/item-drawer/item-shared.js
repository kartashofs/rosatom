import PropTypes from 'prop-types';
import Globe01Icon from '@untitled-ui/icons-react/build/esm/Globe03';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import {
  Avatar,
  AvatarGroup,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
} from '@mui/material';

export const ItemShared = (props) => {
  const { isPublic, shared } = props;

  const showShared = !isPublic && (shared || []).length > 0;

  return (
    <Stack alignItems="center" direction="row" spacing={1}>
      {isPublic && (
        <Tooltip title="Public">
          <Avatar
            sx={{
              height: 32,
              width: 32,
            }}
          >
            <SvgIcon fontSize="small">
              <Globe01Icon />
            </SvgIcon>
          </Avatar>
        </Tooltip>
      )}
      {showShared && (
        <AvatarGroup max={3}>
          {shared?.map((person) => (
            <Avatar
              key={person.name}
              src={person.avatar}
              sx={{
                height: 32,
                width: 32,
              }}
            />
          ))}
        </AvatarGroup>
      )}
      <IconButton>
        <SvgIcon fontSize="small">
          <PlusIcon />
        </SvgIcon>
      </IconButton>
    </Stack>
  );
};

ItemShared.propTypes = {
  isPublic: PropTypes.bool,
  shared: PropTypes.array,
};
