import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import FooterClassic from "../FooterClassic";

import "core/fonts.styl";
import "core/components/legacy/FooterClassic.styl";

export default {
  title: "Components/Legacy/FooterClassic",
  component: FooterClassic,
  parameters: {
    docs: {
      description: {
        component: "Legacy iq footer",
      },
    },
  },
} as Meta;

const Template = (args) => <FooterClassic {...args} />;

export const Default = Template.bind({});
