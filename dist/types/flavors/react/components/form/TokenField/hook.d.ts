/// <reference types="react" />
export default function useTokenInput({ size, onCompleteToken, onChange, onChangeTimer, timer, }: {
    size: any;
    onCompleteToken: any;
    onChange: any;
    onChangeTimer: any;
    timer: any;
}): {
    onKeyUpHandler: (e: any, i: any) => void;
    onChangeNumber: (e: any) => void;
    onPasteNumber: (e: any) => void;
    tokenMap: any;
    rootElementRef: import("react").MutableRefObject<any>;
};
