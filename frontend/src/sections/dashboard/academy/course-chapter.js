import PropTypes from 'prop-types';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  SvgIcon,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { CourseLesson } from './course-lesson';

export const CourseChapter = (props) => {
  const { chapter } = props;

  return (
    <Box
      sx={{
        position: 'relative',
        pb: 6,
      }}
    >
      <Card>
        <CardHeader title={chapter.title} subheader={chapter.description} />
        <Tabs value="lesson" sx={{ px: 3 }}>
          <Tab label="Lesson" value="lesson" />
          <Tab label="Resources" value="resources" />
        </Tabs>
        <Divider />
        <CardContent>
          <CourseLesson content={chapter.lesson || ''} />
        </CardContent>
      </Card>
      <Box
        sx={{
          bottom: 20,
          display: 'flex',
          justifyContent: 'center',
          left: 0,
          position: 'absolute',
          right: 0,
          zIndex: 1,
        }}
      >
        <Card elevation={16}>
          <Stack alignItems="center" direction="row" spacing={3} sx={{ p: 1 }}>
            <Button
              color="inherit"
              size="small"
              startIcon={
                <SvgIcon>
                  <ArrowLeftIcon />
                </SvgIcon>
              }
            >
              Prev
            </Button>
            <Typography color="text.secondary" variant="subtitle2">
              1/3
            </Typography>
            <Button
              color="inherit"
              size="small"
              startIcon={
                <SvgIcon>
                  <ArrowRightIcon />
                </SvgIcon>
              }
            >
              Next
            </Button>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

CourseChapter.propTypes = {
  // @ts-ignore
  chapter: PropTypes.object.isRequired,
};
