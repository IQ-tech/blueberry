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

//Dados das informações da sessão
const dataInfo = {
  titlePage: "Como usar os ícones?",
  description: [
    {
      tag: "p",
      classNameTag: "howto-section__paragraph",
      information:
        "É uma pergunta que talvez não venha frequentemente, por que normalmente os ícones são utilizados no componente buttons. Mas há uma forma de utilizar os ícones dentro de qualquer elemento, seja uma âncora, texto simples ou mesmo um container.",
    },
    {
      tag: "p",
      classNameTag: "howto-section__paragraph",
      information:
        "Bom, sabendo do seu motivo, vamos a parte interessante, como utilizar? Para isso basta usar o importe dele, da seguinte maneira:",
    },
    {
      tag: "code",
      classNameTag: "howto-section__code-text",
      information: `import [NomeDoIcone] from "iq-blueberry/dist/reactIcons/[NomeDoIcone]"`,
    },
    {
      tag: "p",
      classNameTag: "howto-section__paragraph",
      information:
        "Para usar dentro do React JS, basta utiliza-lo como se fosse um componente, seguindo o exemplo abaixo: ",
    },
    {
      tag: "code",
      classNameTag: "howto-section__code-text",
      information: `<[NomeDoIcone] />`,
    },
    {
      tag: "p",
      classNameTag: "howto-section__paragraph",
      information: "💡 Clique em cima do ícone desejado para copiar o import.",
    },
  ],
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
