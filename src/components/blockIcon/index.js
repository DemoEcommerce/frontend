import React from "react";
import "./style.scss";

function BlockIcon({ Icon, title, color }) {
  return (
    <div
      className="block-icon"
      hvColor={color}
      style={{ borderColor: color, color }}
    >
      {Icon}
      {title}
    </div>
  );
}

export default BlockIcon;
