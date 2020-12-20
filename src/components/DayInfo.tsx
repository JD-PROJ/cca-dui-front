import React, { useState } from 'react';

import { styled } from '@/stitches.config';

const DayInfoWrapper = styled('div', {
  display: 'flex',
  borderRadius: '$pill',
  padding: '$4',
  border: 'solid 1px $blue50',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const DayDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const DayToggleButton = styled('button', {
  backgroundColor: '$blue50',
  borderStyle: 'none',
  padding: '$3 $4 $3 $4',
  borderRadius: '$pill',
  color: '$white',
});

const DayDescriptionTitle = styled('h3', {
  marginBottom: '$2',
});
const DayDescriptionText = styled('p', {
  fontSize: '$2',
});

const DayInfo = ({
  year,
  month,
  day,
  selected,
  users,
}: {
  year: number;
  month: number;
  day: number;
  selected: boolean;
  users: string[];
}) => {
  const [status, setStatus] = useState(false);

  return (
    <DayInfoWrapper>
      <DayDescription>
        <DayDescriptionTitle>{`${year}.${month}.${day}`}</DayDescriptionTitle>
        <DayDescriptionText>{`${selected ? '❌' : '🙌'} ${users.join(
          ',',
        )}`}</DayDescriptionText>
      </DayDescription>
      <DayToggleButton
        onClick={() => {
          setStatus(!status);
        }}
      >
        선택
      </DayToggleButton>
    </DayInfoWrapper>
  );
};

export default DayInfo;
