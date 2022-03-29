// Button.stories.js|jsx

import React from 'react';

import { Item } from '.';

export default {
  title: 'Item',
  component: Item,
  argTypes: {
    color: {
      options: ['blue', 'green'],
      control: { type: 'radio' },
    },
  }
};

const Template = (args) => <Item {...args} />;
export const Playground = Template.bind({});
//👇 Each story then reuses that template

Playground.args = {
  children: 'Maksim111',
  color: 'blue'
}
