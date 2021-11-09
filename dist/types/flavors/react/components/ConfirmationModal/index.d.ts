import React from "react";
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
declare const ConfirmationModal: React.FC<ConfirmationModal>;
export default ConfirmationModal;
