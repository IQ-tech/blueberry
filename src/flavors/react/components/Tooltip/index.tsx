import * as React from "react";
import TooltipRC from "rc-tooltip"
import classNames from "classnames";
import Conditional from "../misc/Conditional";

export interface TooltipProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: "light" | "dark";
  desc: string;
  placement?: "top" | "topLeft" | "bottom" | "bottomLeft" | "left" | "right";
  title: string;  
  trigger?: string[];
  tooltipContainer?: string;
  customButton?: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  color = "dark",
  desc = false,
  placement = "top",
  title = false,
  trigger = ['hover'],
  tooltipContainer = 'body',
  customButton
}) => {
  const tooltipClasses = classNames({
    [`iq-tooltip--color-${color}`]: !!color,
    [`iq-tooltip--placement-${placement}`]: !!placement,
  })

  const tooltipQuestionClasses = classNames('iq-tooltip__question', {
    [`iq-tooltip__question--${color}`]: !!color
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
      trigger={trigger} 
      overlay={Balloon}
      prefixCls="iq-tooltip"
      overlayClassName={tooltipClasses}
      getTooltipContainer={() => document.querySelector(tooltipContainer)}
    >
      {customButton ? customButton as any : <span className={tooltipQuestionClasses}>?</span>}
    </TooltipRC>
  );
};

export default Tooltip;