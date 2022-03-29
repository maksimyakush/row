import React from 'react';

import { List } from '.';
import { Item } from './Item';
import { Button } from '../Button';
import * as ItemStories from './Item/Item.stories';
import * as ButtonStories from '../Button/Button.stories';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'List',
  component: List,
  argTypes: {
    color: { control: 'color' },
  },
  args: {
    ...ItemStories.Playground.args,
    ...ButtonStories.Playground.args,
  }
};

const Template: ComponentStory<typeof List> = (args) => {
  console.log(args);

  return (
    <List>
      <Item {...args} />
      <Button {...args} />
    </List>
  );
};
export const Playground = Template.bind({});
//👇 Each story then reuses that template


