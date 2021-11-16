import React from "react";

import colors from "../../../../core/tokens/colors.json";

const ConfirmationModal: React.FC = () => {
  return (
    <section>
      <h1
        style={{ textAlign: "center", fontSize: "28px", marginBottom: "60px" }}
      >
        Variáveis de cor disponíveis no Blueberry DS:
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "20px auto",
          maxWidth: "1300px",
        }}
      >
        {Object.keys(colors).map((colorName) => {
          return (
            <div
              style={{
                alignItems: "center",
                display: "flex",
                margin: "15px 0",
                width: "28%",
              }}
              onClick={() => {
                navigator.clipboard.writeText(colorName);

                setTimeout(() => {
                  alert(`Variável ${colorName} copiada com sucesso!`);
                }, 200);
              }}
            >
              <div
                style={{
                  backgroundColor: colors[colorName],
                  border: "1px solid #7c7575",
                  height: "30px",
                  width: "50px",
                }}
              />
              <div style={{ fontFamily: "Open Sans", marginLeft: "20px" }}>
                <p style={{ margin: "0" }}>
                  <strong>Cor:</strong> {colors[colorName]}
                </p>
                <p style={{ margin: "0" }}>
                  <strong>Variável:</strong> {colorName}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ConfirmationModal;
