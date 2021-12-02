import React from "react";
import "./Button.sass";

export function Button({children}) {
  return (
    <div id="containerButton">
      <a href id="button">
        {children}
      </a>
    </div>
  );
}
