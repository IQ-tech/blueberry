import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import PasswordField from "./index";

//@ts-ignore
import "core/components/form/FieldBase.styl";
import "core/components/form/Input.styl";

export default {
  title: "Components/form/Password",
  component: PasswordField,
  parameters: {
    docs: {
      description: {
        component: `Default input`,
      },
    },
  },
} as Meta;

const Template = (args) => (
  <div style={{ width: "60%", maxWidth: "350px" }}>
    <PasswordField {...args} />
  </div>
);

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: "Type password",
  placeholder: "Batata",
};
