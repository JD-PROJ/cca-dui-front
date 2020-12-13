import React from 'react';

import { styled } from '@/stitches.config';

const ScheduleInfoWrapper = styled('div', {
  display: 'flex',
  border: '1px solid $blue80',
});

const ScheduleInfo = () => {
  return <ScheduleInfoWrapper>2주년 기념파티</ScheduleInfoWrapper>;
};

export default ScheduleInfo;
