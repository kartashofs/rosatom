import { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import InfoCircleIcon from '@untitled-ui/icons-react/build/esm/InfoCircle';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
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
import { applySort } from '../../../utils/apply-sort';

const flagMap = {
  ca: '/assets/flags/flag-ca.svg',
  de: '/assets/flags/flag-de.svg',
  es: '/assets/flags/flag-es.svg',
  ru: '/assets/flags/flag-ru.svg',
  uk: '/assets/flags/flag-uk.svg',
  us: '/assets/flags/flag-us.svg',
};

export const AnalyticsVisitsByCountry = (props) => {
  const { visits } = props;
  const [sort, setSort] = useState('desc');

  const sortedVisits = useMemo(() => {
    return applySort(visits, 'value', sort);
  }, [visits, sort]);

  const handleSort = useCallback(() => {
    setSort((prevState) => {
      if (prevState === 'asc') {
        return 'desc';
      }

      return 'asc';
    });
  }, []);

  return (
    <Card>
      <CardHeader
        title="Visits by Country"
        action={
          <Tooltip title="Refresh rate is 24h">
            <SvgIcon color="action">
              <InfoCircleIcon />
            </SvgIcon>
          </Tooltip>
        }
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell sortDirection={sort}>
              <TableSortLabel active direction={sort} onClick={handleSort}>
                Value
              </TableSortLabel>
            </TableCell>
            <TableCell>SEO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedVisits.map((visit) => {
            const visits = numeral(visit.value).format('0,0');
            const flag = flagMap[visit.id];

            return (
              <TableRow
                key={visit.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <Box
                      sx={{
                        height: 16,
                        width: 16,
                        '& img': {
                          height: 16,
                          width: 16,
                        },
                      }}
                    >
                      <img alt={visit.name} src={flag} />
                    </Box>
                    <Typography sx={{ ml: 1 }} variant="subtitle2">
                      {visit.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{visits}</TableCell>
                <TableCell>{visit.seoPercentage}%</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Divider />
      <CardActions>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
        >
          See more
        </Button>
      </CardActions>
    </Card>
  );
};

AnalyticsVisitsByCountry.propTypes = {
  visits: PropTypes.array.isRequired,
};
