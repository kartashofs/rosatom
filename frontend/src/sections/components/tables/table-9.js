import { format } from 'date-fns';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import {
  Box,
  Card,
  CardHeader,
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

const invoices = [
  {
    id: '5ece2cef3e562cbd61996259',
    currency: '$',
    description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
    issueDate: now.getTime(),
    number: 5345,
    paymentMethod: 'Credit Card',
    status: 'paid',
    value: 5.25,
  },
  {
    id: '5ece2cf461b9484866f2968c',
    currency: '$',
    description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
    issueDate: now.getTime(),
    number: 4596,
    paymentMethod: 'Credit Card',
    status: 'paid',
    value: 5.25,
  },
];

export const Table9 = () => (
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
        title="Invoices"
      />
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 1150 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => {
              const issueDate = format(invoice.issueDate, 'dd/MM/yyyy | HH:mm');

              return (
                <TableRow key={invoice.id}>
                  <TableCell>#{invoice.number}</TableCell>
                  <TableCell>
                    <Typography noWrap variant="body2">
                      {issueDate}
                    </Typography>
                  </TableCell>
                  <TableCell>{invoice.description}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell>
                    {invoice.currency}
                    {invoice.value}
                  </TableCell>
                  <TableCell>
                    <SeverityPill color="primary">
                      {invoice.status}
                    </SeverityPill>
                  </TableCell>
                  <TableCell align="right">
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
