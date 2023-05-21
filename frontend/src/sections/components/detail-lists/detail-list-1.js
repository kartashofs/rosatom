import numeral from 'numeral';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';

const assets = [
  {
    amount: 21500,
    color: '#6C76C4',
    name: 'US Dollars',
  },
  {
    amount: 15300,
    color: '#33BB78',
    name: 'Bitcoin',
  },
  {
    amount: 1076.81,
    color: '#FF4081',
    name: 'XRP Ripple',
  },
];

export const DetailList1 = () => {
  const totalAmount = assets.reduce((acc, asset) => (acc += asset.amount), 0);
  const formattedTotalAmount = numeral(totalAmount).format('$0,0.00');

  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
        p: 3,
      }}
    >
      <Container maxWidth="sm">
        <Card>
          <CardHeader
            subheader={
              <Typography variant="h4">{formattedTotalAmount}</Typography>
            }
            sx={{ pb: 0 }}
            title={
              <Typography color="text.secondary" variant="overline">
                Total balance
              </Typography>
            }
          />
          <CardContent>
            <Divider sx={{ mb: 2 }} />
            <Typography color="text.secondary" variant="overline">
              Available currency
            </Typography>
            <List disablePadding sx={{ pt: 2 }}>
              {assets.map((currency) => {
                const amount = numeral(currency.amount).format('$0,0.00');

                return (
                  <ListItem
                    disableGutters
                    key={currency.name}
                    sx={{
                      pb: 2,
                      pt: 0,
                    }}
                  >
                    <ListItemText
                      disableTypography
                      primary={
                        <Stack
                          alignItems="center"
                          direction="row"
                          justifyContent="space-between"
                          spacing={2}
                        >
                          <Stack
                            alignItems="center"
                            direction="row"
                            spacing={2}
                          >
                            <Box
                              sx={{
                                backgroundColor: currency.color,
                                height: 8,
                                width: 8,
                                borderRadius: '50%',
                              }}
                            />
                            <Typography variant="subtitle2">
                              {currency.name}
                            </Typography>
                          </Stack>
                          <Typography
                            color="text.secondary"
                            variant="subtitle2"
                          >
                            {amount}
                          </Typography>
                        </Stack>
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
            <Divider />
            <Stack alignItems="flex-start" spacing={1} sx={{ mt: 2 }}>
              <Button
                color="inherit"
                endIcon={
                  <SvgIcon>
                    <ArrowRightIcon />
                  </SvgIcon>
                }
              >
                Add money
              </Button>
              <Button
                color="inherit"
                endIcon={
                  <SvgIcon>
                    <ArrowRightIcon />
                  </SvgIcon>
                }
              >
                Withdraw funds
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
