import React from "react";
import classnames from "classnames";

import OutlineClose from "./../icons/generated/outline/OutlineClose";
import Text from "./../Text";

import useToast from "./hook";

interface ToastProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  text: string;
  type: "success" | "info" | "error" | "warning";
  isVisible: boolean;
  close: (...args: any) => any;
}

const Toast: React.FC<ToastProps> = ({
  text,
  type = "success",
  isVisible,
  close,
}) => {
  const { icons } = useToast();

  const Icon = icons[type];
  const classes = classnames("iq-toast", {
    "iq-toast--visible": isVisible,
    "iq-toast--success": type === "success",
    "iq-toast--info": type === "info",
    "iq-toast--error": type === "error",
    "iq-toast--warning": type === "warning",
  });

  return (
    <div className={classes}>
      <div className="iq-toast__icon">
        <Icon />
      </div>
      <div className="iq-toast__content">
        <Text as="p" variant="body-small" className="iq-toast__content-message">
          {text}
        </Text>
        <button
          className="iq-toast__content-button"
          onClick={close}
          aria-label="Fechar alerta"
        >
          <OutlineClose />
        </button>
      </div>
    </div>
  );
};

export default Toast;
