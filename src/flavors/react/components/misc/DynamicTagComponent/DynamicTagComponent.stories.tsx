import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import DynamicTagComponent from "../DynamicTagComponent";

export default {
  title: "Components/Utils/DynamicTagComponent",
  component: DynamicTagComponent,
  parameters: {
    docs: {
      description: {
        component: "A component that change it's tag dynamically",
      },
    },
  },
} as Meta;

const Template = ({ tag, ...otherProps }) => (
  <DynamicTagComponent tag={tag} {...otherProps} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Dynamic tag component",
};
