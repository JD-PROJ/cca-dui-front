import React from 'react';

import { styled } from '@/stitches.config';

const DayWrapper = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  borderTop: 'solid $0 $black',
});
const DayNumber = styled('p', {
  margin: '$1',
  fontSize: '$3',
});

const Day = () => {
  return (
    <DayWrapper>
      <DayNumber>1</DayNumber>
    </DayWrapper>
  );
};

export default Day;
