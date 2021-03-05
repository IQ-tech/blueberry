import React from "react";
import classnames from "classnames";

const TabsContent = ({ activeIndex, children }) => {
  return (
    <div className="iq-tabs-content__list">
      {children.map((child, index) => {
        const showTabContent = index === activeIndex;
        const contentClass = classnames("iq-tabs-content__list-holder", {
          "iq-tabs-content__list-holder--show-content": showTabContent,
        });

        return (
          <div className={contentClass} key={`tab-content-${index}`}>
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default TabsContent;
