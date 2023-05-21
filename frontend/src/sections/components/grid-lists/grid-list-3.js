import FileCheck03Icon from '@untitled-ui/icons-react/build/esm/FileCheck03';
import Download01Icon from '@untitled-ui/icons-react/build/esm/Download01';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  SvgIcon,
  Tooltip,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { bytesToSize } from '../../../utils/bytes-to-size';

const files = [
  {
    id: '5e8dd0721b9e0fab56d7238b',
    mimeType: 'image/png',
    name: 'example-project1.png',
    size: 1024 * 1024 * 3,
    url: '/assets/covers/abstract-2-4x4-small.png',
  },
  {
    id: '5e8dd0784431995a30eb2586',
    mimeType: 'application/zip',
    name: 'docs.zip',
    size: 1024 * 1024 * 25,
    url: '#',
  },
  {
    id: '5e8dd07cbb62749296ecee1c',
    mimeType: 'image/png',
    name: 'example-project2.png',
    size: 1024 * 1024 * 2,
    url: '/assets/covers/minimal-2-4x4-small.png',
  },
];

export const GridList3 = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
        p: 3,
      }}
    >
      <Grid container spacing={3}>
        {files.map((file) => {
          const isImage = file.mimeType.includes('image/');

          return (
            <Grid key={file.id} md={4} xs={12}>
              <Card>
                {isImage ? (
                  <CardMedia image={file.url} sx={{ height: 140 }} />
                ) : (
                  <Box
                    sx={{
                      alignItems: 'center',
                      backgroundColor: 'neutral.50',
                      color: 'common.black',
                      display: 'flex',
                      height: 140,
                      justifyContent: 'center',
                    }}
                  >
                    <SvgIcon>
                      <FileCheck03Icon />
                    </SvgIcon>
                  </Box>
                )}
                <CardContent
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <Typography variant="subtitle2">{file.name}</Typography>
                    <Typography color="text.secondary" variant="caption">
                      {bytesToSize(file.size)}
                    </Typography>
                  </div>
                  <div>
                    <Tooltip title="More options">
                      <IconButton edge="end" size="small">
                        <SvgIcon>
                          <DotsHorizontalIcon />
                        </SvgIcon>
                      </IconButton>
                    </Tooltip>
                  </div>
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button
                    color="inherit"
                    size="small"
                    startIcon={
                      <SvgIcon>
                        <Download01Icon />
                      </SvgIcon>
                    }
                  >
                    Download
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
