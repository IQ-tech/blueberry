import React from 'react'
import classnames from 'classnames'

const TabsContent = ({ activeIndex, children }) => {

	return (
		<div className="tabs-content__list">
			{children.map((child, index) => {
				const showTabContent = index === activeIndex
				const contentClass = classnames('tabs-content__list-holder', {
					'tabs-content__list-holder--show-content': showTabContent
				})

				return (
					<div className={contentClass} key={`tab-content-${index}`}>{child}</div>
				)
			})}
		</div>
	)
}

export default TabsContent