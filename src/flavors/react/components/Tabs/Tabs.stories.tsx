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
        component: `
          To use this component you need to define the header buttons 
          with an array of objects and use it wrapping in another markup.
        `,
      },
    },
  },
} as Meta;

const Template = (args) => <Tabs {...args} />;

export const TabExampleWithNotification = Template.bind({});
TabExampleWithNotification.args = {
  tabsHeader: [
    { title: "Notícias", notificationAmount: 1 },
    { title: "Avisos", notificationAmount: 2 },
  ],
  className: "",
  children: [1, 2],
  isNotificationActive: true,
};

export const TabSimpleExample = Template.bind({});
TabSimpleExample.args = {
  tabsHeader: [{ title: "Notícias" }, { title: "Avisos" }],
  className: "",
  children: [1, 2],
};
