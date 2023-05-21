import InfoCircleIcon from '@untitled-ui/icons-react/build/esm/InfoCircle';
import Link01Icon from '@untitled-ui/icons-react/build/esm/Link01';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  SvgIcon,
  Typography,
} from '@mui/material';

export const OverviewHelp = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <SvgIcon color="primary">
          <InfoCircleIcon />
        </SvgIcon>
        <Typography color="primary.main" sx={{ pl: 1 }} variant="subtitle2">
          Help Center
        </Typography>
      </Box>
      <Typography sx={{ mt: 2 }} variant="h6">
        Need help figuring things out?
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1 }} variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="inherit"
        endIcon={
          <SvgIcon>
            <Link01Icon />
          </SvgIcon>
        }
        size="small"
      >
        Help Center
      </Button>
    </CardActions>
  </Card>
);
