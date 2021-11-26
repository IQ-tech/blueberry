import React from "react";

import "./style.styl";

//Gerando section items
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

const InfoDescriptionPage = ({ tag, classNameTag, info }) => {
  return React.createElement(
    tag,
    {
      class: classNameTag,
    },
    info
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
        {infoDocumentation.description.map((paragraph, index) => {
          return (
            <InfoDescriptionPage
              key={index}
              tag={paragraph.tag}
              classNameTag={paragraph.classNameTag}
              info={paragraph.information}
            />
          );
        })}
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
