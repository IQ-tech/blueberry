import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import HeaderClassic from "./index";

import "core/fonts.styl";
import "core/components/legacy/HeaderClassic.styl";

export default {
  title: "Components/legacy/HeaderClassic",
  component: HeaderClassic,
  parameters: {
    docs: {
      description: {
        component: "Legacy iq header",
      },
    },
  },
} as Meta;

const Template = (args) => <HeaderClassic {...args} />;

export const Default = Template.bind({});
