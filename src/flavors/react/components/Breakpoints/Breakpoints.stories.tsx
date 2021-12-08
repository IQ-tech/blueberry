import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import Breakpoints from ".";
import "./style.styl";

export default {
  title: "MediaQueries/Breakpoints",
  component: Breakpoints,
  parameters: {
    docs: {
      description: {
        component: `
          Descrição dos Breakpoints
        `,
      },
    },
  },
} as Meta;

const Template = () => {
  return <Breakpoints />;
};

export const BreakpointsList = Template.bind({});
