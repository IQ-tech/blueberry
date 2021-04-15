import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Dropdown from "./index";

//@ts-ignore
import "core/components/Dropdown.styl";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `Dropdowns present a list of items from which the user can select one or more options as desired. Within these dropdowns, it can contain an action to filter or classify the content.`,
      }
    },
  },
} as Meta;

const Template = (args) => <Dropdown {...args} />;

export const DynamicDropdown = Template.bind({});
DynamicDropdown.args = {
  type: 'transparent', 
  size: 'small', 
  prefix: 'Ano',
  items: ['2019', '2020', '2021'],
  callback: (selectedItem) => console.log({ selectedItem })
};