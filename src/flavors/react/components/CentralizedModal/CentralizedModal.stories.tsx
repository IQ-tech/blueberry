import React from "react";
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
          descrição sobre o componente aqui
        `,
      },
    },
  },
} as Meta;

const Template = (args) => <CentralizedModal {...args} />;

export const CentralizedModalExample = Template.bind({});

CentralizedModalExample.args = {
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
