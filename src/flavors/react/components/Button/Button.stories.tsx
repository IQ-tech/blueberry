import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Button from "./index";
import "core/components/Button.styl";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Default button component",
      },
    },
  },
} as Meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Main button",
};
