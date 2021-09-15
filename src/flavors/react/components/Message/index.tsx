import React from "react"
import classNames from "classnames"
import Conditional from "../misc/Conditional";
import OutlineMessageDanger from "../icons/generated/outline/OutlineMessageDanger"
import OutlineMessageInfo from "../icons/generated/outline/OutlineMessageInfo"
import OutlineMessageSuccess from "../icons/generated/outline/OutlineMessageSuccess"
import OutlineMessageWarning from "../icons/generated/outline/OutlineMessageWarning"
import OutlineClose from "../icons/generated/outline/OutlineClose"
import FilledHelp from "../icons/generated/filled/FilledHelp"

interface MessageChildProps {
  children?: string;
  type: string;
  text: string;
  position: string;
  onClickClose: any;
}

const Message = ({ 
  children, 
  type, 
  text, 
  position, 
  onClickClose, 
}) => {
  const componentClass = classNames("iq-message", {
    "iq-message--danger": type === 'danger',
    "iq-message--info": type === 'info',
    "iq-message--success": type === 'success',
    "iq-message--warning": type === 'warning',
    "iq-message--fixed": position === 'fixed',
    "iq-message--appended": !!children,
  })

  const componentIcon = {
    'danger': OutlineMessageDanger,
    'info': OutlineMessageInfo,
    'success': OutlineMessageSuccess,
    'warning': OutlineMessageWarning,
  }

  const IconMessage = componentIcon[`${type}`]

  return (
    <div className={componentClass}>
      <div className="iq-message__hold">
        <div className="iq-message__icon"><IconMessage /></div>
        <div className="iq-message__text">{text}</div>
        <a 
          className="iq-message__close" 
          onClick={onClickClose}
          >
            <OutlineClose />
        </a>
      </div>
      <Conditional
        condition={!!children}
        renderIf={children}
      />
    </div>
  )
}

interface MessageChildProps {
  title: string;
  content: any;
  buttons: any;
}

const MessageChild = ({ title, content, buttons }: MessageChildProps) => {

  return (
    <div className="iq-message__append">
      <h3 className="iq-message__append-title">
        <FilledHelp />
        {title}
      </h3>
      <Conditional 
        condition={content}
        renderIf={<div className="iq-message__append-content">{content}</div>}
      />
      <Conditional 
        condition={buttons}
        renderIf={
          <div className="iq-message__append-buttons">
            {buttons}
          </div>
        }
      />
    </div>
  )
}

Message.Child = MessageChild

export default Message