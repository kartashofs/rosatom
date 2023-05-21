import { useState } from 'react';
import numeral from 'numeral';
import { format } from 'date-fns';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { PlanIcon } from '../../../components/plan-icon';
import { PropertyList } from '../../../components/property-list';
import { PropertyListItem } from '../../../components/property-list-item';

const plans = [
  {
    id: 'startup',
    icon: <PlanIcon variant="startup" />,
    name: 'Startup',
    price: 0,
  },
  {
    id: 'standard',
    icon: <PlanIcon variant="standard" />,
    name: 'Standard',
    price: 4.99,
  },
  {
    id: 'business',
    icon: <PlanIcon variant="business" />,
    name: 'Business',
    price: 29.99,
  },
];

export const AccountBillingSettings = (props) => {
  const { plan: currentPlan, invoices } = props;
  const [selectedPlan, setSelectedPlan] = useState(currentPlan);

  return (
    <Stack spacing={4} {...props}>
      <Card>
        <CardHeader
          title="Change Plan"
          subheader="You can upgrade and downgrade whenever you want"
        />
        <CardContent sx={{ pt: 0 }}>
          <div>
            <Grid container spacing={3}>
              {plans.map((plan) => {
                const isSelected = plan.id === selectedPlan;
                const isCurrent = plan.id === currentPlan;
                const price = numeral(plan.price).format('$0,0.00');

                return (
                  <Grid key={plan.id} xs={12} sm={4}>
                    <Card
                      onClick={() => setSelectedPlan(plan.id)}
                      sx={{
                        cursor: 'pointer',
                        ...(isSelected && {
                          borderColor: 'primary.main',
                          borderWidth: 2,
                          m: '-1px',
                        }),
                      }}
                      variant="outlined"
                    >
                      <CardContent>
                        <Box
                          sx={{
                            height: 52,
                            width: 52,
                            '& img': {
                              height: 'auto',
                              width: '100%',
                            },
                          }}
                        >
                          {plan.icon}
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            mb: 1,
                            mt: 1,
                          }}
                        >
                          <Typography variant="h5">{price}</Typography>
                          <Typography
                            color="text.secondary"
                            sx={{
                              mt: 'auto',
                              ml: '4px',
                            }}
                            variant="body2"
                          >
                            /mo
                          </Typography>
                        </Box>
                        <Stack
                          alignItems="center"
                          direction="row"
                          justifyContent="space-between"
                          spacing={3}
                        >
                          <Typography variant="overline">
                            {plan.name}
                          </Typography>
                          {isCurrent && (
                            <Typography color="primary.main" variant="caption">
                              Using now
                            </Typography>
                          )}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
          <Divider sx={{ my: 3 }} />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6">Billing details</Typography>
            <Button
              color="inherit"
              startIcon={
                <SvgIcon>
                  <Edit02Icon />
                </SvgIcon>
              }
            >
              Edit
            </Button>
          </Box>
          <Box
            sx={{
              border: 1,
              borderColor: 'divider',
              borderRadius: 1,
              mt: 3,
            }}
          >
            <PropertyList>
              <PropertyListItem
                align="horizontal"
                divider
                label="Billing name"
                value="John Doe"
              />
              <PropertyListItem
                align="horizontal"
                divider
                label="Card number"
                value="**** 1111"
              />
              <PropertyListItem
                align="horizontal"
                divider
                label="Country"
                value="Germany"
              />
              <PropertyListItem
                align="horizontal"
                label="Zip / Postal code"
                value="667123"
              />
            </PropertyList>
          </Box>
          <Typography color="text.secondary" variant="body2" sx={{ mt: 3 }}>
            We cannot refund once you purchased a subscription, but you can
            always
            <Link href="#" sx={{ ml: '4px' }} underline="none" variant="body2">
              Cancel
            </Link>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mt: 3,
            }}
          >
            <Button variant="contained">Upgrade Plan</Button>
          </Box>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          title="Invoice history"
          subheader="You can view and download all your previous invoices here. If you’ve just made a payment, it may take a few hours for it to appear in the table below."
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Total (incl. tax)</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => {
              const createdAt = format(invoice.createdAt, 'dd MMM yyyy');
              const amount = numeral(invoice.amount).format('$0,0.00');

              return (
                <TableRow key={invoice.id}>
                  <TableCell>{createdAt}</TableCell>
                  <TableCell>{amount}</TableCell>
                  <TableCell align="right">
                    <Link color="inherit" underline="always" href="#">
                      View Invoice
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </Stack>
  );
};
