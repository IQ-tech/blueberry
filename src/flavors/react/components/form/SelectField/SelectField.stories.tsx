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
};
