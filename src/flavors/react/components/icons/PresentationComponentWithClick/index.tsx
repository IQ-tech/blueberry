import React from "react";

import "./style.styl";

//Gerando section icons
const SectionIcons = ({ Icons }) => {
  const iconsNames = Object.keys({ ...Icons });

  const generateMessage = (iconName) => {
    return `import ${iconName} from "iq-blueberry/dist/reactIcons/${iconName}"`;
  };

  return (
    <ul className="howto-list-icons">
      {iconsNames.map((iconName, index) => {
        const IconComponent = Icons[iconName];
        return (
          <li
            className="howto-list-icons__container"
            key={`icon-${iconName}-${index}`}
            onClick={() => {
              navigator.clipboard.writeText(generateMessage(iconName));

              setTimeout(() => {
                alert(`Ícone ${iconName} copiado com sucesso!`);
              }, 200);
            }}
          >
            <div className="howto-container__icon">
              <div className="howto-icon__wrapper">
                <IconComponent />
              </div>
              <p className="howto-icon__text">{iconName}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const PresentationComponentWithClick = ({
  infoDocumentation,
  sectionsIcons,
}) => {
  return (
    <>
      <section className="howto-section__container">
        <h1 className="howto-section__title">{infoDocumentation.titlePage}</h1>
        <p className="howto-section__paragraph">
          É uma pergunta que talvez não venha frequentemente, por que
          normalmente os ícones são utilizados no componente buttons. Mas há uma
          forma de utilizar os ícones dentro de qualquer elemento, seja uma
          âncora, texto simples ou mesmo um container.
        </p>
        <p className="howto-section__paragraph">
          Bom, sabendo do seu motivo, vamos a parte interessante, como utilizar?
          Para isso basta usar o importe dele, da seguinte maneira:
        </p>
        <code className="howto-section__code-text">
          import [NomeDoIcone] from "iq-blueberry/dist/reactIcons/[NomeDoIcone]"
        </code>
        <p className="howto-section__paragraph">
          Para usar dentro do React JS, basta utiliza-lo como se fosse um
          componente, seguindo o exemplo abaixo:{" "}
        </p>
        <code className="howto-section__code-text">{"<[NomeDoIcone] />"}</code>
        <p className="howto-section__paragraph">
          💡 Clique em cima do ícone desejado para copiar o import.
        </p>
      </section>
      {sectionsIcons.map((section, index) => {
        return (
          <section key={index}>
            <h2 className="howto-section__title-section">{section.title}</h2>
            <SectionIcons Icons={section.iconsList} />
          </section>
        );
      })}
    </>
  );
};

export default PresentationComponentWithClick;
