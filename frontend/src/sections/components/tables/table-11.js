import numeral from 'numeral';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { Scrollbar } from '../../../components/scrollbar';

const orderItems = [
  {
    id: '5ecb8abbdd6dfb1f9d6bf98b',
    billingCycle: 'monthly',
    currency: '$',
    name: 'Project Points',
    quantity: 25,
    unitAmount: 50.25,
  },
  {
    id: '5ecb8ac10f116d04bed990eb',
    billingCycle: 'monthly',
    currency: '$',
    name: 'Freelancer Subscription',
    quantity: 1,
    unitAmount: 5.0,
  },
];

export const Table11 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Card>
      <CardHeader title="Order items" />
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Billing Cycle</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderItems.map((item) => {
              const unitAmount = numeral(item.unitAmount).format(
                `${item.currency}0,0.00`,
              );
              const description = `${item.quantity} x ${item.name}`;

              return (
                <TableRow key={item.id}>
                  <TableCell>
                    <Typography variant="subtitle2">{description}</Typography>
                  </TableCell>
                  <TableCell>{item.billingCycle}</TableCell>
                  <TableCell>{unitAmount}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        component="div"
        count={orderItems.length}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  </Box>
);
