import { format, subDays, subHours, subMinutes, subSeconds } from 'date-fns';
import numeral from 'numeral';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
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
import { SeverityPill } from '../../../components/severity-pill';

const now = new Date();

const orders = [
  {
    id: '5eff2548979e396cb4b000ba',
    createdAt: subMinutes(subSeconds(now, 10), 7).getTime(),
    customer: {
      email: 'ekaterina@atomanalytics.ru',
      name: 'Ekaterina Tankova',
    },
    currency: '$',
    items: 7,
    number: 'DEV-1042',
    status: 'pending',
    totalAmount: 524.0,
  },
  {
    id: '5eff254e46b753a166e7d7af',
    createdAt: subHours(subMinutes(subSeconds(now, 50), 12), 2).getTime(),
    customer: {
      email: 'carson.darrin@atomanalytics.ru',
      name: 'Carson Darrin',
    },
    currency: '$',
    items: 8,
    number: 'DEV-1041',
    status: 'complete',
    totalAmount: 693.0,
  },
  {
    id: '5eff2553e1c551e2e28a9205',
    createdAt: subHours(subMinutes(subSeconds(now, 12), 39), 5).getTime(),
    customer: {
      email: 'fran.perez@atomanalytics.ru',
      name: 'Fran Perez',
    },
    currency: '$',
    items: 4,
    number: 'DEV-1040',
    status: 'rejected',
    totalAmount: 215.0,
  },
  {
    id: '5eff25590f3e28f013c39a0e',
    createdAt: subHours(subMinutes(subSeconds(now, 21), 46), 5).getTime(),
    customer: {
      email: 'anje.keiser@atomanalytics.ru',
      name: 'Jie Yan Song',
    },
    currency: '$',
    items: 1,
    number: 'DEV-1039',
    status: 'pending',
    totalAmount: 25.0,
  },
  {
    id: '5eff255f57499089243805d8',
    createdAt: subHours(subMinutes(subSeconds(now, 54), 19), 8).getTime(),
    customer: {
      name: 'Clarke Gillebert',
      email: 'clarke.gillebert@atomanalytics.ru',
    },
    currency: '$',
    items: 5,
    number: 'DEV-1038',
    status: 'complete',
    totalAmount: 535.0,
  },
  {
    id: '5eff25658d416fc5adb96a3a',
    createdAt: subDays(subMinutes(subSeconds(now, 12), 45), 1).getTime(),
    customer: {
      email: 'nasimiyu.danai@atomanalytics.ru',
      name: 'Nasimiyu Danai',
    },
    currency: '$',
    items: 2,
    number: 'DEV-1037',
    status: 'complete',
    totalAmount: 56.0,
  },
];

const labelColors = {
  complete: 'success',
  pending: 'warning',
  rejected: 'error',
};

export const Table1 = () => (
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
        title="Latest Orders"
      />
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    Number
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Items</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              const totalAmount = numeral(order.totalAmount).format(
                `${order.currency}0,0.00`,
              );
              const statusColor = labelColors[order.status];
              const createdAt = format(
                order.createdAt,
                'dd MMM, yyyy HH:mm:ss',
              );

              return (
                <TableRow hover key={order.id}>
                  <TableCell>
                    <Typography variant="subtitle2">{order.number}</Typography>
                  </TableCell>
                  <TableCell>{order.customer.name}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>{totalAmount}</TableCell>
                  <TableCell>
                    <SeverityPill color={statusColor}>
                      {order.status}
                    </SeverityPill>
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
