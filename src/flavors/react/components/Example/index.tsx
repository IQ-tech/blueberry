import React from "react";

interface ExampleProps {
  content: string;
}

const Example: React.FC<ExampleProps> = ({ content = "lala" }) => {
  return <div className="example">{content}</div>;
};

export default Example;
