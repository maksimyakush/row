
import React from 'react';

import { Button } from './';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['green', 'yellow'],
      control: { type: 'select' },
    },
    label: {
      options: ['Button', 'yellow'],
      control: { type: 'select' },
    },
  },
};


//👇 Each story then reuses that template
export const Playground  = {
    args: {
        label: 'Button',
        color: 'green'
    }
}
