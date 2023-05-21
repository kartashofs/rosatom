import PropTypes from 'prop-types';
import Download01Icon from '@untitled-ui/icons-react/build/esm/Download01';
import { Avatar, Button, Stack, SvgIcon, Typography } from '@mui/material';

export const MailThreadAttachments = (props) => {
  const { attachments = [] } = props;

  const count = attachments.length;

  return (
    <Stack spacing={2}>
      <Typography variant="h6">{count} Attachments</Typography>
      <Stack
        alignItems="flex-start"
        direction="row"
        spacing={2}
        flexWrap="wrap"
      >
        {attachments.map((attachment) => (
          <Stack
            key={attachment.id}
            alignItems="center"
            direction="row"
            spacing={1}
            sx={{
              alignItems: 'center',
              cursor: 'pointer',
              display: 'flex',
            }}
          >
            {attachment.type === 'image' && (
              <Avatar src={attachment.url} variant="rounded" />
            )}
            {attachment.type === 'file' && (
              <Avatar
                variant="rounded"
                sx={{ backgroundColor: 'primary.light' }}
              >
                <Typography variant="overline">PDF</Typography>
              </Avatar>
            )}
            <div>
              <Typography noWrap variant="subtitle2">
                {attachment.name}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {attachment.size}
              </Typography>
            </div>
          </Stack>
        ))}
      </Stack>
      <div>
        <Button
          color="inherit"
          startIcon={
            <SvgIcon>
              <Download01Icon />
            </SvgIcon>
          }
          size="small"
        >
          Download all
        </Button>
      </div>
    </Stack>
  );
};

MailThreadAttachments.propTypes = {
  attachments: PropTypes.array,
};
