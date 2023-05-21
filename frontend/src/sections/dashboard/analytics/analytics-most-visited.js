import PropTypes from 'prop-types';
import numeral from 'numeral';
import InfoCircleIcon from '@untitled-ui/icons-react/build/esm/InfoCircle';
import LinkExternal01Icon from '@untitled-ui/icons-react/build/esm/LinkExternal01';
import {
  Card,
  CardHeader,
  Link,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import { Scrollbar } from '../../../components/scrollbar';

export const AnalyticsMostVisited = (props) => {
  const { pages } = props;

  return (
    <Card>
      <CardHeader
        title="Most Visited Pages"
        action={
          <Tooltip title="Refresh rate is 24h">
            <SvgIcon color="action">
              <InfoCircleIcon />
            </SvgIcon>
          </Tooltip>
        }
      />
      <Scrollbar>
        <Table sx={{ minWidth: 600 }}>
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
                    <Link color="text.primary" href="#">
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <SvgIcon fontSize="small">
                          <LinkExternal01Icon />
                        </SvgIcon>
                        <Typography variant="body2">{page.url}</Typography>
                      </Stack>
                    </Link>
                  </TableCell>
                  <TableCell>{visitors}</TableCell>
                  <TableCell>{uniqueVisitors}</TableCell>
                  <TableCell>{page.bounceRate}%</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
};

AnalyticsMostVisited.propTypes = {
  pages: PropTypes.array.isRequired,
};
