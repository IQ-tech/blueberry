import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import TagComponent from "./index";

export default {
  title: "Misc/TagComponent",
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
