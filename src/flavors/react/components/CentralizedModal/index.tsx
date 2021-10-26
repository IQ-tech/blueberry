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
  const classes = classnames("centralized-modal", {
    "centralized-modal--active": isActive,
    "centralized-modal--buttons": hasButtons,
  });

  return (
    <section className={classes}>
      {hasOverlay && <div className="centralized-modal__overlay" />}

      <div className="centralized-modal__content">
        {Content ? (
          <Content />
        ) : (
          <>
            <div>
              {hasCloseButton && (
                <div className="centralized-modal__button">
                  <button onClick={handleCloseModal}>
                    <OutlineClose />
                  </button>
                </div>
              )}

              {title && <h2 className="centralized-modal__title">{title}</h2>}
              {text && <p className="centralized-modal__text">{text}</p>}
            </div>

            {hasButtons && (
              <div className="centralized-modal__buttons">
                <Button
                  type="secondary"
                  color="danger"
                  onClick={handleDangerButton}
                >
                  {dangerButtonText}
                </Button>
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
