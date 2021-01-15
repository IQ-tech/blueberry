import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { H1, H2, H3, H4, H5, H6 } from "./index";
/* import "core/base-styles/main.styl"; */

export default {
  title: "Typography/Heading",
  component: H1,
  parameters: {
    docs: {
      description: {
        component:
          "Component for titles, the example is using the H1 component (H2, H3, H4, H5 and H6 are also available under the same api)",
      },
    },
  },
} as Meta;

const createHeaderExample = (Component, text) => {
  const Template = (args) => <Component {...args} />;

  const ExampleComponent = Template.bind({});
  ExampleComponent.args = {
    children: text,
  };

  return ExampleComponent;
};

export const HeadingOne = createHeaderExample(H1, "Heading One");
export const HeadingTwo = createHeaderExample(H2, "Heading Two");
export const HeadingThree = createHeaderExample(H3, "Heading Three");
export const HeadingFour = createHeaderExample(H4, "Heading Four");
export const HeadingFive = createHeaderExample(H5, "Heading Five");
export const HeadingSix = createHeaderExample(H6, "Heading Six");
