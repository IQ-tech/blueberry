import React from "react";

import data from "./data";

const Breakpoints: React.FC = () => {
  return (
    <section className="breakpoints-page">
      <h1 className="breakpoints-page__title">Breakpoints do Blueberry DS</h1>
      <h2 className="breakpoints-page__subtitle">
        Temos seis breakpoints no Design System. Eles são definidos com base na
        largura <strong>mínima</strong> da tela. O prefixo que usamos é above,
        então o intervalo de tamanhos considerado será maior que o breakpoint
        mínimo definido. São eles:
      </h2>

      <div className="breakpoints-page__list">
        {data.map(
          (
            name: string,
            screen: string,
            point: string,
            code: string,
            slug: string
          ) => {
            return (
              <div className="breakpoints-page__list-item" key={slug}>
                <h3>{name}</h3>
                <div className="breakpoints-page__list-item__info">
                  <p>Uso: Para telas com largura de {screen}</p>
                  <p>Breakpoint : {point}</p>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(code);

                    setTimeout(() => {
                      alert(`Media query de ${name} copiada com sucesso`);
                    }, 200);
                  }}
                >
                  Copiar media query
                </button>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Breakpoints;
