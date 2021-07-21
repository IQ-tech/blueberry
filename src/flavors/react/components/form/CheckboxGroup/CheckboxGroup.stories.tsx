import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import CheckboxGroup from "./index";

//@ts-ignore
import "core/components/Form.styl";

export default {
  title: "Components/form/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    docs: {
      description: {
        component: `Default checkbox`,
      },
    },
  },
} as Meta;

const Template = (args) => <CheckboxGroup {...args} />;

export const DefaultCheckboxGroup = Template.bind({});
DefaultCheckboxGroup.args = {
  label: "Multiple options",
  options: [
    {value: "a", label: "first option"},
    {value: "b", label: "second option"},
    {value: "c", label: "third option"},
    {value: "d", label: "fourth option"},
    {value: "e", label: "fifth option"},
    {value: "f", label: "sixth option"},
    {value: "g", label: "seventh option"},
    {value: "h", label: "eighth option"},
    {value: "i", label: "nineth option"},
    {value: "j", label: "tenth option"},
  ]
}



