import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const brandBg = {
  Mastercard: '/assets/cards/card-mastercard-1.png',
  VISA: '/assets/cards/card-visa.png',
};

const brandIcon = {
  Mastercard: '/assets/logos/logo-mastercard.svg',
  VISA: '/assets/logos/logo-visa.svg',
};

export const CryptoCard = (props) => {
  const { brand, cardNumber, holderName, expiryDate, id, ...other } = props;

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        backgroundImage: `url("${brandBg[brand]}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        py: 6,
        px: 4,
      }}
      {...other}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <img src="/assets/contactless.svg" />
        <Box
          sx={{
            height: 32,
            '& img': {
              height: '100%',
            },
          }}
        >
          <img alt="" src={brandIcon[brand]} />
        </Box>
      </Box>
      <Box
        sx={{
          mt: 6,
          mb: 3,
        }}
      >
        <Typography
          sx={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%)',
            backgroundClip: 'text',
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: '0.1em',
            lineHeight: '32px',
            textFillColor: 'transparent',
          }}
        >
          {cardNumber}
        </Typography>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Typography color="white" variant="body2">
            Card holder name
          </Typography>
          <Typography
            color="white"
            sx={{
              fontSize: 16,
              fontWeight: 700,
              lineHeight: '24px',
              mt: 1,
              textShadow: '0px 1px 4px rgba(18, 109, 177, 0.58)',
            }}
          >
            {holderName}
          </Typography>
        </div>
        <Box sx={{ ml: 2 }}>
          <Typography color="white" variant="body2">
            Expiry date
          </Typography>
          <Typography
            color="white"
            sx={{
              fontSize: 16,
              fontWeight: 700,
              lineHeight: '24px',
              mt: 1,
              textShadow: '0px 1px 4px rgba(18, 109, 177, 0.58)',
            }}
          >
            {expiryDate}
          </Typography>
        </Box>
        <Box sx={{ ml: 2 }}>
          <img src="/assets/sim.svg" />
        </Box>
      </Box>
    </Box>
  );
};

CryptoCard.propTypes = {
  id: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
  holderName: PropTypes.string.isRequired,
};
