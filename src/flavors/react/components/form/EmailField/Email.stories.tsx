import React, { useState, useEffect } from "react";
import levenshtein from "fast-levenshtein";
import { Meta } from "@storybook/react/types-6-0";
import Input from "./index";
import OutlineArrowLeft from "../../icons/generated/outline/OutlineArrowLeft";

//@ts-ignore
import "core/components/Form.styl";

const autoSuggestedDomains = [
  "gmail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "yahoo.com.br",
  "yahoo.com",
  "bol.com.br",
  "uol.com.br",
  "terra.com.br",
  "aol.com",
];

export default {
  title: "Components/form/EmailField",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `Default email input`,
      },
    },
  },
} as Meta;

function handleEmailAutoSuggetion({ value, domainValue }) {
  if (!domainValue || autoSuggestedDomains.includes(domainValue)) return [];

  return autoSuggestedDomains.reduce((acc, domain) => {
    const distanceString = levenshtein.get(domain, domainValue);
    const isSimilar = distanceString <= 5 || domain.includes(domainValue);

    if (isSimilar || domainValue === "") return acc.concat({ value, domain });

    return acc;
  }, []);
}

function _autoSuggestDomains(inputValue, setAutoSuggestionOptions) {
  const [idValue, domainValue] = inputValue.split("@");

  const filteredOptions = handleEmailAutoSuggetion({
    value: idValue,
    domainValue,
  });

  setAutoSuggestionOptions(filteredOptions);
}

const Template = (args) => {
  const [inputValue, setInputValue] = useState("");
  const [autoSuggestionOptions, setAutoSuggestionOptions] = useState([]);

  useEffect(() => _autoSuggestDomains(inputValue, setAutoSuggestionOptions), [
    inputValue,
  ]);

  return (
    <div style={{ width: "60%", maxWidth: "350px" }}>
      <Input
        {...args}
        value={inputValue}
        onChange={(value) => setInputValue(value)}
        handleSetSuggestion={(value) => setInputValue(value)}
        autoSuggestionOptions={autoSuggestionOptions}
      />
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
  placeholder: "Batata",
};

export const InputWithTooltip = Template.bind({});
InputWithTooltip.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  label: "Simple field",
  placeholder: "Batata",
  tooltipConfig: {
    desc: "This is my tooltip",
    title: "Tooltip",
    placement: "bottom",
  },
};

export const InputOpcional = Template.bind({});
InputOpcional.args = {
  optional: true,
  label: "Input opcional",
  placeholder: "Cenoura",
};

export const InputDisabled = Template.bind({});
InputDisabled.args = {
  label: "Input desabilitado",
  disabled: true,
  placeholder: "Alface",
};

export const InputInvalid = Template.bind({});
InputInvalid.args = {
  label: "Input inválido",
  invalid: true,
  placeholder: "Tomate",
  errorMessage: "Some error message",
  required: true,
};

const LeftIconTemplate = (args) => {
  const [inputValue, setInputValue] = useState("");
  const [autoSuggestionOptions, setAutoSuggestionOptions] = useState([]);

  useEffect(() => _autoSuggestDomains(inputValue, setAutoSuggestionOptions), [
    inputValue,
  ]);

  return (
    <div style={{ width: "60%", maxWidth: "350px" }}>
      <Input
        LeftIcon={OutlineArrowLeft}
        {...args}
        value={inputValue}
        onChange={(value) => setInputValue(value)}
        handleSetSuggestion={(value) => setInputValue(value)}
        autoSuggestionOptions={autoSuggestionOptions}
      />
    </div>
  );
};

export const LeftIcon = LeftIconTemplate.bind({});
LeftIcon.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  label: "Simple field",
  placeholder: "Batata",
};

const RightIconTemplate = (args) => {
  const [inputValue, setInputValue] = useState("");
  const [autoSuggestionOptions, setAutoSuggestionOptions] = useState([]);

  useEffect(() => _autoSuggestDomains(inputValue, setAutoSuggestionOptions), [
    inputValue,
  ]);

  return (
    <div style={{ width: "60%", maxWidth: "350px" }}>
      <Input
        {...args}
        value={inputValue}
        onChange={(value) => setInputValue(value)}
        handleSetSuggestion={(value) => setInputValue(value)}
        autoSuggestionOptions={autoSuggestionOptions}
      />
    </div>
  );
};

export const RightIcon = RightIconTemplate.bind({});
RightIcon.args = {
  disabled: false,
  invalid: false,
  optional: false,
  required: true,
  Icon: OutlineArrowLeft,
  label: "Simple field",
  placeholder: "Batata",
};
