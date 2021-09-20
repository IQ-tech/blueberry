import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import AutocompleteField from "./index";

//@ts-ignore
import "core/components/Form.styl";

export default {
  title: "Components/form/AutocompleteField",
  component: AutocompleteField,
  parameters: {
    docs: {
      description: {
        component: `Default input`,
      },
    },
  },
} as Meta;

const Template = (args) => {
  return (
    <div style={{ width: "60%", maxWidth: "350px" }}>
      <AutocompleteField {...args} />
    </div>
  );
};

export const OpenSuggestionsOnFocusInput = Template.bind({});
OpenSuggestionsOnFocusInput.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  /* value: "1", */
  label: "Simple field",
  onChange: (e) => console.log(e),
  placeholder: "Type something",
  options: [
    { value: "1", label: "Acre" },
    { value: "Alagoas", label: "Alagoas" },
    { value: "Amapá", label: "Amapá" },
    { value: "Amazonas", label: "Amazonas" },
    { value: "Bahia", label: "Bahia" },
    { value: "Ceará", label: "Ceará" },
    { value: "Distrito Federal", label: "Distrito Federal" },
    { value: "Espírito Santo", label: "Espírito Santo" },
    { value: "Goiás", label: "Goiás" },
    { value: "Maranhão", label: "Maranhão" },
    { value: "Mato Grosso", label: "Mato Grosso" },
    { value: "Mato Grosso do Sul", label: "Mato Grosso do Sul" },
    { value: "Minas Gerais", label: "Minas Gerais" },
    { value: "Pará", label: "Pará" },
    { value: "Paraíba", label: "Paraíba" },
    { value: "Paraná", label: "Paraná" },
    { value: "Pernambuco", label: "Pernambuco" },
    { value: "Piauí", label: "Piauí" },
    { value: "Rio de Janeiro", label: "Rio de Janeiro" },
    { value: "Rio Grande do Norte", label: "Rio Grande do Norte" },
    { value: "Rio Grande do Sul", label: "Rio Grande do Sul" },
    { value: "Rondônia", label: "Rondônia" },
    { value: "Roraima", label: "Roraima" },
    { value: "Santa Catarina", label: "Santa Catarina" },
    { value: "São Paulo", label: "São Paulo" },
    { value: "Sergipe", label: "Sergipe" },
    { value: "Tocantins", label: "Tocantins" },
  ],
  /* modifyOptions: (value, option) =>
    value === "teste" && option.value === "potato" ? null : option, */
};

export const MandatoryChoiceInput = Template.bind({});
MandatoryChoiceInput.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  suggestionUse: "mandatory",
  label: "Mandatory option choice",
  onChange: (e) => console.log(e),
  placeholder: "Type something",
  options: [
    { value: "Maranhão", label: "Maranhão" },
    { value: "Mato Grosso", label: "Mato Grosso" },
    { value: "Mato Grosso do Sul", label: "Mato Grosso do Sul" },
    { value: "Minas Gerais", label: "Minas Gerais" },
    { value: "Pará", label: "Pará" },
    { value: "Paraíba", label: "Paraíba" },
    { value: "Paraná", label: "Paraná" },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  invalid: false,
  optional: false,
  required: true,
  suggestionUse: "mandatory",
  label: "Mandatory option choice",
  onChange: (e) => console.log(e),
  placeholder: "Type something",
  options: [
    { value: "Maranhão", label: "Maranhão" },
    { value: "Mato Grosso", label: "Mato Grosso" },
    { value: "Mato Grosso do Sul", label: "Mato Grosso do Sul" },
    { value: "Minas Gerais", label: "Minas Gerais" },
    { value: "Pará", label: "Pará" },
    { value: "Paraíba", label: "Paraíba" },
    { value: "Paraná", label: "Paraná" },
  ],
};

export const ModifiedOptions = Template.bind({});
ModifiedOptions.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  label: "Mandatory option choice",
  onChange: (e) => console.log(e),
  placeholder: "Put an @",
  options: [
    { value: "cebola", label: "Cebolas" },
    { value: "batata", label: "Batata" },
    { value: "limao", label: "Limao" },
  ],
  modifyOptions: (value, options) => {
    return value.indexOf("@") > -1 ? options : [];
  },
};
