import React from 'react';

import { Card } from './';
import { Button } from '../Button';
import * as ButtonStories from '../Button/Button.stories';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Card',
  component: Card,
  subcomponents: {Button},

};

const Template: ComponentStory<typeof Card> = ({shoppingCart, ...args}, {subcomponents}) => {
    console.log(subcomponents);


  return (
    <Card shoppingCart={shoppingCart}>
        {({label}) => {
            return (
                <Button label = {label}  {...ButtonStories.Playground.args}  />
            )
        }}
    </Card>
  );
};
export const Playground = Template.bind({});

Playground.args= {
    shoppingCart: [{name: {label: 'Hewqw'}}],
}
//👇 Each story then reuses that template


