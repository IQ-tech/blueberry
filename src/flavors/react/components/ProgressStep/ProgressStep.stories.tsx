import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import ProgressStep from './index';

//@ts-ignore
import "core/components/ProgressStep.styl";

export default {
  title: "Components/ProgressStep",
  component: ProgressStep,
  parameters: {
    docs: {
      description: {
        component: "Progress Step Component"
      },
    },
  },
} as Meta;

const Template = (args) => (
  <ProgressStep {...args} />
)

export const Progress = Template.bind({});
Progress.args = {
  stepList: ['Step 1', 'Step 2', 'Step 3'],
  currentStep: 1
}
