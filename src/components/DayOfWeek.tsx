import React from 'react';

import { styled } from '@/stitches.config';

const DayOfWeekWrapper = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: '#white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const DayOfWeekText = styled('p', {
  color: 'black',
  fontSize: '$2',
});

const DayOfWeek = ({ text }: { text: string }) => {
  return (
    <DayOfWeekWrapper>
      <DayOfWeekText>{text}</DayOfWeekText>
    </DayOfWeekWrapper>
  );
};

export default DayOfWeek;
