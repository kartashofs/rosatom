import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';

export const Form3 = () => (
  <Box sx={{ p: 3 }}>
    <form onSubmit={(event) => event.preventDefault()}>
      <CardHeader title="Notifications" />
      <Divider />
      <CardContent>
        <Grid container spacing={6} wrap="wrap">
          <Grid xs={12} sm={6} md={4}>
            <Typography gutterBottom variant="subtitle2">
              System
            </Typography>
            <Typography color="text.secondary" gutterBottom variant="body2">
              You will receive emails in your business email address
            </Typography>
            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Email alerts"
              />
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox />}
                label="Push Notifications"
              />
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Text message"
              />
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <>
                    <Typography variant="body1">Phone calls</Typography>
                    <Typography color="text.secondary" variant="caption">
                      Short voice phone updating you
                    </Typography>
                  </>
                }
              />
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <Typography gutterBottom variant="subtitle2">
              Chat App
            </Typography>
            <Typography color="text.secondary" gutterBottom variant="body2">
              You will receive emails in your business email address
            </Typography>
            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Email"
              />
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Push notifications"
              />
            </div>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <Button type="submit" variant="contained">
          Save Settings
        </Button>
      </CardActions>
    </form>
  </Box>
);
