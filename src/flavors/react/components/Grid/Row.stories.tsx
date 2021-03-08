import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Grid, { RowProps } from "../Grid";

//@ts-ignore
import "core/components/Grid.styl";

export default {
  title: "Components/Layout/Row",
  component: Grid.Row,
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
  <Grid prototyping>
    <Grid.Row {...args}>
      <Grid.Span columns={{ phone: 2, tablet: 5, desktop: 3 }}>
        <DemoCard label="column" />
      </Grid.Span>
      <Grid.Span columns={{ phone: 2, tablet: 5, desktop: 3 }}>
        <DemoCard label="column" />
      </Grid.Span>
    </Grid.Row>
  </Grid>
);

export const Fixed = Template.bind({});
Fixed.args = {
  wrap: true,
};
