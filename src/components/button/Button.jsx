import React from "react";
import "./Button.sass";

export function Button({children}) {
  return (
    <div id="containerButton">
      <button id="button">
        {children}
      </button>
    </div>
  );
}
