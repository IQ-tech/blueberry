import React from "react";
import classnames from "classnames";

import OutlineClose from "../icons/generated/outline/OutlineClose";

interface CentralizedModalProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: any;
  customClass?: string;
  isActive: boolean;
  hasOverlay?: boolean;
  hasCloseButton?: boolean;
  handleCloseModal?: (...args: any) => any;
}

const CentralizedModal: React.FC<CentralizedModalProps> = ({
  children,
  customClass,
  isActive,
  handleCloseModal,
  hasOverlay = true,
  hasCloseButton = true,
}) => {
  const classes = classnames("iq-centralized-modal", {
    "iq-centralized-modal--active": isActive,
    [customClass]: customClass,
  });

  return (
    <section className={classes}>
      {hasOverlay && <div className="iq-centralized-modal__overlay" />}

      <div className="iq-centralized-modal__content">
        {hasCloseButton && (
          <div className="iq-centralized-modal__button">
            <button onClick={handleCloseModal}>
              <OutlineClose />
            </button>
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default CentralizedModal;
