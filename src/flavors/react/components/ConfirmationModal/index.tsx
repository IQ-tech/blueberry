import React from "react";

import CentralizedModal from "../CentralizedModal";
import Button from "../Button";

interface ConfirmationModal extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  text?: string;
  dangerButtonText: string;
  buttonText: string;
  isActive: boolean;
  hasOverlay?: boolean;
  hasCloseButton?: boolean;
  handleDangerButton: (...args: any) => any;
  handleButton: (...args: any) => any;
  handleCloseModal?: (...args: any) => any;
}

const ConfirmationModal: React.FC<ConfirmationModal> = ({
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
}) => {
  return (
    <CentralizedModal
      customClass="iq-confirmation-modal"
      isActive={isActive}
      hasCloseButton={hasCloseButton}
      hasOverlay={hasOverlay}
      handleCloseModal={handleCloseModal}
    >
      <div className="iq-confirmation-modal__content">
        <div className="iq-confirmation-modal__content-top">
          {title && <h2 className="iq-confirmation-modal__title">{title}</h2>}
          {text && <p className="iq-confirmation-modal__text">{text}</p>}
        </div>

        <div className="iq-confirmation-modal__bottom">
          {/* @ts-ignore */}
          <Button
            type="secondary"
            color="danger"
            aria-label={dangerButtonText}
            onClick={handleDangerButton}
          >
            {dangerButtonText}
          </Button>
          {/* @ts-ignore */}
          <Button aria-label={buttonText} onClick={handleButton}>
            {buttonText}
          </Button>
        </div>
      </div>
    </CentralizedModal>
  );
};

export default ConfirmationModal;
