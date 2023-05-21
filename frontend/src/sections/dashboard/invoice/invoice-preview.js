import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import {
  Box,
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { Logo } from '../../../components/logo';

export const InvoicePreview = (props) => {
  const { invoice, ...other } = props;

  const items = invoice.items || [];
  const dueDate = invoice.dueDate && format(invoice.dueDate, 'dd MMM yyyy');
  const issueDate =
    invoice.issueDate && format(invoice.issueDate, 'dd MMM yyyy');
  const subtotalAmount = numeral(invoice.subtotalAmount).format(
    `${invoice.currency}0,0.00`,
  );
  const taxAmount = numeral(invoice.taxAmount).format(
    `${invoice.currency}0,0.00`,
  );
  const totalAmount = numeral(invoice.totalAmount).format(
    `${invoice.currency}0,0.00`,
  );

  return (
    <Card {...other} sx={{ p: 6 }}>
      <Stack
        alignItems="flex-start"
        direction="row"
        justifyContent="space-between"
        spacing={3}
      >
        <div>
          <Box
            sx={{
              display: 'inline-flex',
              height: 24,
              width: 24,
            }}
          >
            <Logo />
          </Box>
          <Typography variant="subtitle2">www.devias.io</Typography>
        </div>
        <div>
          <Typography align="right" color="success.main" variant="h4">
            {invoice.status.toUpperCase()}
          </Typography>
          <Typography align="right" variant="subtitle2">
            {invoice.number}
          </Typography>
        </div>
      </Stack>
      <Box sx={{ mt: 4 }}>
        <Grid container justifyContent="space-between">
          <Grid xs={12} md={4}>
            <Typography variant="body2">
              Street King William, 123
              <br />
              Level 2, C, 442456
              <br />
              San Francisco, CA, USA
            </Typography>
          </Grid>
          <Grid xs={12} md={4}>
            <Typography variant="body2">
              Company No. 4675933
              <br />
              EU VAT No. 949 67545 45
              <br />
            </Typography>
          </Grid>
          <Grid xs={12} md={4}>
            <Typography align="right" variant="body2">
              accounts@atomanalytics.ru
              <br />
              (+40) 652 3456 23
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Grid container justifyContent="space-between">
          <Grid xs={12} md={4}>
            <Typography gutterBottom variant="subtitle2">
              Due date
            </Typography>
            <Typography variant="body2">{dueDate}</Typography>
          </Grid>
          <Grid xs={12} md={4}>
            <Typography gutterBottom variant="subtitle2">
              Date of issue
            </Typography>
            <Typography variant="body2">{issueDate}</Typography>
          </Grid>
          <Grid xs={12} md={4}>
            <Typography gutterBottom variant="subtitle2">
              Number
            </Typography>
            <Typography variant="body2">{invoice.number}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography gutterBottom variant="subtitle2">
          Billed to
        </Typography>
        <Typography variant="body2">
          {invoice.customer.name}
          <br />
          {invoice.customer.company}
          <br />
          {invoice.customer.taxId}
          <br />
          {invoice.customer.address}
        </Typography>
      </Box>
      <Table sx={{ mt: 4 }}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => {
            const unitAmount = numeral(item.unitAmount).format(
              `${item.currency}0,0.00`,
            );
            const totalAmount = numeral(item.totalAmount).format(
              `${item.currency}0,0.00`,
            );

            return (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{unitAmount}</TableCell>
                <TableCell align="right">{totalAmount}</TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell colSpan={3} sx={{ borderBottom: 'none' }} />
            <TableCell sx={{ borderBottom: 'none' }}>
              <Typography variant="subtitle1">Subtotal</Typography>
            </TableCell>
            <TableCell align="right" sx={{ borderBottom: 'none' }}>
              <Typography variant="subtitle2">{subtotalAmount}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} sx={{ borderBottom: 'none' }} />
            <TableCell sx={{ borderBottom: 'none' }}>
              <Typography variant="subtitle1">Taxes</Typography>
            </TableCell>
            <TableCell align="right" sx={{ borderBottom: 'none' }}>
              <Typography variant="subtitle2">{taxAmount}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} sx={{ borderBottom: 'none' }} />
            <TableCell sx={{ borderBottom: 'none' }}>
              <Typography variant="subtitle1">Total</Typography>
            </TableCell>
            <TableCell align="right" sx={{ borderBottom: 'none' }}>
              <Typography variant="subtitle2">{totalAmount}</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom variant="h6">
          Notes
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Please make sure you have the right bank registration number as I had
          issues before and make sure you guys cover transfer expenses.
        </Typography>
      </Box>
    </Card>
  );
};

InvoicePreview.propTypes = {
  // @ts-ignore
  invoice: PropTypes.object.isRequired,
};
