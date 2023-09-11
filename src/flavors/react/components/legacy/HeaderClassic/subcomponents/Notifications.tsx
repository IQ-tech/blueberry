import React from 'react'
import Conditional from '../../../misc/Conditional'

import { loggedMenuItemsIcons } from '../icons'

interface INotificationProp {
  count?: number
  onNotificationClick?: () => void
}
export const Notifications: React.FC<INotificationProp> = ({
  count,
  onNotificationClick,
}) => {
  const handleOnClick = () => {
    if (!!onNotificationClick) onNotificationClick()
  }

  return (
    <div
      className="header-classic__panel-right__notification"
      onClick={handleOnClick}
    >
      <Conditional
        condition={count > 0}
        renderIf={
          <div
            className="header-classic__panel-right__notification__icon"
            dangerouslySetInnerHTML={{
              __html: loggedMenuItemsIcons.hasNotification,
            }}
          />
        }
        renderElse={
          <div
            className="header-classic__panel-right__notification__icon"
            dangerouslySetInnerHTML={{
              __html: loggedMenuItemsIcons.notification,
            }}
          />
        }
      />
    </div>
  )
}
