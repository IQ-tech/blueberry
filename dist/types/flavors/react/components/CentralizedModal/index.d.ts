import React from "react";
interface CentralizedModalProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    children: any;
    customClass?: string;
    isActive: boolean;
    hasOverlay?: boolean;
    hasCloseButton?: boolean;
    handleCloseModal?: (...args: any) => any;
}
declare const CentralizedModal: React.FC<CentralizedModalProps>;
export default CentralizedModal;
