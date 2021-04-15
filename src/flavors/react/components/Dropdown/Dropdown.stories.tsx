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
        component: "Default dropdown component",
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