import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Header from "../Header";

import "core/fonts.styl";
import "core/components/Header.styl";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    docs: {
      description: {
        component: "IQ Header",
      },
    },
  },
} as Meta;

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
