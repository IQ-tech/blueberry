import React from "react"
import { Meta } from "@storybook/react/types-6-0";
import Input from "./index";
import OutlineArrowLeft from "../../icons/generated/outline/OutlineArrowLeft";

//@ts-ignore
import "core/components/Form.styl";

export default {
  title: "Components/form/EmailField",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `Default email input`,
      },
    },
  },
} as Meta;

const Template = (args) => {
  return (
    <div style={{ width: "60%", maxWidth: "350px" }}>
      <Input {...args} />
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
  placeholder: "Batata",
};

export const InputWithTooltip = Template.bind({});
InputWithTooltip.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  label: "Simple field",
  placeholder: "Batata",
  tooltipConfig: {
    desc: "This is my tooltip",
    title: "Tooltip",
    placement: "bottom",
  },
};

export const InputOpcional = Template.bind({});
InputOpcional.args = {
  optional: true,
  label: "Input opcional",
  placeholder: "Cenoura",
};

export const InputDisabled = Template.bind({});
InputDisabled.args = {
  label: "Input desabilitado",
  disabled: true,
  placeholder: "Alface",
};

export const InputInvalid = Template.bind({});
InputInvalid.args = {
  label: "Input inválido",
  invalid: true,
  placeholder: "Tomate",
  errorMessage: "Some error message",
  required: true,
};

const LeftIconTemplate = (args) => {
  return (
    <div style={{ width: "60%", maxWidth: "350px" }}>
      <Input LeftIcon={OutlineArrowLeft} {...args} />
    </div>
  );
};

export const LeftIcon = LeftIconTemplate.bind({});
LeftIcon.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  label: "Simple field",
  placeholder: "Batata",
};

const RightIconTemplate = (args) => {
  return (
    <div style={{ width: "60%", maxWidth: "350px" }}>
      <Input {...args} />
    </div>
  );
};

export const RightIcon = RightIconTemplate.bind({});
RightIcon.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  Icon: OutlineArrowLeft,
  label: "Simple field",
  placeholder: "Batata",
};
