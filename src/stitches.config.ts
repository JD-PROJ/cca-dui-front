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
      $1: '4px',
      $2: '8px',
      $3: '12px',
    },
    fontSizes: {
      $1: '12px',
      $2: '16px',
      $3: '20px',
    },
    radii: {
      $pill: '12px',
      $round: '120px',
    },
  },
  breakpoints: {
    md: (rule: string) => `@media (min-width: 640px) { ${rule} }`,
    lg: (rule: string) => `@media (min-width: 1024px) { ${rule} }`,
  },
  utils: {},
});
