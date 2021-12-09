import React from "react";

import breakpointData from "./data";

const Breakpoints: React.FC = () => {
  return (
    <section className="breakpoints-page">
      <h1 className="breakpoints-page__title">Breakpoints do Blueberry DS</h1>
      <h2 className="breakpoints-page__subtitle">
        Temos cinco breakpoints no Design System. Eles são definidos com base na
        largura <strong>mínima</strong> da tela. Por isso, o prefixo que usamos
        é o <strong>above</strong> (maior que...). São eles:
      </h2>

      <div className="breakpoints-page__list">
        {breakpointData.data.map(({ name, screen, point, code, slug }) => {
          return (
            <div className="breakpoints-page__list-item" key={slug}>
              <h3>{name}</h3>
              <div className="breakpoints-page__list-item__info">
                <p>
                  <strong>Tamanho da tela:</strong> Para intervalo de{screen}
                </p>
                <p>
                  <strong>Breakpoint:</strong> {point}
                </p>
              </div>
              <button
                className="button"
                onClick={() => {
                  navigator.clipboard.writeText(code);

                  setTimeout(() => {
                    alert(`Media query de ${name} copiada com sucesso!`);
                  }, 200);
                }}
              >
                Copiar media query
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Breakpoints;
