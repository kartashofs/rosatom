import PropTypes from 'prop-types';
import CheckIcon from '@untitled-ui/icons-react/build/esm/Check';
import ClockIcon from '@untitled-ui/icons-react/build/esm/Clock';
import {
  Avatar,
  Box,
  LinearProgress,
  Stack,
  Step,
  StepLabel,
  Stepper,
  SvgIcon,
  Typography,
} from '@mui/material';

const StepIcon = (props) => {
  const { active, completed, icon } = props;

  const highlight = active || completed;

  return (
    <Avatar
      sx={{
        height: 24,
        width: 24,
        ...(highlight
          ? {
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
            }
          : {
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? 'neutral.700' : 'neutral.400',
              color: 'common.white',
            }),
      }}
      variant="circular"
    >
      {completed ? (
        <SvgIcon fontSize="small">
          <CheckIcon />
        </SvgIcon>
      ) : (
        icon
      )}
    </Avatar>
  );
};

export const CourseSummary = (props) => {
  const { course, activeChapter = 0 } = props;

  const chapters = course.chapters || [];

  return (
    <div>
      <Stack alignItems="center" direction="row" spacing={2}>
        <LinearProgress
          value={course.progress}
          sx={{
            flexGrow: 1,
            height: 8,
          }}
          variant="determinate"
        />
        <Typography color="text.secondary" variant="body2">
          {course.progress}%
        </Typography>
      </Stack>
      <Stack alignItems="center" direction="row" spacing={1} sx={{ mt: 1 }}>
        <SvgIcon color="action" fontSize="small">
          <ClockIcon />
        </SvgIcon>
        <Typography color="text.secondary" variant="caption">
          {course.duration}
        </Typography>
      </Stack>
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1">{course.title}</Typography>
        <Typography color="text.secondary" variant="body2">
          {course.description}
        </Typography>
      </Box>
      <Stepper
        activeStep={activeChapter}
        orientation="vertical"
        sx={{
          mt: 3,
          '& .MuiStepLabel-iconContainer': {
            pr: 3,
          },
          '& .MuiStepConnector-line': {
            borderLeftColor: 'divider',
            borderLeftWidth: 2,
          },
        }}
      >
        {chapters.map((chapter, index) => {
          const isCompleted = index < activeChapter;

          return (
            <Step key={chapter.title}>
              <StepLabel StepIconComponent={StepIcon}>
                <Typography
                  color={isCompleted ? 'primary.main' : 'text.primary'}
                  variant="subtitle2"
                >
                  {chapter.title}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {chapter.description}
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

CourseSummary.propTypes = {
  activeChapter: PropTypes.number,
  // @ts-ignore
  course: PropTypes.object.isRequired,
};
