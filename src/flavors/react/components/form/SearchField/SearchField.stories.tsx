import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import SearchField from "./index";
import OutlineArrowLeft from "../../icons/generated/outline/OutlineArrowLeft";

//@ts-ignore
import "core/components/Form.styl";

export default {
  title: "Components/form/SearchField",
  component: SearchField,
  parameters: {
    docs: {
      description: {
        component: `Default input`,
      },
    },
  },
} as Meta;

const Template = (args) => (
  <div style={{ width: "60%", maxWidth: "350px" }}>
    <SearchField {...args} />
  </div>
);

export const BasicSearch = Template.bind({});
BasicSearch.args = {
  placeholder: "Procurar",
};

export const LoadingSearch = Template.bind({});
LoadingSearch.args = {
  placeholder: "Procurar",
  loading: true,
};
