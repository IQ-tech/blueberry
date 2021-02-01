import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import If from "../If";

export default {
  title: "Components/Utils/If",
  component: If,
  parameters: {
    docs: {
      description: {
        component: "A helper component to conditionally render it's content",
      },
    },
  },
} as Meta;

const Template = ({ condition, renderIf, renderElse }) => (
  <If condition={condition} renderIf={renderIf} renderElse={renderElse} />
);

export const Default = Template.bind({});
Default.args = {
  condition: 2 === 1 + 1,
  renderIf: "if true, render potato",
  renderElse: "if false, render carrot",
};
