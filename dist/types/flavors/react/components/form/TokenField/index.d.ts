interface TokenFieldProps {
    size?: number;
    timer?: number;
    onCompleteToken?: () => void;
    onChange?: () => void;
    onChangeTimer?: () => void;
}
declare const TokenField: ({ size, onCompleteToken, onChange, timer, onChangeTimer, }: TokenFieldProps) => JSX.Element;
export default TokenField;
