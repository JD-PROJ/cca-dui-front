import React from 'react';

import { styled } from '@/stitches.config';

const DayComponent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',
  height: '90%',
  color: '$white',
  fontSize: '$3',
  margin: '$1',
  cursor: 'pointer',
});

const Day = ({
  text,
  selected,
  active,
  onClick = () => {},
}: {
  text: number;
  selected: boolean;
  active: boolean;
  onClick?: () => void;
}) => {
  return (
    <DayComponent
      css={{
        background: !active ? '$white' : selected ? '$gray' : '$black',
      }}
      onClick={onClick}
    >
      {text}
    </DayComponent>
  );
};

export default Day;
