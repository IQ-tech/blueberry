import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import ProgressBar from './index';

//@ts-ignore
import "core/components/ProgressBar.styl";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: "Progress Bar Component"
      },
    },
  },
} as Meta;

const Template = (args) => (
  <ProgressBar {...args} />
  
)

export const Progress = Template.bind({});
Progress.args = {
  percentage: '25%',
}
