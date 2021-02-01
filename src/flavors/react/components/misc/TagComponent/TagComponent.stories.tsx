import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import TagComponent from "../TagComponent";

export default {
  title: "Components/Utils/TagComponent",
  component: TagComponent,
  parameters: {
    docs: {
      description: {
        component: "A component that change it's tag dynamically",
      },
    },
  },
} as Meta;

const Template = ({ tag, ...otherProps }) => (
  <TagComponent tag={tag} {...otherProps} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Dynamic tag component",
};
