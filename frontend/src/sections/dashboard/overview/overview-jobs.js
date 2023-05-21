import Briefcase01Icon from '@untitled-ui/icons-react/build/esm/Briefcase01';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
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

export const OverviewJobs = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <SvgIcon color="primary">
          <Briefcase01Icon />
        </SvgIcon>
        <Typography color="primary.main" sx={{ pl: 1 }} variant="subtitle2">
          Jobs
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Find your dream job
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
            <ArrowRightIcon />
          </SvgIcon>
        }
        size="small"
      >
        Search Jobs
      </Button>
    </CardActions>
  </Card>
);
