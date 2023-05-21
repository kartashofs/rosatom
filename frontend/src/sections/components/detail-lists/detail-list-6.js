import Markdown from 'react-markdown';
import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const MarkdownWrapper = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  '& p': {
    margin: 0,
  },
  '& p+p': {
    marginTop: theme.spacing(2),
  },
}));

const description = `
Design files are attached in the files tab.

Develop the web app screens for our product called "PDFace". Please look at the wireframes, system activity workflow and read the section above to understand what we're trying to archive.

There's not many screens we need designed, but there will be modals and various other system triggered events that will need to be considered.

The project has been created in Sketch so let me know if there are any problems opening this project and I'll try to convert into a usable file.
`;

export const DetailList6 = () => {
  const tags = ['React JS'];

  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
        p: 3,
      }}
    >
      <Card>
        <CardContent>
          <Stack spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                Project Name
              </Typography>
              <Typography variant="subtitle2">
                Develop a PDF Export App
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                Tags
              </Typography>
              <div>
                {tags.map((tag) => (
                  <Chip key={tag} label={tag} variant="outlined" />
                ))}
              </div>
            </Stack>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                Description
              </Typography>
              <MarkdownWrapper>
                <Markdown children={description} />
              </MarkdownWrapper>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
