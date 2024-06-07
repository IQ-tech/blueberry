import React, { useState } from 'react'
import OutlineHidePassword from '../../icons/generated/outline/OutlineHidePassword'
import OutlineViewPassword from '../../icons/generated/outline/OutlineViewPassword'
import InputField from '../InputField'
import { CommonFieldsProps, ModifiedInputProps } from '../form-defs'
import { TooltipProps } from '../../Tooltip'

interface PasswordProps extends ModifiedInputProps, CommonFieldsProps {
  showEye?: boolean
  tooltipConfig?: TooltipProps
  hideErrorIcon?: boolean
  inputRef?: React.MutableRefObject<any>,
  checkCapsLock?: boolean,
  capsLockMessage?: string,
}

const PasswordField: React.FC<PasswordProps> = ({
  showEye = true,
  checkCapsLock=false,
  capsLockMessage,
  hideErrorIcon,
  inputRef,
  ...props
}) => {
  const [isShowingPassword, setIsShowingPassword] = useState(false)
  const RightEye = isShowingPassword ? OutlineHidePassword : OutlineViewPassword

  const fieldType = isShowingPassword ? 'text' : 'password'

  function changeVisibility() {
    setIsShowingPassword(!isShowingPassword)
  }

  const Icon = () =>
    showEye ? (
      <div className="iq-password-field__eye" onClick={changeVisibility}>
        <RightEye />
      </div>
    ) : null

  return (
    <InputField
      customClass="iq-password-field"
      htmlType={fieldType}
      Icon={Icon}
      hideErrorIcon={hideErrorIcon}
      inputRef={inputRef}
      checkCapsLock={checkCapsLock}
      capsLockMessage={capsLockMessage}
      {...props}
    />
  )
}

export default PasswordField
