import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Tabs from "./index";

//@ts-ignore
import "core/components/Tabs.styl";

export default {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: `Default Tabs component`,
      },
    },
  },
} as Meta;

const Template = (args) => <Tabs {...args} />;

export const TabExample = Template.bind({});
TabExample.args = {
  tabsHeader: [
    { title: 'Notícias', notificationAmount: 1 }, 
    { title: 'Avisos', notificationAmount: 2 }
  ],
  className: '',
  children: [1, 2],
  isNotificationActive: true
};