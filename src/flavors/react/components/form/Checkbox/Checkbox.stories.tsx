import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Checkbox from "./index";

//@ts-ignore
import "core/components/Form.styl";

export default {
  title: "Components/form/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `Default checkbox`,
      },
    },
  },
} as Meta;

const Template = (args) => <Checkbox {...args} />;

export const DefaultCheckbox = Template.bind({});

export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
  disabled: true,
};

export const DisabledCheckedCheckbox = Template.bind({});
DisabledCheckedCheckbox.args = {
  disabled: true,
  isChecked: true,
};

export const RequiredCheckbox = Template.bind({});
RequiredCheckbox.args = {
  required: true,
};

export const InvalidCheckbox = Template.bind({});
InvalidCheckbox.args = {
  required: true,
  invalid: true,
  isChecked: false,
};
