import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Card from "./index";
import Tabs from "../Tabs"

//@ts-ignore
import "core/components/Card.styl";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "Default card component",
      },
      source: {
        type: "code",
      },
    },
  },
} as Meta;

const Template = ({ children, ...args }) => (
  <Card {...args}>
    <Card.Section>{children}</Card.Section>
  </Card>
);

export const BlankCard = Template.bind({});
BlankCard.args = {
  children: "My Card",
  fixedSize: { width: "400px", height: "200px" },
  dark: false,
};
BlankCard.parameters = {
  backgrounds: { default: "opaque" },
};

const TemplateTwo = (args) => (
  <Card {...args}>
    <Card.Section>First section</Card.Section>
    <Card.Section>Second section</Card.Section>
  </Card>
);

export const CardWithSections = TemplateTwo.bind({});
CardWithSections.args = {
  fixedSize: { width: "400px", height: "200px" },
  dark: false,
};
CardWithSections.parameters = {
  backgrounds: { default: "opaque" },
};

const SecondTemplate = () => (
  <Card fixedSize={{ width: "400px", height: "200px"}}>
    <Tabs tabsHeader={[{title: 'First'}, {title: "second"}]}>
      <Card.Section>first tab</Card.Section>
      <Card.Section>second tab</Card.Section>
    </Tabs>
  </Card>
)

export const CardWithTabs = SecondTemplate.bind({});
CardWithTabs.parameters = {
  backgrounds: { default: "opaque" },
};