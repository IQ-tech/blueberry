import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Button from "./index";
import {
  OutlinePlus,
  OutlineArrowLeftOne,
  OutlineCalendar,
} from "../icons/generated/outline";

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

const IconTemplate = (args) => <Button {...args} />;

export const IconButton = IconTemplate.bind({});
IconButton.args = {
  Icon: OutlineCalendar,
  children: "Icon Button",
};

export const RightIconButton = IconTemplate.bind({});
RightIconButton.args = {
  Icon: OutlineArrowLeftOne,
  children: "Right Icon Button",
  iconRight: true,
};

export const OnlyIconButton = IconTemplate.bind({});
OnlyIconButton.args = {
  Icon: OutlinePlus,
  onlyIcon: true,
};

const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M24 12C24 5.3726 18.6274 1.52588e-05 12 1.52588e-05C5.37259 1.52588e-05 0 5.3726 0 12C0 17.6278 3.87432 22.3499 9.10109 23.6466V15.667H6.62659V12H9.10109V10.4199C9.10109 6.33548 10.9495 4.44236 14.9594 4.44236C15.7196 4.44236 17.0314 4.5914 17.568 4.74049V8.06468C17.2848 8.03487 16.7929 8.01995 16.1817 8.01995C14.214 8.01995 13.4538 8.76529 13.4538 10.7031V12H17.3734L16.7001 15.667H13.4538V23.9121C19.3955 23.1945 24 18.1353 24 12Z" fill="#0866FF"/>
<path d="M16.7004 15.667L17.3738 12H13.4542V10.7031C13.4542 8.76524 14.2144 8.01995 16.1821 8.01995C16.7933 8.01995 17.2852 8.03483 17.5684 8.06464V4.7405C17.0318 4.59141 15.72 4.44232 14.9598 4.44232C10.9499 4.44232 9.10145 6.33549 9.10145 10.4199V12H6.62695V15.667H9.10145V23.6466C10.0299 23.8769 11.0007 24 12.0004 24C12.4926 24 12.9775 23.9697 13.4542 23.9121V15.667H16.7004Z" fill="white"/>
</svg>

export const SocialButton = Template.bind({});
SocialButton.args = {
	Icon: FacebookIcon,
  children: "Entrar com o Facebook",
  type: "social",
};
