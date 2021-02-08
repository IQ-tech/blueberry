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
      source: {
        type: "code",
      },
    },
  },
} as Meta;

const DemoCard = ({ label }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "50px",
    }}
  >
    {label}
  </div>
);

const Template = (args) => (
  <FlexGrid {...args}>
    <FlexGrid.Row>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
        <FlexGrid.Column key={`flexColumn-${number}`}>
          <DemoCard label="column" />
        </FlexGrid.Column>
      ))}
    </FlexGrid.Row>

    <FlexGrid.Row>
      <FlexGrid.Column phone={2} tablet={3} desktop={"half"}>
        <DemoCard label="column" />
      </FlexGrid.Column>

      <FlexGrid.Column phone={2} tablet={5} desktop={5}>
        <DemoCard label="column" />
      </FlexGrid.Column>
    </FlexGrid.Row>

    <FlexGrid.Row>
      <FlexGrid.Column>
        <DemoCard label="column" />
      </FlexGrid.Column>
    </FlexGrid.Row>
  </FlexGrid>
);

export const Fixed = Template.bind({});
Fixed.args = {
  fluid: false,
  prototyping: true,
};

export const Fluid = Template.bind({});
Fluid.args = {
  fluid: true,
  prototyping: true,
};
