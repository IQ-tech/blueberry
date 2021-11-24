import React from "react";

const PresentationComponentWithClick = ({ Icons }) => {
  const iconsNames = Object.keys({ ...Icons });

  const generateMessage = (iconName) => {
    return `import ${iconName} from "iq-blueberry/dist/reactIcons/${iconName}"`;
  };

  const containerWrapperIcons = {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    width: "100%",
  };

  const containerIcon = {
    width: "80px",
    margin: "25px",
    cursor: "pointer",
  };

  return (
    <div style={containerWrapperIcons}>
      {iconsNames.map((iconName, index) => {
        const IconComponent = Icons[iconName];
        return (
          <div
            style={containerIcon}
            key={`icon-${iconName}-${index}`}
            onClick={() => {
              navigator.clipboard.writeText(generateMessage(iconName));

              setTimeout(() => {
                alert(`Ícone ${iconName} copiado com sucesso!`);
              }, 200);
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "5px",
                }}
              >
                <IconComponent />
              </div>
              <p
                style={{
                  fontSize: "12px",
                  display: "block",
                  textAlign: "center",
                  wordWrap: "break-word",
                  fontFamily: "'Courier New', monospace",
                  width: "100%",
                }}
              >
                {iconName}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PresentationComponentWithClick;
