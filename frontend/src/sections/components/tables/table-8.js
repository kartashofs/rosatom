import numeral from 'numeral';
import InfoCircleIcon from '@untitled-ui/icons-react/build/esm/InfoCircle';
import {
  Box,
  Card,
  CardHeader,
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

const countries = [
  {
    flag: '/assets/flags/flag-us.svg',
    name: 'United States',
    seo: 40,
    visits: 31200,
  },
  {
    flag: '/assets/flags/flag-uk.svg',
    name: 'United Kingdom',
    seo: 47,
    visits: 12700,
  },
  {
    flag: '/assets/flags/flag-ru.svg',
    name: 'Russia',
    seo: 65,
    visits: 10360,
  },
  {
    flag: '/assets/flags/flag-ca.svg',
    name: 'Canada',
    seo: 23,
    visits: 5749,
  },
  {
    flag: '/assets/flags/flag-de.svg',
    name: 'Germany',
    seo: 45,
    visits: 2932,
  },
];

export const Table8 = () => (
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
        title="Visits by Country"
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>
              <TableSortLabel active direction="asc">
                Visits
              </TableSortLabel>
            </TableCell>
            <TableCell>SEO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((country) => {
            const visits = numeral(country.visits).format('0,0');

            return (
              <TableRow
                key={country.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Stack alignItems="center" direction="row" spacing={2}>
                    <Box
                      sx={{
                        height: 36,
                        width: 36,
                        '& img': {
                          height: 36,
                          width: 36,
                        },
                      }}
                    >
                      <img alt={country.name} src={country.flag} />
                    </Box>
                    <Typography variant="subtitle2">{country.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>{visits}</TableCell>
                <TableCell>{country.seo}%</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  </Box>
);
