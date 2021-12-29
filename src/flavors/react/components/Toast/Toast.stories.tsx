import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";

import Toast from "./index";
import "core/components/Toast.styl";

export default {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: "Component for titles and other body texts",
      },
    },
  },
} as Meta;

const Template = (args) => {
  const [isVisible, setisVisible] = useState(true);
  return (
    <>
      <button onClick={() => setisVisible(true)}>mostrar toast</button>
      <Toast
        {...args}
        isVisible={isVisible}
        close={() => setisVisible(false)}
      />
    </>
  );
};

export const ToastExample = Template.bind({});
Template.args = {
  text: "Um novo código de segurança foi enviado",
  type: "success",
  isVisible: true,
  close: () => {},
};
