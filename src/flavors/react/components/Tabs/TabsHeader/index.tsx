import * as React from 'react'
import classnames from 'classnames'

const TabsHeader = ({
	tabsHeader,
	activeIndex,
	onTabClick,
	customClass,
	isNotificationActive
}) => {
	const listClass = classnames('tabs-button', {
		[`${customClass}`]: !!customClass,
		'tabs-button--notification-active': isNotificationActive
	})

	return  (
		<ul className={listClass}>
			{
				tabsHeader.map(({ title, notificationAmount }, index) => {
					const buttonClasses = classnames('tabs-button__item', {
						'tabs-button__item--active': index === activeIndex
					})
					return (
						<li
							key={index}
							data-index={index}
							className={buttonClasses}
							onClick={onTabClick}
							data-clicked={`btn-tab-${index}`}
						>
							<p className="tabs-button__item-text">
								{title}
								<span>{notificationAmount}</span>
							</p>
						</li>
					)
				})
			}
		</ul>
	)
}

export default TabsHeader
