import numeral from 'numeral';
import InfoCircleIcon from '@untitled-ui/icons-react/build/esm/InfoCircle';
import {
  Box,
  Card,
  CardHeader,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';

const pages = [
  {
    bounceRate: 16,
    uniqueVisits: 8584,
    url: '/',
    visitors: 95847,
  },
  {
    bounceRate: 5,
    uniqueVisits: 648,
    url: '/auth/login',
    visitors: 7500,
  },
  {
    bounceRate: 2,
    uniqueVisits: 568,
    url: '/dashboard',
    visitors: 85406,
  },
  {
    bounceRate: 12,
    uniqueVisits: 12322,
    url: '/blog/top-5-react-frameworks',
    visitors: 75050,
  },
  {
    bounceRate: 10,
    uniqueVisits: 11645,
    url: '/blog/understand-programming-principles',
    visitors: 68003,
  },
  {
    bounceRate: 8,
    uniqueVisits: 10259,
    url: '/blog/design-patterns',
    visitors: 49510,
  },
];

export const Table7 = () => (
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
          <Tooltip title="Refresh rate is 24h">
            <SvgIcon>
              <InfoCircleIcon />
            </SvgIcon>
          </Tooltip>
        }
        title="Most Visited Pages"
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Page Name</TableCell>
            <TableCell>Visitors</TableCell>
            <TableCell>Unique page visits</TableCell>
            <TableCell>Bounce rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pages.map((page) => {
            const visitors = numeral(page.visitors).format('0,0');
            const uniqueVisitors = numeral(page.uniqueVisits).format('0,0');

            return (
              <TableRow
                key={page.url}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Typography variant="body2">{page.url}</Typography>
                </TableCell>
                <TableCell>{visitors}</TableCell>
                <TableCell>{uniqueVisitors}</TableCell>
                <TableCell>{page.bounceRate}%</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  </Box>
);
