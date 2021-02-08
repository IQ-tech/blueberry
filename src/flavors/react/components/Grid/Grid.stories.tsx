import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Grid, { GridProps } from "../Grid";

//@ts-ignore
import "core/base-styles/main.styl";
import "core/components/Grid.styl";

export default {
  title: "Components/Layout/Grid",
  component: Grid,
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
      fontFamily: "Open Sans",
      fontSize: "13px",
      color: "white",
    }}
  >
    {label}
  </div>
);

const Template: Story<GridProps> = (args) => (
  <Grid {...args}>
    <Grid.Row>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
        <Grid.Column key={`flexColumn-${number}`}>
          <DemoCard label="column" />
        </Grid.Column>
      ))}
      <Grid.Column desktop="full">
        <DemoCard label="column" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column phone={2} tablet={3} desktop={"half"}>
        <DemoCard label="column" />
      </Grid.Column>

      <Grid.Column phone={2} tablet={5} desktop={5}>
        <DemoCard label="column" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <DemoCard label="column" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
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
