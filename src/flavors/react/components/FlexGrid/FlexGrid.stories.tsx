import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import FlexGrid from "../FlexGrid";
import Card from "../Card";

//@ts-ignore
import "core/components/FlexGrid.styl";
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
  <FlexGrid {...args}>
    {testingRowsAndColumns.map((columns = [], indexRow) => (
      <FlexGrid.Row key={`grid-row-${indexRow}`}>
        {columns.map((spanConfig, indexColumn) => (
          <FlexGrid.Span
            columns={spanConfig}
            key={`flexColumn-${indexRow}-${indexColumn}`}
          >
            <DemoCard label={`span cols`} />
          </FlexGrid.Span>
        ))}
      </FlexGrid.Row>
    ))}
  </FlexGrid>
);

export const Fixed = Template.bind({});
Fixed.args = {
  fluid: false,
  prototyping: true,
  testingRowsAndColumns: testRowsAndColumns,
  noOuterSpacing: false
};

export const Fluid = Template.bind({});
Fluid.args = {
  fluid: true,
  prototyping: true,
  testingRowsAndColumns: testRowsAndColumns,
  noOuterSpacing: false
};


const SimpleLayoutTemplate = () => (
  <div style={{ width: "100%", backgroundColor: colors["gray-30"] }}>
    {/* Header */}
    <header style={{ backgroundColor: colors["gray-20"] }}>
      <FlexGrid fluid>
        <FlexGrid.Row noBottomMargin>
          <FlexGrid.Span constant="full">
            <div style={{ padding: "20px 0" }}>Heading</div>
          </FlexGrid.Span>
        </FlexGrid.Row>
      </FlexGrid>
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
      <FlexGrid>
        <FlexGrid.Row>
          <FlexGrid.Span columns={{ desktop: 4 }}>
            <FlexGrid.Cell>
              <Card fixedSize={{ height: "400px" }}>
                <Card.Section>First panel</Card.Section>
              </Card>
            </FlexGrid.Cell>

            <FlexGrid.Cell>
              <Card fixedSize={{ height: "200px" }}>
                <Card.Section>Second panel</Card.Section>
              </Card>
            </FlexGrid.Cell>
          </FlexGrid.Span>

          <FlexGrid.Span columns={{ desktop: 8 }}>
            <FlexGrid.Cell>
              <Card fixedSize={{ height: "300px" }}>
                <Card.Section>Third panel</Card.Section>
              </Card>
            </FlexGrid.Cell>

            <FlexGrid.Cell>
              <Card fixedSize={{ height: "300px" }}>
                <Card.Section>Fourth panel</Card.Section>
              </Card>
            </FlexGrid.Cell>
          </FlexGrid.Span>
        </FlexGrid.Row>
      </FlexGrid>
    </div>
  </div>
);

export const SimpleLayoutExample = SimpleLayoutTemplate.bind({});
