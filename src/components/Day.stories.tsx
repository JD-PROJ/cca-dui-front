import React from 'react';

import Day from './Day';

export default {
  title: 'Components/Day',
  component: Day,
  decorators: [
    (Story: any) => (
      <div style={{ width: 300, height: 300 }}>
        <Story />
      </div>
    ),
  ],
};

export const InActive = () => (
  <Day active={false} day={12} selected={false} confirmation={false} />
);
export const NonSelected = () => (
  <Day active={true} day={12} selected={false} confirmation={false} />
);
export const Selected = () => (
  <Day active={true} day={12} selected={true} confirmation={false} />
);

export const Confirmation = () => (
  <Day active={true} day={12} selected={false} confirmation={true} />
);
