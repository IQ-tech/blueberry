import React from "react";
interface CentralizedModalProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    title?: string;
    text?: string;
    dangerButtonText?: string;
    buttonText?: string;
    children?: any;
    isActive: boolean;
    hasOverlay: boolean;
    hasCloseButton: boolean;
    useChildren: boolean;
    hasButtons: boolean;
    handleDangerButton?: (...args: any) => any;
    handleButton?: (...args: any) => any;
    handleCloseModal?: (...args: any) => any;
}
declare const CentralizedModal: React.FC<CentralizedModalProps>;
export default CentralizedModal;
