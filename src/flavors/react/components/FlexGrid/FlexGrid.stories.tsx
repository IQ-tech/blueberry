import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import FlexGrid from "../FlexGrid";

//@ts-ignore
import "core/base-styles/main.styl";
import "core/components/FlexGrid.styl";

export default {
  title: "Components/Layout/FlexGrid",
  component: FlexGrid,
  parameters: {
    docs: {
      description: {
        component: "Flex layout defs",
      },
    },
  },
} as Meta;

const Template = (args) => (
  <FlexGrid {...args}>
    <FlexGrid.Row>
      <FlexGrid.Column>
        <p>test</p>
      </FlexGrid.Column>
    </FlexGrid.Row>
  </FlexGrid>
);

export const Default = Template.bind({});
Default.args = {
  fluid: false,
  prototyping: true,
};
