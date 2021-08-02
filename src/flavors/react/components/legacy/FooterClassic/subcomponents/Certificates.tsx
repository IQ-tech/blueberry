import React from "react";

const Certificates = () => (
  <div className="footer-classic__certificates">
    <h2 className="footer-classic__certificates-title">Certificados</h2>
    <div className="footer-classic__certificates-wrap">
			<div className="footer-classic__certificates-image">
				<img
					src="https://static.iq360.com.br/images/certificates/ssl.svg" 
					alt="SSL Blindado"
					loading="lazy"
					width="74px"
					height="53px"
				/>
			</div>
			<div className="footer-classic__certificates-image">
				<img
					src="https://static.iq360.com.br/images/certificates/reclame-aqui.svg" 
					alt="Ótimo Reclame Aqui!"
					loading="lazy"
					width="59px"
					height="60px"
				/>
			</div>
			<div className="footer-classic__certificates-image">
				<img
					src="https://static.iq360.com.br/images/certificates/pci.svg" 
					alt="PCI"
					loading="lazy"
					width="84px"
					height="36px"
				/>
			</div>
    </div>
  </div>
);

export default Certificates;
