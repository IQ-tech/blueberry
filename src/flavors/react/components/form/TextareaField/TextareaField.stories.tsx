import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import TextareaField from "./index";

//@ts-ignore
import "core/components/Form.styl";

export default {
  title: "Components/form/TextareaField",
  component: TextareaField,
  parameters: {
    docs: {
      description: {
        component: `Default textarea`,
      },
    },
  },
} as Meta;

const Template = (args) => (
  <div style={{ width: "60%", maxWidth: "350px" }}>
    <TextareaField {...args} />
  </div>
);

export const BasicField = Template.bind({});
BasicField.args = {
  label: "Basic Field",
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  placeholder: "Textarea basic field example...",
};

export const tooltipField = Template.bind({});
tooltipField.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  label: "Tooltip Field",
  placeholder: "Textarea tooltip field example...",
  tooltipConfig: {
    desc: "This is my tooltip",
    title: "Tooltip",
    placement: "bottom",
  },
};

export const optionalField = Template.bind({});
optionalField.args = {
  optional: true,
  useNumericKeyboard: false,
  label: "Optional Field",
  placeholder: "Textarea optional field example...",
};

export const disabledField = Template.bind({});
disabledField.args = {
  label: "Disabled Field",
  disabled: true,
  placeholder: "Textarea disabled field example...",
};

export const invalidField = Template.bind({});
invalidField.args = {
  label: "Invalid Field",
  invalid: true,
  placeholder: "Textarea invalid field example...",
  errorMessage: "Some error message",
  required: true,
};
