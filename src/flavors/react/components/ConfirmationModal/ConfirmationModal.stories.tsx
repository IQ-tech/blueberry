import React, { Fragment, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";

import ConfirmationModal from ".";

//@ts-ignore
import "core/components/ConfirmationModal.styl";

export default {
  title: "Components/ConfirmationModal",
  component: ConfirmationModal,
  parameters: {
    docs: {
      description: {
        component: `
          Esse modal é usado quando precisar confirmar ou cancelar uma ação do usuário
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

      <ConfirmationModal
        {...args}
        isActive={isOpen}
        handleDangerButton={() => alert("imagens deletadas")}
        handleButton={() => setIsOpen(false)}
        handleCloseModal={() => setIsOpen(false)}
      />
    </Fragment>
  );
};

export const ConfirmationModalExample = Template.bind({});
ConfirmationModalExample.args = {
  title: "Tem certeza que deseja deletar as imagens?",
  text:
    "Novas imagens do documento serão necessárias para darmos continuidade.",
  isActive: true,
  handleDangerButton: () => {},
  handleButton: () => {},
  handleCloseModal: () => {},
  dangerButtonText: "Deletar imagens",
  buttonText: "Cancelar",
  hasOverlay: true,
  hasCloseButton: true,
};
