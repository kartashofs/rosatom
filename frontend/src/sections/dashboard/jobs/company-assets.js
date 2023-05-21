import PropTypes from 'prop-types';
import File04Icon from '@untitled-ui/icons-react/build/esm/File04';
import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Divider,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';

export const CompanyAssets = (props) => {
  const { assets = [], ...other } = props;

  return (
    <Stack spacing={3} {...other}>
      <div>
        <Typography variant="h6">Assets ({assets.length})</Typography>
      </div>
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: 'repeat(2, minmax(0, 180px))',
        }}
      >
        {assets.map((asset) => {
          const isPdf = asset.extension === 'pdf';
          const isImage = ['jpg', 'jpeg', 'png', ''].includes(asset.extension);

          return (
            <Card key={asset.id} variant="outlined">
              {isPdf && (
                <Box
                  sx={{
                    display: 'flex',
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'neutral.900'
                        : 'neutral.100',
                    height: 100,
                    justifyContent: 'center',
                    py: 3,
                  }}
                >
                  <Badge
                    anchorOrigin={{
                      horizontal: 'right',
                      vertical: 'bottom',
                    }}
                    badgeContent="PDF"
                    color="primary"
                  >
                    <SvgIcon sx={{ fontSize: 48 }}>
                      <File04Icon />
                    </SvgIcon>
                  </Badge>
                </Box>
              )}
              {isImage && <CardMedia image={asset.url} sx={{ height: 100 }} />}
              <Box sx={{ p: 2 }}>
                <Typography variant="subtitle2">{asset.fileName}</Typography>
                <Typography color="text.secondary" variant="caption">
                  {asset.size}
                </Typography>
              </Box>
              <Divider />
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button color="inherit" size="small">
                  Download
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Stack>
  );
};

CompanyAssets.propTypes = {
  // @ts-ignore
  assets: PropTypes.array,
};
