import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import ColorsPallete from ".";

export default {
  title: "Colors/Pallete",
  component: ColorsPallete,
  parameters: {
    docs: {
      description: {
        component: `
          Paleta de variáveis de cores
        `,
      },
    },
  },
} as Meta;

const Template = () => {
  return <ColorsPallete />;
};

export const ColorsList = Template.bind({});
