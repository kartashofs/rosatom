import NextLink from 'next/link';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import ChevronLeftIcon from '@untitled-ui/icons-react/build/esm/ChevronLeft';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import Trash02Icon from '@untitled-ui/icons-react/build/esm/Trash02';
import {
  Avatar,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { getInitials } from '../../../utils/get-initials';

export const MailThreadToolbar = (props) => {
  const { backHref, createdAt, from, to } = props;
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const formattedCreatedAt = format(createdAt, 'MMMM d yyyy, h:mm:ss a');

  return (
    <div>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <div>
          <Tooltip title="Back">
            <IconButton component={NextLink} href={backHref}>
              <SvgIcon>
                <ArrowLeftIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
        </div>
        <Stack alignItems="center" direction="row" spacing={1}>
          <OutlinedInput
            fullWidth
            placeholder="Search message"
            size="small"
            startAdornment={
              <InputAdornment position="start">
                <SvgIcon>
                  <SearchMdIcon />
                </SvgIcon>
              </InputAdornment>
            }
            sx={{ width: 200 }}
          />
          <Tooltip title="Previous email">
            <IconButton>
              <SvgIcon>
                <ChevronLeftIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Next email">
            <IconButton>
              <SvgIcon>
                <ChevronRightIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 3 }}
      >
        <Stack alignItems="center" direction="row" spacing={2}>
          <Avatar
            src={from.avatar || undefined}
            sx={{
              height: 48,
              width: 48,
            }}
          >
            {getInitials(from.name)}
          </Avatar>
          <div>
            <Typography component="span" variant="subtitle2">
              {from.name}
            </Typography>{' '}
            <Link color="text.secondary" component="span" variant="body2">
              {from.email}
            </Link>
            <Typography color="text.secondary" variant="subtitle2">
              To:{' '}
              {to.map((person) => (
                <Link color="inherit" key={person.email}>
                  {person.email}
                </Link>
              ))}
            </Typography>
            {formattedCreatedAt && (
              <Typography color="text.secondary" noWrap variant="caption">
                {formattedCreatedAt}
              </Typography>
            )}
          </div>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={1}>
          {mdUp && (
            <>
              <Tooltip title="Reply">
                <IconButton>
                  <SvgIcon>
                    <ReplyIcon />
                  </SvgIcon>
                </IconButton>
              </Tooltip>
              <Tooltip title="Reply all">
                <IconButton>
                  <SvgIcon>
                    <ReplyAllIcon />
                  </SvgIcon>
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton>
                  <SvgIcon>
                    <Trash02Icon />
                  </SvgIcon>
                </IconButton>
              </Tooltip>
            </>
          )}
          <Tooltip title="More options">
            <IconButton>
              <SvgIcon>
                <DotsHorizontalIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </div>
  );
};

MailThreadToolbar.propTypes = {
  backHref: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  // @ts-ignore
  from: PropTypes.object.isRequired,
  to: PropTypes.array.isRequired,
};
