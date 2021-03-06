import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Tooltip from "./index";


//@ts-ignore
import "core/components/Tooltip.styl";

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
<div className="tooltip-wrapper">
  <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '200px'}}>
    <Tooltip 
      {...args} 
    />
  </div>
</div>;

export const Top = Template.bind({});
Top.args = {
  title: "Tooltip Top",
  placement: "top",
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore...",
  tooltipContainer: ".tooltip-wrapper",
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  title: "Tooltip Top Left",
  placement: "topLeft",
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore...",
  tooltipContainer: ".tooltip-wrapper",
};

export const Left = Template.bind({});
Left.args = {
  title: "Tooltip",
  placement: "left",
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore...",
  tooltipContainer: ".tooltip-wrapper",
};

export const Right = Template.bind({});
Right.args = {
  placement: "right",
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore...",
  tooltipContainer: ".tooltip-wrapper",
};

export const Bottom = Template.bind({});
Bottom.args = {
  placement: "bottom",
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore...",
  tooltipContainer: ".tooltip-wrapper",
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  placement: "bottomLeft",
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore...",
  tooltipContainer: ".tooltip-wrapper",
};

export const ColorLight = Template.bind({});
ColorLight.args = {
  placement: "top",
  color:"light",
  title: "Tooltip Top Light",
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore...",
  tooltipContainer: ".tooltip-wrapper",
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Only Title",
  placement: "top",
  color:"light",
  tooltipContainer: ".tooltip-wrapper",
};

export const ClickTooltip = Template.bind({});
ClickTooltip.args = {
  title: "Tooltip Click",
  placement: "top",
  trigger: ['click'],
  desc: "Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lore...",
  tooltipContainer: ".tooltip-wrapper",
};
