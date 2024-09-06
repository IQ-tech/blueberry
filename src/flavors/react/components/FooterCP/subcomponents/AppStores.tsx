import React from "react";

const AppStores = () => (
  <div className="footer-cp__links-group">
    <h2 className="footer-cp__title">Baixe nosso aplicativo</h2>
    <ul className="footer-cp__links-list">
      <li>
        <a
          href="https://consumidorpositivo.onelink.me/3ote/x1wo22j1"
          target="_blank"
        >
          <img
            className="footer-cp__image"
            src="https://www.consumidorpositivo.com.br/images/download-play-store.svg"
            alt="Link para baixar o app na Play Store"
            loading="lazy"
            width="205px"
            height="64px"
          />
        </a>
      </li>
      <li>
        <a
          href="https://consumidorpositivo.onelink.me/3ote/x1wo22j1"
          target="_blank"
        >
          <img
            className="footer-cp__image"
            src="https://www.consumidorpositivo.com.br/images/download-app-store.svg"
            alt="Link para baixar o app na App Store"
            loading="lazy"
            width="205px"
            height="64px"
          />
        </a>
      </li>
    </ul>
  </div>
);

export default AppStores;
