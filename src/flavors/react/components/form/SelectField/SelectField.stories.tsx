import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import SelectField from "./index";

//@ts-ignore
import "core/components/Form.styl";

export default {
  title: "Components/form/SelectField",
  component: SelectField,
  parameters: {
    docs: {
      description: {
        component: `Default SelectField`,
      },
    },
  },
} as Meta;

const Template = (args) => {
  const [selectedOption, setSelectedOption] = useState("b");

  return (
    <div style={{ width: "60%", maxWidth: "350px" }}>
      <SelectField
        value={selectedOption}
        onChange={(value) => {
          setSelectedOption(value);
        }}
        {...args}
      />
    </div>
  );
};

export const BasicSelectField = Template.bind({});
BasicSelectField.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  label: "Simple select field",
  ariaLabel: "This is a Select field",
  options: [
    { value: "A", label: "a" },
    { value: "B", label: "b" },
  ],
};
export const BasicSelectFieldTooltip = Template.bind({});
BasicSelectFieldTooltip.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  label: "Simple select field",
  ariaLabel: "This is a Select field",
  options: [
    { value: "A", label: "a" },
    { value: "B", label: "b" },
  ],
  tooltipConfig: {
    desc: "This is my tooltip",
    title: "Tooltip",
    placement: "bottom",
  },
};

const TemplatePlaceholder = (args) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div style={{ width: "60%", maxWidth: "350px" }}>
      <SelectField
        value={selectedOption}
        onChange={(value) => {
          setSelectedOption(value);
        }}
        {...args}
      />
    </div>
  );
};

export const BasicSelectFieldPlaholder = TemplatePlaceholder.bind({});
BasicSelectFieldPlaholder.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  label: "Simple select field",
  options: [
    { value: "A", label: "a" },
    { value: "B", label: "b" },
  ],
  tooltipConfig: {
    desc: "This is my tooltip",
    title: "Tooltip",
    placement: "bottom",
  },
};
