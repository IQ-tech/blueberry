import React from 'react'
import Conditional from '../../../misc/Conditional'

import { loggedMenuItemsIcons } from '../icons'

interface INotificationProp {
  count?: number
  onNotificationClick?: () => void
}
const Notifications: React.FC<INotificationProp> = ({
  count,
  onNotificationClick,
}) => {
  const handleOnClick = () => {
    if (!!onNotificationClick) onNotificationClick()
  }

  return (
    <div className="header-classic__panel-right__notification">
      <Conditional
        condition={count > 0}
        renderIf={
          <button onClick={handleOnClick} aria-label="Notificações nào lidas">
            <span
              className="header-classic__panel-right__notification__icon"
              dangerouslySetInnerHTML={{
                __html: loggedMenuItemsIcons.hasNotification,
              }}
            />
          </button>
        }
        renderElse={
          <button onClick={handleOnClick} aria-label="Nenhuma notificação">
            <span
              className="header-classic__panel-right__notification__icon"
              dangerouslySetInnerHTML={{
                __html: loggedMenuItemsIcons.notification,
              }}
            />
          </button>
        }
      />
    </div>
  )
}

export default Notifications
