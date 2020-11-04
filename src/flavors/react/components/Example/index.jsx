import React from "react";
import PropTypes from "prop-types";

export const Example = ({ content }) => {
  return <div className="example">{content}</div>;
};

Example.propTypes = {
  content: PropTypes.string.isRequired,
};

Example.defaultProps = {
  content: "cenoura",
};
