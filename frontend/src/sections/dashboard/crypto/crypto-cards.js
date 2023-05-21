import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import { CryptoCard } from './crypto-card';

const sliderSettings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const CryptoCards = (props) => {
  const { cards } = props;

  return (
    <Box
      sx={{
        '& .slick-list': {
          borderRadius: 2,
          boxShadow: 12,
        },
        '& .slick-dots': {
          bottom: 'unset',
          left: (theme) => theme.spacing(3),
          textAlign: 'left',
          top: (theme) => theme.spacing(1),
        },
        '& .slick-dots li button': {
          '&:before': {
            fontSize: 10,
            color: 'common.white',
          },
        },
        '& .slick-dots li.slick-active button': {
          '&:before': {
            color: 'common.white',
          },
        },
      }}
    >
      <Slider {...sliderSettings}>
        {cards.map((card) => (
          <CryptoCard key={card.id} {...card} />
        ))}
      </Slider>
    </Box>
  );
};

CryptoCards.propTypes = {
  cards: PropTypes.array.isRequired,
};
