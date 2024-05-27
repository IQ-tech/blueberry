import React from "react";
import { getAbsoluteLink } from "../helpers";

const AddBillsButton = () => {
  return (
    <a
      href={getAbsoluteLink("/app/encontrar-servicos/")}
      className="header-cp__add-new-bill-button"
    >
      <svg viewBox="0 0 19 22" className="bills">
        <g fill="currentColor">
          <path d="M4.513 4.513h11.369v8.52h1.42v-9.23a.71.71 0 00-.71-.71H3.802a.71.71 0 00-.71.71v14.994c0 .393.318.71.71.71h6.64v-1.42h-5.93V4.513z" />
          <path d="M1.671 15.205V1.67h10.895v.93h1.42V.962a.71.71 0 00-.71-.711H.961A.71.71 0 00.25.96v14.955c0 .393.318.71.71.71h2.65v-1.42H1.67z" />
          <path d="M6.645 7.767h6.338a.71.71 0 000-1.42H6.645a.71.71 0 000 1.42zm0 2.843h6.338a.71.71 0 000-1.422H6.645a.71.71 0 000 1.421zm0 2.784h2.804a.71.71 0 000-1.422H6.645a.71.71 0 000 1.422zm5.447 4.004v1.23h2.464v2.464h1.231v-2.464h2.463v-1.23h-2.463v-2.464h-1.231v2.464z" />
        </g>
      </svg>
      <p>Adicionar nova conta</p>
      <svg viewBox="0 0 20 16" id="ia-arrow-right" className="arrow">
        <path
          d="M10.922 14.989l6.317-6.27H0V7.281h17.239l-6.317-6.27L11.941 0 20 8l-8.06 8z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
};

export default AddBillsButton;
