import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import StepProgress from './index';

//@ts-ignore
import "core/components/StepProgress.styl";

export default {
  title: "Components/StepProgress",
  component: StepProgress,
  parameters: {
    docs: {
      description: {
        component: "Step Progress Component"
      },
    },
  },
} as Meta;

const Template = (args) => (
  <StepProgress {...args} />
)

export const Progress = Template.bind({});
Progress.args = {
  stepsList: ['Step 1', 'Step 2', 'Step 3'],
  currentStep: 1
}
