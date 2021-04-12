import * as React from "react"
import { useState, useEffect } from 'react'
import TabsHeader from './TabsHeader'
import TabsContent from './Content'

interface Tab {
  title: string;
  notificationAmount?: number;
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /* Defining header buttons */
  tabsHeader: Tab[],
  /* Customized index to define which table to select itself */
  customIndex?: number,
  className?: string,
  children?: JSX.Element[] | JSX.Element,
  /* Defining if has notification style */
  isNotificationActive?: boolean
}

const Tabs:React.FC<TabsProps> = ({
	children,
	className,
  tabsHeader,
  customIndex,
  isNotificationActive
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const onTabClick = (e) => {
    const index = +e.currentTarget.dataset.index
    setActiveIndex(index)
  }

  useEffect(() => {
    setActiveIndex(activeIndex)

    if (!isNaN(customIndex)) {
      setActiveIndex(customIndex)
    }
  }, [])

  return (
		<div className="iq-tabs">
			<TabsHeader
				customClass={className}
				tabsHeader={tabsHeader}
				activeIndex={activeIndex}
				onTabClick={onTabClick}
        isNotificationActive={isNotificationActive}
			/>
			<TabsContent activeIndex={activeIndex} children={children} />
    </div>
	)
};

export default Tabs
