interface MessageProps {
    children?: string;
    isOpen: boolean;
    position: string;
    text: string;
    type: string;
}
declare const Message: {
    ({ children, isOpen, position, text, type, }: MessageProps): JSX.Element;
    Child: ({ title, content, buttons }: MessageChildProps) => JSX.Element;
};
interface MessageChildProps {
    title: string;
    content: any;
    buttons: any;
}
export default Message;
