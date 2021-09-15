interface MessageChildProps {
    children?: string;
    type: string;
    text: string;
    position: string;
    onClickClose: any;
}
declare const Message: {
    ({ children, type, text, position, onClickClose, }: {
        children: any;
        type: any;
        text: any;
        position: any;
        onClickClose: any;
    }): JSX.Element;
    Child: ({ title, content, buttons }: MessageChildProps) => JSX.Element;
};
interface MessageChildProps {
    title: string;
    content: any;
    buttons: any;
}
export default Message;
