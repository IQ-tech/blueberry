import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Grid, { GridProps, ColumnProps } from "../Grid";

//@ts-ignore
import "core/components/Grid.styl";

const testRowsAndColumns = [
  [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
  [
    { phone: 2, tablet: 3, desktop: "half" },
    { phone: 2, tablet: 5, desktop: 5 },
  ],
];

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
  argTypes: {
    testingRowsAndColumns: {
      control: {
        type: "object",
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

const Template = ({ testingRowsAndColumns = [], ...args }) => (
  <Grid {...args}>
    {testingRowsAndColumns.map((columns = [], indexRow) => (
      <Grid.Row key={`grid-row-${indexRow}`}>
        {columns.map((column = {}, indexColumn) => (
          <Grid.Column
            {...column}
            key={`flexColumn-${indexRow}-${indexColumn}`}
          >
            <DemoCard label="column" />
          </Grid.Column>
        ))}
      </Grid.Row>
    ))}
  </Grid>
);

export const Fixed = Template.bind({});
Fixed.args = {
  fluid: false,
  prototyping: true,
  testingRowsAndColumns: testRowsAndColumns,
};

export const Fluid = Template.bind({});
Fluid.args = {
  fluid: true,
  prototyping: true,
  testingRowsAndColumns: testRowsAndColumns,
};
