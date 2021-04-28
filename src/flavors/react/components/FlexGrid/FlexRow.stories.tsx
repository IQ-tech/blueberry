import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import FlexGrid, { RowProps } from "../FlexGrid";

//@ts-ignore
import "core/components/FlexGrid.styl";

export default {
  title: "Components/Layout/FlexGridRow",
  component: FlexGrid.Row,
  parameters: {
    docs: {
      description: {
        component: "Flex layout defs",
      },
    },
  },
  argTypes: {
    fluid: {
      control: "boolean",
    },
    order: {
      control: "number",
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
      fontFamily: "Open Sans",
      fontSize: "13px",
      color: "white",
    }}
  >
    {label}
  </div>
);

const Template: Story<RowProps> = (args) => (
  <FlexGrid prototyping>
    <FlexGrid.Row {...args}>
      <FlexGrid.Span columns={{ phone: 2, tablet: 5, desktop: 3 }}>
        <DemoCard label="column" />
      </FlexGrid.Span>
      <FlexGrid.Span columns={{ phone: 2, tablet: 5, desktop: 3 }}>
        <DemoCard label="column" />
      </FlexGrid.Span>
    </FlexGrid.Row>
  </FlexGrid>
);

export const Fixed = Template.bind({});
Fixed.args = {
  wrap: true,
};
