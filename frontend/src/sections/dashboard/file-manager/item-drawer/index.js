import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import Trash02Icon from '@untitled-ui/icons-react/build/esm/Trash02';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import {
  Avatar,
  backdropClasses,
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { bytesToSize } from '../../../../utils/bytes-to-size';
import { ItemTags } from './item-tags';
import { ItemShared } from './item-shared';
import { ItemIcon } from '../item-icon';

export const ItemDrawer = (props) => {
  const { item, onClose, onDelete, onFavorite, open = false } = props;

  let content = null;

  if (item) {
    const size = bytesToSize(item.size);
    const createdAt =
      item.createdAt && format(item.createdAt, 'MMM dd, yyyy HH:mm');
    const updatedAt =
      item.updatedAt && format(item.updatedAt, 'MMM dd, yyyy HH:mm');

    content = (
      <div>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="flex-end"
          spacing={2}
          sx={{ p: 3 }}
        >
          <IconButton onClick={() => onFavorite?.(item.id, !item.isFavorite)}>
            <SvgIcon
              fontSize="small"
              sx={{ color: item.isFavorite ? 'warning.main' : 'action.active' }}
            >
              <Star01Icon />
            </SvgIcon>
          </IconButton>
          <IconButton onClick={onClose}>
            <SvgIcon fontSize="small">
              <XIcon />
            </SvgIcon>
          </IconButton>
        </Stack>
        <Divider />
        <Box
          sx={{
            px: 3,
            py: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'neutral.500' : 'neutral.300',
              borderRadius: 1,
              borderStyle: 'dashed',
              borderWidth: 1,
              display: 'flex',
              justifyContent: 'center',
              mb: 2,
              p: 3,
            }}
          >
            <ItemIcon type={item.type} extension={item.extension} />
          </Box>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            spacing={2}
            sx={{ mb: 2 }}
          >
            <Typography variant="h6">{item.name}</Typography>
            <IconButton>
              <SvgIcon fontSize="small">
                <Edit02Icon />
              </SvgIcon>
            </IconButton>
          </Stack>
          <Grid container spacing={3}>
            <Grid xs={12} sm={4}>
              <Typography color="text.secondary" variant="caption">
                Created by
              </Typography>
            </Grid>
            <Grid xs={12} sm={8}>
              {item.author && <Avatar src={item.author.avatar || undefined} />}
            </Grid>
            <Grid xs={12} sm={4}>
              <Typography color="text.secondary" variant="caption">
                Size
              </Typography>
            </Grid>
            <Grid xs={12} sm={8}>
              <Typography variant="body2">{size}</Typography>
            </Grid>
            <Grid xs={12} sm={4}>
              <Typography color="text.secondary" variant="caption">
                Created At
              </Typography>
            </Grid>
            <Grid xs={12} sm={8}>
              <Typography variant="body2">{createdAt}</Typography>
            </Grid>
            <Grid xs={12} sm={4}>
              <Typography color="text.secondary" variant="caption">
                Modified At
              </Typography>
            </Grid>
            <Grid xs={12} sm={8}>
              <Typography variant="body2">{updatedAt}</Typography>
            </Grid>
            <Grid xs={12} sm={4}>
              <Typography color="text.secondary" variant="caption">
                Tags
              </Typography>
            </Grid>
            <Grid xs={12} sm={8}>
              <ItemTags tags={item.tags} />
            </Grid>
            <Grid xs={12} sm={4}>
              <Typography color="text.secondary" variant="caption">
                Shared with
              </Typography>
            </Grid>
            <Grid xs={12} sm={8}>
              <ItemShared isPublic={item.isPublic} shared={item.shared} />
            </Grid>
            <Grid xs={12} sm={4}>
              <Typography color="text.secondary" variant="caption">
                Actions
              </Typography>
            </Grid>
            <Grid xs={12} sm={8}>
              <IconButton onClick={() => onDelete?.(item.id)}>
                <SvgIcon fontSize="small">
                  <Trash02Icon />
                </SvgIcon>
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }

  return (
    <Drawer
      anchor="right"
      ModalProps={{
        sx: {
          [`& .${backdropClasses.root}`]: {
            background: 'transparent !important',
          },
        },
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          maxWidth: '100%',
          width: 400,
        },
      }}
    >
      {content}
    </Drawer>
  );
};

ItemDrawer.propTypes = {
  // @ts-ignore
  item: PropTypes.object,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  onFavorite: PropTypes.func,
  onTagsChange: PropTypes.func,
  open: PropTypes.bool,
};
