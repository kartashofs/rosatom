import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const MarkdownWrapper = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.body1.fontFamily,
  '& > p': {
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    marginBottom: theme.spacing(2),
  },
}));

export const MailThreadMessage = (props) => {
  const { message = '' } = props;

  return (
    <MarkdownWrapper>
      <Markdown children={message} />
    </MarkdownWrapper>
  );
};

MailThreadMessage.propTypes = {
  message: PropTypes.string,
};
