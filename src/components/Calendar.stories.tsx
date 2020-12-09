import React from 'react';

import Calendar from './Calendar';

export default {
  title: 'Calendar',
  component: Calendar,
};

export const Default = () => {
  return (
    <div style={{ height: '700px', width: '700px' }}>
      <Calendar />
    </div>
  );
};
