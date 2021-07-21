import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import RadioField from "./index";

//@ts-ignore
import "core/components/Form.styl";

export default {
  title: "Components/form/RadioField",
  component: RadioField,
  parameters: {
    docs: {
      description: {
        component: `Default checkbox`,
      },
    },
  },
} as Meta;

const Template = (args) => <RadioField {...args} />;

export const DefaultRadioGroup = Template.bind({});
DefaultRadioGroup.args = {
  label: "Multiple options",
  options: [
    { value: "a", label: "first option" },
    { value: "b", label: "second option" },
    { value: "c", label: "third option" },
    { value: "d", label: "fourth option" },
    { value: "e", label: "fifth option" },
    { value: "f", label: "sixth option" },
    { value: "g", label: "seventh option" },
    { value: "h", label: "eighth option" },
    { value: "i", label: "nineth option" },
    { value: "j", label: "tenth option" },
  ],
};

export const DisabledRadio = Template.bind({});
DisabledRadio.args = {
  label: "Multiple options",
  disabled: true,
  defaultSelected: 0,
  options: [
    { value: "a", label: "first option" },
    { value: "b", label: "second option" },
    { value: "c", label: "third option" },
    { value: "d", label: "fourth option" },
    { value: "e", label: "fifth option" },
    { value: "f", label: "sixth option" },
    { value: "g", label: "seventh option" },
    { value: "h", label: "eighth option" },
    { value: "i", label: "nineth option" },
    { value: "j", label: "tenth option" },
  ],
};

export const InvalidRadio = Template.bind({});
InvalidRadio.args = {
  label: "Multiple options",
  invalid: true,
  errorMessage: "Escolha uma das opções",
  options: [
    { value: "a", label: "first option" },
    { value: "b", label: "second option" },
    { value: "c", label: "third option" },
    { value: "d", label: "fourth option" },
    { value: "e", label: "fifth option" },
    { value: "f", label: "sixth option" },
    { value: "g", label: "seventh option" },
    { value: "h", label: "eighth option" },
    { value: "i", label: "nineth option" },
    { value: "j", label: "tenth option" },
  ],
};
