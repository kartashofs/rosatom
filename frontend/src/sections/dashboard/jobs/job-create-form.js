import { useCallback, useMemo, useState } from 'react';
import CheckIcon from '@untitled-ui/icons-react/build/esm/Check';
import {
  Avatar,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  SvgIcon,
  Typography,
} from '@mui/material';
import { JobCategoryStep } from './job-category-step';
import { JobDescriptionStep } from './job-description-step';
import { JobDetailsStep } from './job-details-step';
import { JobPreview } from './job-preview';

const StepIcon = (props) => {
  const { active, completed, icon } = props;

  const highlight = active || completed;

  return (
    <Avatar
      sx={{
        height: 40,
        width: 40,
        ...(highlight && {
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
        }),
      }}
      variant="rounded"
    >
      {completed ? (
        <SvgIcon>
          <CheckIcon />
        </SvgIcon>
      ) : (
        icon
      )}
    </Avatar>
  );
};

export const JobCreateForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [complete, setComplete] = useState(false);

  const handleNext = useCallback(() => {
    setActiveStep((prevState) => prevState + 1);
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep((prevState) => prevState - 1);
  }, []);

  const handleComplete = useCallback(() => {
    setComplete(true);
  }, []);

  const steps = useMemo(() => {
    return [
      {
        label: 'Category',
        content: <JobCategoryStep onBack={handleBack} onNext={handleNext} />,
      },
      {
        label: 'Job Details',
        content: <JobDetailsStep onBack={handleBack} onNext={handleNext} />,
      },
      {
        label: 'Description',
        content: (
          <JobDescriptionStep onBack={handleBack} onNext={handleComplete} />
        ),
      },
    ];
  }, [handleBack, handleNext, handleComplete]);

  if (complete) {
    return <JobPreview />;
  }

  return (
    <Stepper
      activeStep={activeStep}
      orientation="vertical"
      sx={{
        '& .MuiStepConnector-line': {
          borderLeftColor: 'divider',
          borderLeftWidth: 2,
          ml: 1,
        },
      }}
    >
      {steps.map((step, index) => {
        const isCurrentStep = activeStep === index;

        return (
          <Step key={step.label}>
            <StepLabel StepIconComponent={StepIcon}>
              <Typography sx={{ ml: 2 }} variant="overline">
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent
              sx={{
                borderLeftColor: 'divider',
                borderLeftWidth: 2,
                ml: '20px',
                ...(isCurrentStep && {
                  py: 4,
                }),
              }}
            >
              {step.content}
            </StepContent>
          </Step>
        );
      })}
    </Stepper>
  );
};
