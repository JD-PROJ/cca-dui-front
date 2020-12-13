import React from 'react';

import { styled } from '@/stitches.config';

const DayOfWeekWrapper = styled('div', {
  width: '100%',
  height: '100%',
  padding: '$1',
  backgroundColor: '#white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '$3',
});
const DayOfWeekText = styled('p', {
  color: '$blue20',
  fontSize: '$1',
});

const DayOfWeek = ({ text }: { text: string }) => {
  return (
    <DayOfWeekWrapper>
      <DayOfWeekText>{text}</DayOfWeekText>
    </DayOfWeekWrapper>
  );
};

export default DayOfWeek;
