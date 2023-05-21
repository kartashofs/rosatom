import Attachment01Icon from '@untitled-ui/icons-react/build/esm/Attachment01';
import Expand01Icon from '@untitled-ui/icons-react/build/esm/Expand01';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  Paper,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
} from '@mui/material';
import { QuillEditor } from '../../../components/quill-editor';

export const Modal1 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Paper
      elevation={12}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: 3,
        maxWidth: '100%',
        minHeight: 500,
        mx: 'auto',
        outline: 'none',
        width: 600,
      }}
    >
      <Stack
        alignItems="center"
        direction="row"
        spacing={1}
        sx={{
          px: 2,
          py: 1,
        }}
      >
        <Typography sx={{ flexGrow: 1 }} variant="h6">
          New Message
        </Typography>
        <IconButton>
          <SvgIcon>
            <Expand01Icon />
          </SvgIcon>
        </IconButton>
        <IconButton>
          <SvgIcon>
            <XIcon />
          </SvgIcon>
        </IconButton>
      </Stack>
      <Input
        disableUnderline
        fullWidth
        placeholder="To"
        sx={{
          p: 1,
          borderBottom: 1,
          borderBottomColor: 'divider',
          borderBottomStyle: 'solid',
        }}
      />
      <Input
        disableUnderline
        fullWidth
        placeholder="Subject"
        sx={{
          p: 1,
          borderBottom: 1,
          borderBottomColor: 'divider',
          borderBottomStyle: 'solid',
        }}
      />
      <QuillEditor
        placeholder="Leave a message"
        sx={{
          border: 'none',
          flexGrow: 1,
        }}
      />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={3}
        sx={{ p: 2 }}
      >
        <Stack alignItems="center" direction="row" spacing={1}>
          <Tooltip title="Attach image">
            <IconButton size="small">
              <SvgIcon>
                <Image01Icon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Attach file">
            <IconButton size="small">
              <SvgIcon>
                <Attachment01Icon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
        </Stack>
        <div>
          <Button variant="contained">Send</Button>
        </div>
      </Stack>
    </Paper>
  </Box>
);
