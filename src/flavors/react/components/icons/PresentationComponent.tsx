import React from "react";

import * as Icons from "./index";
import Grid from "../Grid";

const PresentaionComponent = () => {
  const iconsNames = Object.keys({ ...Icons });

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      {iconsNames.map((iconName, index) => {
        const IconComponent = Icons[iconName];
        return (
          <div
            style={{ width: "80px", margin: "10px" }}
            key={`icon-${iconName}-${index}`}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "5px",
                }}
              >
                <IconComponent />
              </div>
              <p
                style={{
                  fontSize: "12px",
                  display: "block",
                  textAlign: "center",
                  wordWrap: "break-word",
                  fontFamily: "'Courier New', monospace",
                  width: "100%",
                }}
              >
                {iconName}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PresentaionComponent;
