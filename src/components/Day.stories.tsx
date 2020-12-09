import React from 'react';

import Day from './Day';

export default {
  title: 'Day',
  component: Day,
};

export const inactive = () => <Day text={1} active={false} selected={false} />;

export const notSelected = () => (
  <Day text={1} active={true} selected={false} />
);

export const selected = () => <Day text={1} active={true} selected={true} />;
