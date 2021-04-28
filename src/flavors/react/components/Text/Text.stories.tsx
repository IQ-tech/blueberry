import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Text from "./index";
import "core/components/Text.styl";

export default {
  title: "Components/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component: "Component for titles and other body texts",
      },
    },
  },
} as Meta;

const Template = (args) => <Text {...args} />;

// headings
export const HeadingOne = Template.bind({});
HeadingOne.args = {
  children: "Heading one",
  variant: "heading-one",
  as: "h1",
};

export const HeadingTwo = Template.bind({});
HeadingTwo.args = {
  children: "Heading two",
  variant: "heading-two",
  as: "h2",
};

export const HeadingThree = Template.bind({});
HeadingThree.args = {
  children: "Heading three",
  variant: "heading-three",
  as: "h3",
};

export const HeadingFour = Template.bind({});
HeadingFour.args = {
  children: "Heading four",
  variant: "heading-four",
  as: "h4",
};

export const HeadingFive = Template.bind({});
HeadingFive.args = {
  children: "Heading five",
  variant: "heading-five",
  as: "h5",
};
export const HeadingSix = Template.bind({});
HeadingSix.args = {
  children: "Heading six",
  variant: "heading-six",
  as: "h6",
};

// Body text
export const BodyLarge = Template.bind({});
BodyLarge.args = {
  children: "Body Large",
  variant: "body-large",
  as: "p",
};
export const BodyMedium = Template.bind({});
BodyMedium.args = {
  children: "body medium",
  variant: "body-medium",
  as: "p",
};
export const BodySmall = Template.bind({});
BodySmall.args = {
  children: "body small",
  variant: "body-small",
  as: "p",
};
export const BodyMicro = Template.bind({});
BodyMicro.args = {
  children: "body micro",
  variant: "body-micro",
  as: "p",
};

// Numbers
export const NumberLarge = Template.bind({});
NumberLarge.args = {
  children: "Number Large",
  variant: "number-large",
  as: "span",
};

export const NumberMedium = Template.bind({});
NumberMedium.args = {
  children: "Number medium",
  variant: "number-medium",
  as: "span",
};

export const NumberSmall = Template.bind({});
NumberSmall.args = {
  children: "Number small",
  variant: "number-small",
  as: "span",
};

export const NumberMicro = Template.bind({});
NumberMicro.args = {
  children: "Number micro",
  variant: "number-micro",
  as: "span",
};

export const DynamicVariant = Template.bind({});
DynamicVariant.args = {
  children: "Dynamic variant",
  variant: { default: "body-medium", aboveSmall: "heading-six" },
  as: "p",
};
