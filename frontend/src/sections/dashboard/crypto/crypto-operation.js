import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import SwitchVertical01Icon from '@untitled-ui/icons-react/build/esm/SwitchVertical01';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  SvgIcon,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';

const logoMap = {
  BTC: '/assets/logos/logo-bitcoin.svg',
  ETH: '/assets/logos/logo-eth.svg',
};

export const CryptoOperation = (props) => {
  const [op, setOp] = useState({
    from: 'BTC',
    to: 'ETH',
  });

  const handleSwitch = useCallback(() => {
    if (op.from === 'BTC') {
      setOp({
        from: 'ETH',
        to: 'BTC',
      });
    } else {
      setOp({
        from: 'BTC',
        to: 'ETH',
      });
    }
  }, [op]);

  return (
    <Card {...props}>
      <CardHeader
        title="Operation"
        action={
          <Tabs value="buy">
            <Tab label="Buy" value="buy" />
            <Tab label="Sell" value="sell" />
          </Tabs>
        }
      />
      <CardContent sx={{ pt: 0 }}>
        <TextField
          label="From"
          fullWidth
          InputProps={{
            startAdornment: (
              <Box
                sx={{
                  mr: 1,
                  mt: 2.5,
                }}
              >
                <Box
                  component="img"
                  src={logoMap[op.from]}
                  sx={{
                    height: 24,
                    width: 24,
                  }}
                />
              </Box>
            ),
          }}
          value="0.4567"
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            my: 1,
          }}
        >
          <IconButton onClick={handleSwitch}>
            <SvgIcon fontSize="small">
              <SwitchVertical01Icon />
            </SvgIcon>
          </IconButton>
        </Box>
        <TextField
          label="To"
          fullWidth
          InputProps={{
            startAdornment: (
              <Box
                sx={{
                  mr: 1,
                  mt: 2.5,
                }}
              >
                <Box
                  component="img"
                  src={logoMap[op.to]}
                  sx={{
                    height: 24,
                    width: 24,
                  }}
                />
              </Box>
            ),
          }}
          value="5.9093"
        />
        <Typography color="text.secondary" sx={{ mt: 2 }} variant="body2">
          1 BTC = $20,024.90
        </Typography>
        <Button fullWidth size="large" sx={{ mt: 2 }} variant="contained">
          Buy {op.to === 'BTC' ? 'Bitcoin' : 'Ethereum'}
        </Button>
      </CardContent>
    </Card>
  );
};

CryptoOperation.propTypes = {
  sx: PropTypes.object,
};
