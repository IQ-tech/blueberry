import * as React from "react";
interface Tab {
    title: string;
    notificationAmount?: number;
}
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    tabsHeader: Tab[];
    customIndex?: number;
    className?: string;
    children?: JSX.Element[] | JSX.Element;
    isNotificationActive?: boolean;
}
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
