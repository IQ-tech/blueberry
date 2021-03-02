import React, { Fragment, useState, useEffect } from 'react'
import TabsHeader from './TabsHeader'
import TabsContent from './Content'

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /* Defining header buttons */
  tabsHeader: [],
  /* Customized index to define which table to select itself */
  customIndex: number,
  className: string,
  children: JSX.Element[] | JSX.Element,
  /* Defining if has notification style */
  isNotificationActive: boolean
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
    setActiveIndex(customIndex)
  }, [])

  return (
		<Fragment>
			<TabsHeader
				customClass={className}
				tabsHeader={tabsHeader}
				activeIndex={activeIndex}
				onTabClick={onTabClick}
        isNotificationActive={isNotificationActive}
			/>
			<TabsContent activeIndex={activeIndex} children={children} />
		</Fragment>
	)
};

export default Tabs
