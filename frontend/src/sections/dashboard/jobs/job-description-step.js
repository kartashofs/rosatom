import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Button, Stack, SvgIcon, Typography } from '@mui/material';
import { QuillEditor } from '../../../components/quill-editor';

export const JobDescriptionStep = (props) => {
  const { onBack, onNext, ...other } = props;
  const [content, setContent] = useState('');

  const handleContentChange = useCallback((value) => {
    setContent(value);
  }, []);

  return (
    <Stack spacing={3} {...other}>
      <div>
        <Typography variant="h6">
          How would you describe the job post?
        </Typography>
      </div>
      <QuillEditor
        onChange={handleContentChange}
        placeholder="Write something"
        sx={{ height: 400 }}
        value={content}
      />
      <Stack alignItems="center" direction="row" spacing={2}>
        <Button
          endIcon={
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          }
          onClick={onNext}
          variant="contained"
        >
          Create Job
        </Button>
        <Button color="inherit" onClick={onBack}>
          Back
        </Button>
      </Stack>
    </Stack>
  );
};

JobDescriptionStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func,
};
