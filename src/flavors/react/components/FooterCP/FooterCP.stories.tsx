import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import FooterCP from ".";

import "core/fonts.styl";
import 'core/components/FooterCP.styl'

export default {
  title: "Components/Legacy/FooterCP",
  component: FooterCP,
  parameters: {
    docs: {
      description: {
        component: "Legacy iq footer",
      },
    },
  },
} as Meta;

const Template = (args) => <FooterCP {...args} />;

export const Default = Template.bind({});
