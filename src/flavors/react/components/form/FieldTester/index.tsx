import React, { useState } from "react";

interface FieldTesterProps {
  children(...args: any): React.ReactElement;
}

const FieldTester: React.FC<FieldTesterProps> = (props) => {
  const [fieldValue, setFieldValue] = useState("");
  return <div>{props.children(fieldValue, setFieldValue)}</div>;
};

export default FieldTester;
