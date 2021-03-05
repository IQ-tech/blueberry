import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Tabs from "./index";
import Card from "../Card"

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
    { title: 'Notícias', notificationAmount: 1 }, 
    { title: 'Avisos', notificationAmount: 2 }
  ],
  className: '',
  children: [1, 2],
  isNotificationActive: true
};

export const TabSimpleExample = Template.bind({});
TabSimpleExample.args = {
  tabsHeader: [
    { title: 'Notícias' }, 
    { title: 'Avisos' }
  ],
  className: '',
  children: [1, 2]
};

const SecondTemplate = () => (
  <Card fixedSize={{ width: "400px", height: "200px"}}>
    <Tabs tabsHeader={[{title: 'First'}, {title: "second"}]}>
      <Card.Section>first tab</Card.Section>
      <Card.Section>second tab</Card.Section>
    </Tabs>
  </Card>
)

export const TabInsideCard = SecondTemplate.bind({});