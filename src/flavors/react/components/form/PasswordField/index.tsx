import React, { useState } from "react";
import OutlineHidePassword from "../../icons/generated/outline/OutlineHidePassword";
import OutlineViewPassword from "../../icons/generated/outline/OutlineViewPassword";
import InputField from "../InputField";
import { CommonFieldsProps } from "../form-defs";

interface PasswordProps
  extends React.HTMLAttributes<HTMLInputElement>,
    CommonFieldsProps {
  showEye?: boolean;
}

const PasswordField: React.FC<PasswordProps> = ({
  showEye = true,
  ...props
}) => {
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const RightEye = isShowingPassword
    ? OutlineHidePassword
    : OutlineViewPassword;

  const fieldType = isShowingPassword ? "text" : "password";

  function changeVisibility() {
    setIsShowingPassword(!isShowingPassword);
  }

  const Icon = () =>
    showEye ? (
      <div className="iq-password-field__eye" onClick={changeVisibility}>
        <RightEye />
      </div>
    ) : null;

  return (
    <InputField
      customClass="iq-password-field"
      htmlType={fieldType}
      icon={Icon}
      {...props}
    />
  );
};

export default PasswordField;
