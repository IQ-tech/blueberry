import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Accordion from "./index";

//@ts-ignore
import "core/components/Accordion.styl";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: "Accordion component",
      },
      source: {
        type: "code",
      },
    },
  },
} as Meta;

const Template = (args) => (
  <Accordion {...args}>
    <Accordion.Item titleChildren="title one">test</Accordion.Item>
    <Accordion.Item titleChildren="title two">test 2</Accordion.Item>
    <Accordion.Item titleChildren="title three">test 3</Accordion.Item>
    <Accordion.Item titleChildren="title four">test 4</Accordion.Item>
  </Accordion>
);

export const AccordionBasic = Template.bind({});

/* 
export const BlankCard = Template.bind({});
BlankCard.args = {
  children: "My Card",
  fixedSize: { width: "400px", height: "200px" },
  dark: false,
};
BlankCard.parameters = {
  backgrounds: { default: "opaque" },
};
 */
