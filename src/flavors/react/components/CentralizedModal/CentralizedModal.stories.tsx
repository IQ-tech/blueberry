import React, { Fragment, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";

import CentralizedModal from "./";

//@ts-ignore
import "core/components/CentralizedModal.styl";

export default {
  title: "Components/CentralizedModal",
  component: CentralizedModal,
  parameters: {
    docs: {
      description: {
        component: `
          Esse componente disponibiliza um modal, o conteúdo dele é livre, então ao passar um children ele será renderizado dentro desse modal 
        `,
      },
    },
  },
} as Meta;

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Fragment>
      <button onClick={() => setIsOpen(true)}>abrir modal</button>

      <CentralizedModal
        {...args}
        isActive={isOpen}
        handleCloseModal={() => setIsOpen(false)}
      >
        <h1>Light – R$14,90 / mês</h1>
        <p>
          No Plano Light, suas contas são cobradas em até 4 dias antes da data
          de vencimento e não há recarga de saldo. Entenda:
        </p>

        <ol>
          <li>O plano Light possui taxa de mensalidade de R$14,90.</li>
          <li style={{ margin: "14px 0" }}>
            Seu limite não fica comprometido com a cobrança da recarga
            antecipada .
          </li>
          <li>
            Você pode pagar o equivalente a R$1.000 em contas por mês e as
            contas são pagas em até 4 dias antes da data de vencimento. .
          </li>
        </ol>
      </CentralizedModal>
    </Fragment>
  );
};

export const CentralizedModalExample = Template.bind({});
CentralizedModalExample.args = {
  isActive: true,
  handleCloseModal: () => {},
  hasOverlay: true,
  hasCloseButton: true,
};
