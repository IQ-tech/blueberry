import React from "react";
import classnames from "classnames";

import OutlineClose from "../icons/generated/outline/OutlineClose";

import Button from "../Button";

interface CentralizedModalProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
  text?: string;
  dangerButtonText?: string;
  buttonText?: string;
  children?: any;
  isActive: boolean;
  hasOverlay: boolean;
  hasCloseButton: boolean;
  hasButtons: boolean;
  handleDangerButton?: (...args: any) => any;
  handleButton?: (...args: any) => any;
  handleCloseModal?: (...args: any) => any;
}

const CentralizedModal: React.FC<CentralizedModalProps> = ({
  title,
  text,
  isActive,
  handleDangerButton,
  handleButton,
  handleCloseModal,
  dangerButtonText,
  buttonText,
  hasOverlay = true,
  hasCloseButton = true,
  hasButtons = false,
  children: Content,
}) => {
  const classes = classnames("iq-centralized-modal", {
    "iq-centralized-modal--active": isActive,
    "iq-centralized-modal--buttons": hasButtons,
  });

  return (
    <section className={classes}>
      {hasOverlay && <div className="iq-centralized-modal__overlay" />}

      <div className="iq-centralized-modal__content">
        {Content ? (
          <Content />
        ) : (
          <>
            <div>
              {hasCloseButton && (
                <div className="iq-centralized-modal__button">
                  <button onClick={handleCloseModal}>
                    <OutlineClose />
                  </button>
                </div>
              )}

              {title && (
                <h2 className="iq-centralized-modal__title">{title}</h2>
              )}
              {text && <p className="iq-centralized-modal__text">{text}</p>}
            </div>

            {hasButtons && (
              <div className="iq-centralized-modal__buttons">
                {/* @ts-ignore */}
                <Button
                  type="secondary"
                  color="danger"
                  onClick={handleDangerButton}
                >
                  {dangerButtonText}
                </Button>
                {/* @ts-ignore */}
                <Button onClick={handleButton}>{buttonText}</Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default CentralizedModal;
