import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Grid from "../Grid";
import Card from "../Card";

//@ts-ignore
import "core/components/Grid.styl";
//@ts-ignore
import colors from "core/tokens/colors.json";

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
        {columns.map((spanConfig, indexColumn) => (
          <Grid.Span
            columns={spanConfig}
            key={`flexColumn-${indexRow}-${indexColumn}`}
          >
            <DemoCard label={`span cols`} />
          </Grid.Span>
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const SimpleLayoutTemplate = () => (
  <div style={{ width: "100%", backgroundColor: colors["gray-30"] }}>
    {/* Header */}
    <header style={{ backgroundColor: colors["gray-20"] }}>
      <Grid fluid>
        <Grid.Row noBottomMargin>
          <Grid.Span constant="full">
            <div style={{ padding: "20px 0" }}>Heading</div>
          </Grid.Span>
        </Grid.Row>
      </Grid>
    </header>

    <div style={{ display: "flex" }}>
      {/* Sidebar (Persistent ui region) */}
      <nav
        style={{
          alignSelf: "stretch",
          width: "200px",
          backgroundColor: colors["gray-40"],
          padding: "20px",
        }}
      >
        navbar
      </nav>

      {/* Content */}
      <Grid>
        <Grid.Row>
          <Grid.Span columns={{ desktop: 4 }}>
            <Grid.Cell>
              <Card fixedSize={{ height: "400px" }}>
                <Card.Section>First panel</Card.Section>
              </Card>
            </Grid.Cell>

            <Grid.Cell>
              <Card fixedSize={{ height: "200px" }}>
                <Card.Section>Second panel</Card.Section>
              </Card>
            </Grid.Cell>
          </Grid.Span>

          <Grid.Span columns={{ desktop: 8 }}>
            <Grid.Cell>
              <Card fixedSize={{ height: "300px" }}>
                <Card.Section>Third panel</Card.Section>
              </Card>
            </Grid.Cell>

            <Grid.Cell>
              <Card fixedSize={{ height: "300px" }}>
                <Card.Section>Fourth panel</Card.Section>
              </Card>
            </Grid.Cell>
          </Grid.Span>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

export const SimpleLayoutExample = SimpleLayoutTemplate.bind({});
