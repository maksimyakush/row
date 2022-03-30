// Button.stories.js|jsx

import React from 'react';

import { Row } from '.';

export default {
  title: 'Utils/Row',
  component: Row,
};

const Template = args => (
  <Row {...args}>
    <button>ds</button>
    <button>ds</button>{' '}
  </Row>
);
export const Playground = Template.bind({});
//👇 Each story then reuses that template

Playground.args = {
  children: 'Click',
  mb: 10,
  mt: 10,
  pt: 10,
};
