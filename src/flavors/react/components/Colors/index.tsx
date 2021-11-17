import React from "react";

import colors from "../../../../core/tokens/colors.json";

const ColorPallete: React.FC = () => {
  return (
    <section className="color-pallete">
      <h1 className="color-pallete__title">
        Variáveis de cor disponíveis no Blueberry DS:
      </h1>
      <h2 className="color-pallete__tip">
        💡 Clicando no card da cor que o nome da variável é copiado pro
        clipboard
      </h2>

      <div className="color-pallete__list">
        {Object.keys(colors).map((colorName) => {
          return (
            <div
              className="color-pallete__list-item"
              onClick={() => {
                navigator.clipboard.writeText(colorName);

                setTimeout(() => {
                  alert(`Variável ${colorName} copiada com sucesso!`);
                }, 200);
              }}
            >
              <div
                className="color-block"
                style={{
                  backgroundColor: colors[colorName],
                }}
              />
              <div className="texts">
                <p>
                  <strong>Cor:</strong> {colors[colorName]}
                </p>
                <p>
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

export default ColorPallete;
