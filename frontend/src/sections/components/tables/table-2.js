import { format, subDays, subHours, subMinutes, subSeconds } from 'date-fns';
import numeral from 'numeral';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography,
} from '@mui/material';
import { Scrollbar } from '../../../components/scrollbar';

const now = new Date();

const projects = [
  {
    id: '5eff24e675e7b3cba23e4be7',
    author: {
      avatar: '/assets/avatars/avatar-jie-yan-song.png',
      name: 'Jie Yan Song',
    },
    budget: 12500,
    createdAt: subHours(subMinutes(subSeconds(now, 10), 34), 2).getTime(),
    currency: '$',
    technologies: ['angular'],
    title: 'Mella Full Screen Slider',
  },
  {
    id: '5eff24e98e2c9107e95cb827',
    author: {
      avatar: '/assets/avatars/avatar-omar-darboe.png',
      name: 'Omar Darobe',
    },
    budget: 15750,
    createdAt: subHours(subMinutes(subSeconds(now, 25), 56), 10).getTime(),
    currency: '$',
    technologies: ['sketch', 'html-css'],
    title: 'Overview Design',
  },
  {
    id: '5eff24f0d97353e3576d3c26',
    author: {
      avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
      name: 'Siegbert Gottfried',
    },
    budget: 15750,
    createdAt: subDays(subMinutes(subSeconds(now, 50), 30), 1).getTime(),
    currency: '$',
    technologies: ['react-js'],
    title: 'Ten80 Web Design',
  },
  {
    id: '5eff24f737bc6b191dd9bf58',
    author: {
      avatar: '/assets/avatars/avatar-iulia-albu.png',
      name: 'Iulia Albu',
    },
    budget: 12500,
    createdAt: subDays(subMinutes(subSeconds(now, 30), 4), 1).getTime(),
    currency: '$',
    technologies: ['vue-js'],
    title: 'Neura e-commerce UI Kit',
  },
  {
    id: '5eff24fb29fc5e37bdab3b2d',
    author: {
      avatar: '/assets/avatars/avatar-carson-darrin.png',
      name: 'Carson Darrin',
    },
    budget: 15750,
    createdAt: subDays(subMinutes(subSeconds(now, 6), 11), 1).getTime(),
    currency: '$',
    technologies: ['angular', 'figma'],
    title: 'Administrator Overview',
  },
];

const technologyMap = {
  'html-css': '/assets/logos/logo-html.svg',
  'react-js': '/assets/logos/logo-react-js.svg',
  'vue-js': '/assets/logos/logo-vue-js.svg',
  angular: '/assets/logos/logo-angular.svg',
  figma: '/assets/logos/logo-figma.svg',
  sketch: '/assets/logos/logo-sketch.svg',
};

export const Table2 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Card>
      <CardHeader
        action={
          <IconButton>
            <SvgIcon>
              <DotsHorizontalIcon />
            </SvgIcon>
          </IconButton>
        }
        title="Latest Projects"
      />
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Budget</TableCell>
              <TableCell>Technology</TableCell>
              <TableCell align="right" sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    Created
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => {
              const budget = numeral(project.budget).format(
                `${project.currency}0,0.00`,
              );
              const createdAt = format(project.createdAt, 'dd MMM, yyyy');

              return (
                <TableRow hover key={project.id}>
                  <TableCell>{project.title}</TableCell>
                  <TableCell>
                    <Stack alignItems="center" direction="row" spacing={1}>
                      <Avatar src={project.author.avatar} />
                      <Typography variant="subtitle2">
                        {project.author.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{budget}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      {project.technologies.map((technology) => (
                        <Box
                          component="span"
                          key={technology}
                          sx={{
                            '& img': {
                              height: 30,
                            },
                          }}
                        >
                          <img
                            alt="Tech"
                            key={technology}
                            src={technologyMap[technology]}
                          />
                        </Box>
                      ))}
                    </Stack>
                  </TableCell>
                  <TableCell align="right">{createdAt}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <Button
          color="inherit"
          endIcon={
            <SvgIcon>
              <ChevronRightIcon />
            </SvgIcon>
          }
          size="small"
        >
          See All
        </Button>
      </Box>
    </Card>
  </Box>
);
