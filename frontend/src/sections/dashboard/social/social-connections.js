import PropTypes from 'prop-types';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Input,
  Stack,
  SvgIcon,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { SocialConnection } from './social-connection';

export const SocialConnections = (props) => {
  const { connections = [], query = '', onQueryChange, ...other } = props;

  return (
    <Card {...other}>
      <CardHeader title="Connections" />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        spacing={2}
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <SvgIcon>
          <SearchMdIcon />
        </SvgIcon>
        <Box sx={{ flexGrow: 1 }}>
          <Input
            disableUnderline
            fullWidth
            onChange={onQueryChange}
            placeholder="Search connections"
            value={query}
          />
        </Box>
      </Stack>
      <Divider />
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {connections.map((connection) => (
            <Grid key={connection.id} xs={12} md={6}>
              <SocialConnection connection={connection} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

SocialConnections.propTypes = {
  connections: PropTypes.array,
  query: PropTypes.string,
  onQueryChange: PropTypes.func,
};
