import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Tooltip from "./index";
import OutlineQuestion from "../icons/generated/outline/OutlineQuestion";
import FlexGrid from "../FlexGrid";

//@ts-ignore
import "core/components/Tooltyp.styl";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: "Default tooltip component",
      },
    },
  },
} as Meta;

const Template = (args) => 
<FlexGrid>
  <FlexGrid.Row>&nbsp;</FlexGrid.Row>
  <FlexGrid.Row>&nbsp;</FlexGrid.Row>
  <FlexGrid.Row>&nbsp;</FlexGrid.Row>
  <FlexGrid.Row>&nbsp;</FlexGrid.Row>
  <FlexGrid.Row>&nbsp;</FlexGrid.Row>
  <FlexGrid.Row>&nbsp;</FlexGrid.Row>
  <FlexGrid.Row>&nbsp;</FlexGrid.Row>
  <FlexGrid.Row>
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center'}}>
      <Tooltip 
        {...args} 
        >
        <OutlineQuestion />
      </Tooltip>
    </div>
  </FlexGrid.Row>
</FlexGrid>;

export const Top = Template.bind({});
Top.args = {
  title: "Tooltip Top",
  placement: "top",
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore...",
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  title: "Tooltip Top Left",
  placement: "topLeft",
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore...",
};

export const Left = Template.bind({});
Left.args = {
  title: "Tooltip",
  placement: "left",
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore...",
};

export const Right = Template.bind({});
Right.args = {
  placement: "right",
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore..."
};

export const Bottom = Template.bind({});
Bottom.args = {
  placement: "bottom",
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore..."
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  placement: "bottomLeft",
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore..."
};

export const ColorLight = Template.bind({});
ColorLight.args = {
  placement: "top",
  color:"light",
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore..."
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Only Title",
  placement: "top",
  color:"light",
};

