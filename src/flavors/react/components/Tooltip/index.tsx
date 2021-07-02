import * as React from "react";
import TooltipRC from "rc-tooltip"
import classNames from "classnames";
import Conditional from "../misc/Conditional";

interface TooltipProps extends React.HTMLAttributes<HTMLButtonElement> {
  color: "light" | "dark";
  placement: "top" | "topLeft" | "bottom" | "bottomLeft" | "left" | "right";
  title: "";  
  desc: "";
  children: "";
  trigger: ["hover"]
}

const Tooltip: React.FC<TooltipProps> = ({
  color = "dark",
  placement = "top",
  title = false,
  desc = false,
  children,
  trigger,
  ...props
}) => {
  const tooltipClasses = classNames({
    [`iq-tooltip-color-${color}`]: !!color,
    [`iq-tooltip-placement-${placement}`]: !!placement,
  })

  const Balloon = () => (
    <React.Fragment>
      <Conditional 
        condition={!!title}
        renderIf={<h2 className="iq-tooltip__title">{title}</h2>}
      />
      <Conditional 
        condition={!!desc}
        renderIf={<p className="iq-tooltip__desc">{desc}</p>}
      />
    </React.Fragment>
  )
  
  return (
    <TooltipRC 
      placement={placement}
      trigger={['click']} 
      overlay={Balloon}
      prefixCls="iq-tooltip"
      overlayClassName={tooltipClasses}
    >
      <span>{children}</span>
    </TooltipRC>
  );
};

export default Tooltip;