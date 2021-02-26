import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Tags from "./index";

//@ts-ignore
import "core/components/Tags.styl";

export default {
  title: "Components/Tags",
  component: Tags,
  parameters: {
    docs: {
      description: {
        component: `
          You need to make combinations between type and status of the same segment.
          type: bill -> billStatus
          type: provider -> providerStatus
      `,
      },
    },
  },
} as Meta;

const Template = (args) => <Tags {...args} />;

export const TagProviderConnected = Template.bind({});
TagProviderConnected.args = {
  type: "provider",
  label: "Conectado",
  providerStatus: "connected"
};

export const TagProviderPaymentActive = Template.bind({});
TagProviderPaymentActive.args = {
  type: "provider",
  label: "Pagamento ativo",
  providerStatus: "payment_active"
};

export const TagProviderConnecting = Template.bind({});
TagProviderConnecting.args = {
  type: "provider",
  label: "Aguardando conexão",
  providerStatus: "connecting"
};

export const TagProviderError = Template.bind({});
TagProviderError.args = {
  type: "provider",
  label: "Status de erro",
  providerStatus: "error"
};

export const TagProviderPendingAction = Template.bind({});
TagProviderPendingAction.args = {
  type: "provider",
  label: "Ação do usuário",
  providerStatus: "pending"
};


export const TagBillAvailable = Template.bind({});
TagBillAvailable.args = {
  type: "bill",
  label: "Disponível",
  billStatus: "available"
};

export const TagBillOverdue = Template.bind({});
TagBillOverdue.args = {
  type: "bill",
  label: "Em atraso",
  billStatus: "overdue"
};

export const TagBillAccumulated = Template.bind({});
TagBillAccumulated.args = {
  type: "bill",
  label: "Conta acumulada",
  billStatus: "accumulated"
};

export const TagBillCharge = Template.bind({});
TagBillCharge.args = {
  type: "bill",
  label: "Cobrado",
  billStatus: "charge"
};

export const TagBillPaid = Template.bind({});
TagBillPaid.args = {
  type: "bill",
  label: "Conta paga",
  billStatus: "paid"
};
