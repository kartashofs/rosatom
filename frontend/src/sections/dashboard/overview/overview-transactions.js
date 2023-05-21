import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tabs,
  Typography,
} from '@mui/material';
import { Scrollbar } from '../../../components/scrollbar';
import { SeverityPill } from '../../../components/severity-pill';

const statusMap = {
  confirmed: 'success',
  on_hold: 'warning',
  failed: 'error',
};

export const OverviewTransactions = (props) => {
  const { transactions } = props;

  return (
    <Card>
      <CardHeader
        title="Latest Transactions"
        subheader="Based on the selected period"
        sx={{ pb: 0 }}
      />
      <Tabs value="all" sx={{ px: 3 }}>
        <Tab label="All" value="all" />
        <Tab label="Confirmed" value="confirmed" />
        <Tab label="Pending" value="pending" />
      </Tabs>
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 600 }}>
          <TableBody>
            {transactions.map((transaction) => {
              const createdAtMonth = format(
                transaction.createdAt,
                'LLL',
              ).toUpperCase();
              const createdAtDay = format(transaction.createdAt, 'd');
              const statusColor = statusMap[transaction.status];
              const type =
                transaction.type === 'receive'
                  ? 'Payment received'
                  : 'Payment sent';
              const amount =
                (transaction.type === 'receive' ? '+' : '-') +
                ' ' +
                numeral(transaction.amount).format('$0,0.00');
              const amountColor =
                transaction.type === 'receive' ? 'success.main' : 'error.main';

              return (
                <TableRow
                  key={transaction.id}
                  hover
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell width={100}>
                    <Box
                      sx={{
                        p: 1,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'neutral.800'
                            : 'neutral.100',
                        borderRadius: 2,
                        maxWidth: 'fit-content',
                      }}
                    >
                      <Typography
                        align="center"
                        color="text.primary"
                        variant="caption"
                      >
                        {createdAtMonth}
                      </Typography>
                      <Typography
                        align="center"
                        color="text.primary"
                        variant="h6"
                      >
                        {createdAtDay}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Typography variant="subtitle2">
                        {transaction.sender}
                      </Typography>
                      <Typography color="text.secondary" variant="body2">
                        {type}
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <SeverityPill color={statusColor}>
                      {transaction.status}
                    </SeverityPill>
                  </TableCell>
                  <TableCell width={180}>
                    <Typography color={amountColor} variant="subtitle2">
                      {amount}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
};

OverviewTransactions.propTypes = {
  transactions: PropTypes.array.isRequired,
};
