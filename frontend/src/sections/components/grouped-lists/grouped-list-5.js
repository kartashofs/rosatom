import numeral from 'numeral';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import {
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { CircularProgress } from '../../../components/circular-progress';
import { Scrollbar } from '../../../components/scrollbar';

const products = [
  {
    id: '5eff2512c6f8737d08325676',
    conversionRate: 93,
    currency: '$',
    image: '/assets/products/product-1.png',
    name: 'Healthcare Erbology',
    profit: 53500,
    sales: 13153,
  },
  {
    id: '5eff2516247f9a6fcca9f151',
    conversionRate: 76,
    currency: '$',
    image: '/assets/products/product-2.png',
    name: 'Makeup Lancome Rouge',
    profit: 45763,
    sales: 10300,
  },
  {
    id: '5eff251a3bb9ab7290640f18',
    conversionRate: 60,
    currency: '$',
    image: null,
    name: 'Lounge Puff Fabric Slipper',
    profit: 28700,
    sales: 5300,
  },
  {
    id: '5eff251e297fd17f0dc18a8b',
    conversionRate: 46,
    currency: '$',
    image: '/assets/products/product-4.png',
    name: 'Skincare Necessaire',
    profit: 20400,
    sales: 1203,
  },
  {
    id: '5eff2524ef813f061b3ea39f',
    conversionRate: 41,
    currency: '$',
    image: '/assets/products/product-5.png',
    name: 'Skincare Soja CO',
    profit: 15200,
    sales: 254,
  },
];

export const GroupedList5 = () => (
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
        title="Profitable Products"
      />
      <Scrollbar>
        <Table sx={{ minWidth: 700 }}>
          <TableBody>
            {products.map((product) => {
              const sales = numeral(product.sales).format('0,0');
              const profit = numeral(product.profit).format(
                `${product.currency}0,0.00`,
              );

              return (
                <TableRow hover key={product.id}>
                  <TableCell>
                    <Stack alignItems="center" direction="row" spacing={2}>
                      {product.image ? (
                        <Box
                          sx={{
                            alignItems: 'center',
                            backgroundColor: 'neutral.50',
                            backgroundImage: `url(${product.image})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            borderRadius: 1,
                            display: 'flex',
                            height: 80,
                            justifyContent: 'center',
                            overflow: 'hidden',
                            width: 80,
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            alignItems: 'center',
                            backgroundColor: 'neutral.50',
                            borderRadius: 1,
                            display: 'flex',
                            height: 80,
                            justifyContent: 'center',
                            width: 80,
                          }}
                        >
                          <SvgIcon>
                            <Image01Icon />
                          </SvgIcon>
                        </Box>
                      )}
                      <div>
                        <Typography variant="subtitle2">
                          {product.name}
                        </Typography>
                        <Typography
                          color="text.secondary"
                          noWrap
                          variant="body2"
                        >
                          <Typography
                            color="success.main"
                            component="span"
                            variant="subtitle2"
                          >
                            {sales}
                          </Typography>{' '}
                          Sales
                        </Typography>
                      </div>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Profit</Typography>
                    <Typography color="text.secondary" noWrap variant="body2">
                      {profit}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Stack
                      alignItems="center"
                      direction="row"
                      justifyContent="flex-end"
                      spacing={2}
                    >
                      <div>
                        <Typography align="right" variant="subtitle2">
                          {product.conversionRate}%
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                          Conversion Rate
                        </Typography>
                      </div>
                      <CircularProgress value={product.conversionRate} />
                    </Stack>
                  </TableCell>
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
              <ArrowRightIcon />
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
