import React from 'react';
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    tabsHeader: [];
    customIndex: number;
    className: string;
    children: JSX.Element[] | JSX.Element;
    isNotificationActive: boolean;
}
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
//# sourceMappingURL=index.d.ts.map