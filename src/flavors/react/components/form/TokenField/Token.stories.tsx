import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import TokenField from "./index";

//@ts-ignore
import "core/components/Form.styl";

export default {
  title: "Components/form/TokenInput",
  component: TokenField,
  parameters: {
    docs: {
      description: {
        component: `Default token input`,
      },
    },
  },
} as Meta;

const Template = (args) => {
  return (
    <div style={{ width: "60%", maxWidth: "350px" }}>
      <TokenField {...args} />
    </div>
  );
};

export const BasicTokenInput = Template.bind({});
BasicTokenInput.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  label: "Simple field",
  placeholder: "Batata",
};
