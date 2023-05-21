import { format, subDays, subHours } from 'date-fns';
import numeral from 'numeral';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import {
  Box,
  Card,
  Checkbox,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { Scrollbar } from '../../../components/scrollbar';
import { SeverityPill } from '../../../components/severity-pill';

const now = new Date();

const invoices = [
  {
    id: '5ecb868d0f437390ef3ac62c',
    currency: '$',
    customer: {
      email: 'contact@anahenisky.io',
      name: 'Ana Henisky',
    },
    issueDate: subHours(now, 1).getTime(),
    status: 'paid',
    totalAmount: 55.5,
  },
  {
    id: '5ecb868ada8deedee0638502',
    currency: '$',
    customer: {
      email: 'sales@matt-jason.com',
      name: 'Matt Jason',
    },
    issueDate: subDays(subHours(now, 5), 2).getTime(),
    status: 'pending',
    totalAmount: 19.76,
  },
  {
    id: '5ecb868700aba84d0f1c0e48',
    currency: '$',
    customer: {
      email: 'support@terrythomas.io',
      name: 'Terry Thomas',
    },
    issueDate: subDays(subHours(now, 4), 6).getTime(),
    status: 'canceled',
    totalAmount: 781.5,
  },
  {
    id: '5ecb8682038e1ddf4e868764',
    currency: '$',
    customer: {
      email: 'contact@triv-shopper.co.uk',
      name: 'Triv Shopper',
    },
    issueDate: subDays(subHours(now, 2), 15).getTime(),
    status: 'paid',
    totalAmount: 96.64,
  },
];

const statusOptions = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Paid',
    value: 'paid',
  },
  {
    label: 'Pending',
    value: 'pending',
  },
  {
    label: 'Canceled',
    value: 'canceled',
  },
];

const sortOptions = [
  {
    label: 'Newest first',
    value: 'createdAt|desc',
  },
  {
    label: 'Oldest first',
    value: 'createdAt|asc',
  },
];

const getStatusPill = (invoiceStatus) => {
  const map = {
    canceled: {
      color: 'error',
      text: 'Canceled',
    },
    paid: {
      color: 'success',
      text: 'Paid',
    },
    pending: {
      color: 'warning',
      text: 'Pending',
    },
  };

  const { text, color } = map[invoiceStatus];

  return <SeverityPill color={color}>{text}</SeverityPill>;
};

export const Table6 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Card>
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        gap={2}
        sx={{ p: 3 }}
      >
        <OutlinedInput
          fullWidth
          placeholder="Search invoices"
          startAdornment={
            <InputAdornment position="start">
              <SvgIcon>
                <SearchMdIcon />
              </SvgIcon>
            </InputAdornment>
          }
          sx={{
            maxWidth: '100%',
            width: 500,
          }}
        />
        <TextField
          fullWidth
          label="Sort By"
          name="sort"
          select
          SelectProps={{ native: true }}
          sx={{
            maxWidth: '100%',
            width: 240,
          }}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          fullWidth
          label="Status"
          name="status"
          select
          SelectProps={{ native: true }}
          sx={{
            maxWidth: '100%',
            width: 240,
          }}
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Stack>
      <Scrollbar>
        <Table sx={{ minWidth: 1200 }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => {
              const totalAmount = numeral(invoice.totalAmount).format(
                `${invoice.currency}0,0.00`,
              );
              const issueDate = format(invoice.issueDate, 'dd/MM/yyyy');
              const statusPill = getStatusPill(invoice.status);

              return (
                <TableRow hover key={invoice.id}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Link
                      color="text.primary"
                      underline="none"
                      variant="subtitle2"
                    >
                      {invoice.customer.name}
                    </Link>
                    <Typography color="text.secondary" variant="body2">
                      {invoice.customer.email}
                    </Typography>
                  </TableCell>
                  <TableCell>{statusPill}</TableCell>
                  <TableCell>{totalAmount}</TableCell>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{issueDate}</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <SvgIcon>
                        <Edit02Icon />
                      </SvgIcon>
                    </IconButton>
                    <IconButton>
                      <SvgIcon>
                        <ArrowRightIcon />
                      </SvgIcon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        component="div"
        count={invoices.length}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  </Box>
);
