import React from "react";
//@ts-ignore
import publicInfo from "core/data/public-info.json";

const InfoSection = () => (
  <div className="footer-classic__info">
    <div className="footer-classic__container footer-classic__container--info">
      <div className="footer-classic__info-left">
        <div className="footer-classic__info-block">
          <span>{publicInfo["full-brand"]}</span>
          <span>CNPJ:{publicInfo["CNPJ"]}</span>
        </div>
        <div className="footer-classic__info-block">
          <span>{publicInfo["address"]}</span>
        </div>
      </div>
      <div className="footer-classic__info-right">
        <div className="footer-classic__info-block footer-classic__info-block--contact">
          <span>
            <strong>Atendimento</strong>
          </span>
          <span>{publicInfo["contact-email"]}</span>
        </div>
        <div className="footer-classic__info-block footer-classic__info-block--copy">
          <span>&copy; - iq - Todos os direitos reservados</span>
        </div>
      </div>
    </div>
  </div>
);

export default InfoSection;
