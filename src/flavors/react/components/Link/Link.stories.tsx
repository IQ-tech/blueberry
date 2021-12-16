import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Link from './index';

//@ts-ignore
import "core/components/Link.styl";

export default {
  title: "Components/Link",
  component: Link,
  parameters: {
    docs: {
      description: {
        component: "Link Component"
      },
    },
  },
} as Meta;

const Template = (args) => (
  <Link {...args} />
  
)

export const LinkComponent = Template.bind({});
LinkComponent.args = {
  text: "Link",
  url: "https://www.redventures.com/"
}
