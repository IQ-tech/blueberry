import React, { useState, useEffect } from "react";
import { Meta } from "@storybook/react/types-6-0";
import AutocompleteField from "./index";

//@ts-ignore
import "core/components/Form.styl";

export default {
  title: "Components/form/AutocompleteField",
  component: AutocompleteField,
  parameters: {
    docs: {
      description: {
        component: `Default input`,
      },
    },
  },
} as Meta;

const Template = (args) => {
  const [value, setValue] = useState("cenoura");

  useEffect(() => {
    setTimeout(() => {
      setValue("lala");
    }, 2000);
  }, []);

  return (
    <div style={{ width: "60%", maxWidth: "350px" }}>
      <AutocompleteField {...args} value={value} />
      <AutocompleteField {...args} />
      <AutocompleteField {...args} />
    </div>
  );
};

export const BasicInput = Template.bind({});
BasicInput.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  label: "Simple field",
  placeholder: "Type something",
  options: [
    { value: "a", label: "a" },
    { value: "a", label: "a" },
    { value: "a", label: "a" },
  ],
};

export const OpenSuggestionsOnFocusInput = Template.bind({});
OpenSuggestionsOnFocusInput.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  label: "Simple field",
  placeholder: "Type something",
  openDropdownOnFocus: true,
  options: [
    { value: "a", label: "a" },
    { value: "a", label: "a" },
    { value: "a", label: "a" },
  ],
};
