import CurrencyDollarIcon from '@untitled-ui/icons-react/build/esm/CurrencyDollar';
import ReceiptIcon from '@untitled-ui/icons-react/build/esm/Receipt';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

export const DetailList3 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Card>
      <CardHeader title="Invoices/CheckoutBilling" />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">Credit Card</Typography>
            </TableCell>
            <TableCell>
              <Typography color="text.secondary" variant="body2">
                **** **** **** **** 4142
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">Paid</Typography>
            </TableCell>
            <TableCell>
              <Typography color="text.secondary" variant="body2">
                2 ($50.00)
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">Draft</Typography>
            </TableCell>
            <TableCell>
              <Typography color="text.secondary" variant="body2">
                1 ($5.00)
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">Unpaid/Due</Typography>
            </TableCell>
            <TableCell>
              <Typography color="text.secondary" variant="body2">
                1 ($12.00)
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">Refunded</Typography>
            </TableCell>
            <TableCell>
              <Typography color="text.secondary" variant="body2">
                0 ($0.00)
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">Gross Income</Typography>
            </TableCell>
            <TableCell>
              <Typography color="text.secondary" variant="body2">
                $1,200.00
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Stack alignItems="flex-start" spacing={1} sx={{ p: 1 }}>
        <Button
          color="inherit"
          startIcon={
            <SvgIcon>
              <CurrencyDollarIcon />
            </SvgIcon>
          }
        >
          Create Invoice
        </Button>
        <Button
          color="inherit"
          startIcon={
            <SvgIcon>
              <ReceiptIcon />
            </SvgIcon>
          }
        >
          Resend Due Invoices
        </Button>
      </Stack>
    </Card>
  </Box>
);
