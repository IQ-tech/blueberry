
// this is a generated file, don't modify manually

import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Icon from "../../index";
import * as Icons from "./index";
import PresentationComponent from "../../PresentationComponent"

//@ts-ignore
import "core/components/Icon.styl";

export default {
  title: "icons/filled",
  component: Icon,
  parameters: {
		options: { showPanel: false },
    docs: {
      description: {
        component: "filled icons",
      },
      source: {
        type: "dynamic",
      },
    },
  },
} as Meta;

const Template = () => {
  const iconsNames = Object.keys({ ...Icons });

  return (
		<PresentationComponent Icons={Icons} />
  );
};

export const IconsList = Template.bind({});
