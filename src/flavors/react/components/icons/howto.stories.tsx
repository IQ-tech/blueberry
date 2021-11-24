import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import * as IconsFilled from "./generated/filled";
import * as IconsMisc from "./generated/misc";
import * as IconsOutline from "./generated/outline";
import PresentationComponentWithClick from "./PresentationComponentWithClick";

//Data
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

//Gerar da sessão dos ícones
const TemplateSection = ({ IconsSection, titleSection }) => {
  const title = {
    margin: "15px 0 20px 0",
    fontFamily: "Open Sans",
    fontSize: "24px",
    fontWeight: 700,
  };
  return (
    <section>
      <h2 style={title}>{titleSection}</h2>
      <PresentationComponentWithClick Icons={IconsSection} />
    </section>
  );
};

//Criar a página
const HowToIcons = () => {
  const titlePage = {
    textAlign: "center" as "center",
    width: "100%",
    margin: "0 0 20px 0",
    fontFamily: "Open Sans",
    fontSize: "28px",
  };

  const textParagraph = {
    fontFamily: "Open Sans",
    fontSize: "16px",
    lineHeight: "26px",
    marginBottom: "14px",
    textIndent: "25px",
  };

  const textCode = {
    fontFamily: "Open Sans",
    fontSize: "16px",
    lineHeight: "26px",
    marginLeft: "25px",
    backgroundColor: "#EBEBF0",
    padding: "4px 8px",
    fontStyle: "italic",
  };

  return (
    <section>
      <h1 style={titlePage}>Como usar os ícones?</h1>
      <p style={textParagraph}>
        É uma pergunta que talvez não venha frequentemente, por que normalmente
        os ícones são utilizados no componente buttons. Mas há uma forma de
        utilizar os ícones dentro de qualquer elemento, seja uma âncora, texto
        simples ou mesmo um container.
      </p>
      <p style={textParagraph}>
        Bom, sabendo do seu motivo, vamos a parte interessante, como utilizar?
        Para isso basta usar o importe dele, da seguinte maneira:
        <br />
      </p>
      <code style={textCode}>
        import NomeDoIcone from "iq-blueberry/dist/reactIcons/NomeDoIcone"
      </code>
      <br />
      <p style={textParagraph}>
        Mas caso não queira fazer esse importe, pode clicar em cima dos ícones
        abaixo para realizar o copiar desse mesmo caminho.
      </p>
      {dataSection.map((section, index) => {
        return (
          <TemplateSection
            titleSection={section.title}
            IconsSection={section.iconsList}
            key={`#section-${index}`}
          />
        );
      })}
    </section>
  );
};

const Template = () => {
  return <HowToIcons />;
};

export const IconsList = Template.bind({});
