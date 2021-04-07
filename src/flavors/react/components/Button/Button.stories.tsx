import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Button from "./index";

//@ts-ignore
import "core/components/Button.styl";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Default button component",
      },
    },
  },
} as Meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary button",
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
  children: "Primary inverted button",
  color: "inverted",
};
PrimaryInverted.parameters = {
  backgrounds: { default: "dark" },
};

export const PrimaryDanger = Template.bind({});
PrimaryDanger.args = {
  children: "Primary danger button",
  color: "danger",
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: "Primary disabled button",
  disabled: true,
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  children: "Primary loading button",
  loading: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary button",
  type: "secondary",
};

export const SecondaryInverted = Template.bind({});
SecondaryInverted.args = {
  children: "Secondary inverted button",
  type: "secondary",
  color: "inverted",
};
SecondaryInverted.parameters = {
  backgrounds: { default: "dark" },
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  children: "secondary disabled button",
  type: "secondary",
  disabled: true,
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: "Text button",
  type: "text",
};

export const TextButtonInverted = Template.bind({});
TextButtonInverted.args = {
  children: "Text inverted button",
  type: "text",
  color: "inverted",
};

TextButtonInverted.parameters = {
  backgrounds: { default: "dark" },
};

export const Small = Template.bind({});
Small.args = {
  children: "Small button",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Medium button",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large button",
  size: "large",
};


const IconTemplate = (args) => <Button {...args} />

const IconOnlyButton = IconTemplate.bind({})