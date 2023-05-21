import PropTypes from 'prop-types';
import numeral from 'numeral';
import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';

const calculateAmounts = (products) => {
  const shippingTax = 12;
  const subtotal = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  const total = shippingTax + subtotal;

  return {
    shippingTax,
    subtotal,
    total,
  };
};

export const CheckoutSummary = (props) => {
  const { onQuantityChange, products = [], ...other } = props;
  const { shippingTax, subtotal, total } = calculateAmounts(products);

  const formattedShippingTax = numeral(shippingTax).format('$00.00');
  const formattedSubtotal = numeral(subtotal).format('$00.00');
  const formattedTotal = numeral(total).format('$00.00');

  return (
    <Card variant="outlined" sx={{ p: 3 }} {...other}>
      <Typography variant="h6">Order Summary</Typography>
      <List sx={{ mt: 2 }}>
        {products.map((product) => {
          const price = numeral(product.price).format('$00.00');

          return (
            <ListItem disableGutters key={product.id}>
              <ListItemAvatar sx={{ pr: 2 }}>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    height: 100,
                    justifyContent: 'center',
                    overflow: 'hidden',
                    width: 100,
                    '& img': {
                      width: '100%',
                      height: 'auto',
                    },
                  }}
                >
                  <img alt={product.name} src={product.image} />
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontWeight: 'fontWeightBold' }}
                    variant="subtitle2"
                  >
                    {product.name}
                  </Typography>
                }
                secondary={
                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1 }}
                    variant="body1"
                  >
                    {price}
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <FormControl size="small" variant="outlined">
                  <Select
                    value={product.quantity}
                    onChange={(event) => onQuantityChange?.(event, product.id)}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      <OutlinedInput
        fullWidth
        placeholder="Discount Code"
        size="small"
        sx={{ mt: 2 }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mt: 2,
        }}
      >
        <Button type="button">Apply Coupon</Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 2,
        }}
      >
        <Typography variant="subtitle2">Subtotal</Typography>
        <Typography variant="subtitle2">{formattedSubtotal}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 2,
        }}
      >
        <Typography variant="subtitle2">Shipping Tax</Typography>
        <Typography variant="subtitle2">{formattedShippingTax}</Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="subtitle2">Total</Typography>
        <Typography variant="subtitle2">{formattedTotal}</Typography>
      </Box>
    </Card>
  );
};

CheckoutSummary.propTypes = {
  onQuantityChange: PropTypes.func,
  // @ts-ignore
  products: PropTypes.array,
};
