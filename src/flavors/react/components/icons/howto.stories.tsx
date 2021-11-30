import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import * as IconsFilled from "./generated/filled";
import * as IconsMisc from "./generated/misc";
import * as IconsOutline from "./generated/outline";
import PresentationComponentWithClick from "./PresentationComponentWithClick";

//Dados dos itens a serem mostrados
const dataSection = [
  {
    title: "Filled Icons",
    iconsList: IconsFilled,
  },
  {
    title: "Misc Icons",
    iconsList: IconsMisc,
  },
  {
    title: "Outline Icons",
    iconsList: IconsOutline,
  },
];

const dataInfo = {
  titlePage: "Como usar os ícones?",
};

const Icon = () => {
  return <h2>Import Icons</h2>;
};

export default {
  title: "icons/howto",
  component: Icon,
  parameters: {
    options: { showPanel: false },
    docs: {
      description: {
        component: "Como usar",
      },
      source: {
        type: "dynamic",
      },
    },
  },
} as Meta;

const Template = () => {
  return (
    <PresentationComponentWithClick
      infoDocumentation={dataInfo}
      sectionsIcons={dataSection}
    />
  );
};

export const HowToImportIcons = Template.bind({});
