import React, { useState, useEffect } from "react";
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
  const [value, setValue] = useState("cenoura");

  useEffect(() => {
    setTimeout(() => {
      setValue("lala");
    }, 2000);
  }, []);

  return (
    <div style={{ width: "60%", maxWidth: "350px" }}>
      <AutocompleteField {...args} value={value} />
      <AutocompleteField {...args} />
      <AutocompleteField {...args} />
    </div>
  );
};

export const BasicInput = Template.bind({});
BasicInput.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  label: "Simple field",
  placeholder: "Type something",
  options: [
    { value: "a", label: "a" },
    { value: "b", label: "b" },
    { value: "c", label: "c" },
  ],
};

export const OpenSuggestionsOnFocusInput = Template.bind({});
OpenSuggestionsOnFocusInput.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  label: "Simple field",
  placeholder: "Type something",
  /* openDropdownOnFocus: true, */
  options: [
    { value: "Acre", label: "Acre" },
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
