import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  palette: {
    primary: {
      white: '#FFFFFF',
 
    },
    text: {
      black: '#111111',
    },
    background: {
      creme: '#FDFDFD',
    },
    svg: {
      default: '#8A8D8C',
    },
  },
  fontFamily: {
    poppins: 'Poppins',
  },
  fontSize: {
    sm: '0.9rem',
    base: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  fontWeight: {
    regular: '300',
    medium: '400',
    semibold: '600',
    bold: '700',
  },
  breakpoints: {
    sm: '46.5rem',
    md: '65rem',
    lg: '90rem',
  },
  extend: {
    borderRadius: {
      lg: '1.875rem',
      md: '1rem',
      sm: '0.5rem',
    },
    boxShadowing: {
      regular: '0 -0.25rem 4rem -0.25rem rgba(78, 78, 78, 0.12)',
    },
    border: {
      none: 'none',
      darkGray: '1px solid #8A8D8C',
    },
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
