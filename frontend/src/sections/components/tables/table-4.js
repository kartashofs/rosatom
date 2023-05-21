import numeral from 'numeral';
import { format, subMinutes, subSeconds } from 'date-fns';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  IconButton,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { Scrollbar } from '../../../components/scrollbar';
import { SeverityPill } from '../../../components/severity-pill';

const now = new Date();

const orders = [
  {
    id: '5ecb8a6d9f53bfae09e16115',
    createdAt: subMinutes(subSeconds(now, 23), 32).getTime(),
    currency: '$',
    customer: {
      email: 'carson.darrin@atomanalytics.ru',
      name: 'Carson Darrin',
    },
    number: 'DEV-102',
    paymentMethod: 'CreditCard',
    status: 'pending',
    totalAmount: 500.0,
  },
  {
    id: '5ecb8a738aa6f3e577c2b3ec',
    createdAt: subMinutes(subSeconds(now, 51), 36).getTime(),
    currency: '$',
    customer: {
      email: 'fran.perez@atomanalytics.ru',
      name: 'Fran Perez',
    },
    number: 'DEV-101',
    paymentMethod: 'PayPal',
    status: 'complete',
    totalAmount: 500.0,
  },
  {
    id: '5ecb8a795e53f134013eba3b',
    createdAt: subMinutes(subSeconds(now, 55), 38).getTime(),
    currency: '$',
    customer: {
      email: 'jie.yan.song@atomanalytics.ru',
      name: 'Jie Yan Song',
    },
    number: 'DEV-100',
    paymentMethod: 'CreditCard',
    status: 'pending',
    totalAmount: 500.0,
  },
  {
    id: '5ecb8a7f738cc572a9ce0277',
    createdAt: subMinutes(subSeconds(now, 3), 40).getTime(),
    currency: '$',
    customer: {
      email: 'clarke.gillebert@atomanalytics.ru',
      name: 'Clarke Gillebert',
    },
    number: 'DEV-99',
    paymentMethod: 'PayPal',
    status: 'complete',
    totalAmount: 500.0,
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    createdAt: subMinutes(subSeconds(now, 32), 45).getTime(),
    currency: '$',
    customer: {
      email: 'miron.vitold@atomanalytics.ru',
      name: 'Miron Vitold',
    },
    number: 'DEV-98',
    paymentMethod: 'PayPal',
    status: 'complete',
    totalAmount: 500.0,
  },
];

const getStatusPill = (orderStatus) => {
  const map = {
    canceled: {
      color: 'error',
      text: 'Canceled',
    },
    complete: {
      color: 'success',
      text: 'complete',
    },
    pending: {
      color: 'warning',
      text: 'Pending',
    },
    rejected: {
      color: 'error',
      text: 'Rejected',
    },
  };

  const { text, color } = map[orderStatus];

  return <SeverityPill color={color}>{text}</SeverityPill>;
};

export const Table4 = () => (
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
        title="Orders"
      />
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 1150 }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              const createdAt = format(order.createdAt, 'dd MMM yyyy | HH:mm');
              const totalAmount = numeral(order.totalAmount).format(
                `${order.currency}0,0.00`,
              );
              const statusPill = getStatusPill(order.status);

              return (
                <TableRow hover key={order.id}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">{order.number}</Typography>
                    <Typography color="text.secondary" variant="body2">
                      {createdAt}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {order.customer.name}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      {order.customer.email}
                    </Typography>
                  </TableCell>
                  <TableCell>{order.paymentMethod}</TableCell>
                  <TableCell>{totalAmount}</TableCell>
                  <TableCell>{statusPill}</TableCell>
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
        count={orders.length}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  </Box>
);
