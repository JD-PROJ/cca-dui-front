import React from 'react';

import { styled } from '@/stitches.config';

const ScheduleInfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  border: 'solid 2px $blue20',
  alignItems: 'center',
  padding: '$3',
  color: '$black',
});

const ScheduleInfoTitle = styled('h3', { textAlign: 'center' });

const ScheduleInfoDescription = styled('p', {});

const ScheduleInfo = () => {
  return (
    <ScheduleInfoWrapper>
      <ScheduleInfoTitle>우리 제주도 여행 언제가</ScheduleInfoTitle>
      <ScheduleInfoDescription>2021.01.12 ~ 2021.03.16</ScheduleInfoDescription>
    </ScheduleInfoWrapper>
  );
};

export default ScheduleInfo;
