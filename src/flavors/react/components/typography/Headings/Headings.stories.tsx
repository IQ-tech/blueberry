import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { H1, H2, H3, H4, H5, H6 } from "./index";

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

export const HeadingOne = createHeaderExample(H1, "secondary title");
export const HeadingTwo = createHeaderExample(H2, "secondary title");
export const HeadingThree = createHeaderExample(H3, "secondary title");
export const HeadingFour = createHeaderExample(H4, "secondary title");
export const HeadingFive = createHeaderExample(H5, "secondary title");
export const HeadingSix = createHeaderExample(H6, "secondary title");
