import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  useMediaQuery,
} from '@mui/material';
import { PropertyList } from '../../../components/property-list';
import { PropertyListItem } from '../../../components/property-list-item';

export const CustomerPayment = (props) => {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const align = mdUp ? 'horizontal' : 'vertical';

  return (
    <Card {...props}>
      <CardHeader title="Payment" />
      <PropertyList>
        <PropertyListItem
          align={align}
          divider
          label="Credit Card"
          value="**** **** **** **** 4142"
        />
        <PropertyListItem
          align={align}
          divider
          label="Paid"
          value="2 ($50.00)"
        />
        <PropertyListItem
          align={align}
          divider
          label="Draft"
          value="1 ($5.00)"
        />
        <PropertyListItem
          align={align}
          divider
          label="State/Region"
          value="2 ($50.00)"
        />
        <PropertyListItem
          align={align}
          divider
          label="Unpaid/Due"
          value="1 ($12.00)"
        />
        <PropertyListItem
          align={align}
          divider
          label="Refunded"
          value="0 ($0.00)"
        />
        <PropertyListItem
          align={align}
          label="Gross Income"
          value="$1,200.00"
        />
      </PropertyList>
      <Divider />
      <CardActions sx={{ flexWrap: 'wrap' }}>
        <Button size="small" variant="outlined">
          Create Invoice
        </Button>
        <Button size="small">Resend Due Invoices</Button>
      </CardActions>
    </Card>
  );
};
