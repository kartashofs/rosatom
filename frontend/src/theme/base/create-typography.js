import { Inter, Plus_Jakarta_Sans } from '@next/font/google';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
});

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin', 'cyrillic'],
  weights: [600, 700],
});

export const createTypography = () => {
  return {
    fontFamily: `${inter.style.fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase',
    },
    h1: {
      fontFamily: `${plus_jakarta_sans.style.fontFamily}, sans-serif`,
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: `${plus_jakarta_sans.style.fontFamily}, sans-serif`,
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: `${plus_jakarta_sans.style.fontFamily}, sans-serif`,
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: `${plus_jakarta_sans.style.fontFamily}, sans-serif`,
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: `${plus_jakarta_sans.style.fontFamily}, sans-serif`,
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: `${plus_jakarta_sans.style.fontFamily}, sans-serif`,
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: 1.2,
    },
  };
};
