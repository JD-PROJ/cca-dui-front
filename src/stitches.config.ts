import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {
    colors: {
      $black: '#212529',
      $gray: '#9ea7ad',
      $white: '#f2f4f5',
      $primary: '#ff3333',
      $success: '#3cb371',
      $warning: '#fad44f',
    },
    space: {
      $0: '1px',
      $1: '2px',
      $2: '4px',
      $3: '8px',
    },
    fontSizes: {
      $1: '0.8rem',
      $2: '1rem',
      $3: '1.2rem',
    },
    radii: {
      $pill: '12px',
      $round: '120px',
    },
  },
  utils: {},
});
