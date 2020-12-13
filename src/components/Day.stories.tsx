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

export const Basic = () => <Day active={false} day={12} selected={false} />;
