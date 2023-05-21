import { Box, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';

export const Typography1 = () => (
  <Box sx={{ p: 3 }}>
    <Grid container>
      <Grid xs={12} md={6}>
        <Stack spacing={3}>
          <Typography variant="h1">H1</Typography>
          <Typography variant="h2">H2</Typography>
          <Typography variant="h3">H3</Typography>
          <Typography variant="h4">H4</Typography>
          <Typography variant="h5">H5</Typography>
          <Typography variant="h6">H6</Typography>
          <Typography variant="h2">Your clients will love it</Typography>
          <Typography variant="subtitle2">
            Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet
            non mollis vel, feugiat non nibh. Vivamus sit amet tristique dui.
            Praesent in bibendum arcu, at placerat augue. Nam varius fermentum
            diam, at tristique libero ultrices non. Praesent scelerisque diam
            vitae posuere dignissim.
          </Typography>
          <Typography variant="h3">Comes for both roles</Typography>
          <Typography variant="h4">Developers</Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </Typography>
          <Typography variant="h5">Designers</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </Typography>
          <Typography variant="h6">Modern technology stack</Typography>
          <Typography variant="body1">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
          <Typography variant="overline">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  </Box>
);
