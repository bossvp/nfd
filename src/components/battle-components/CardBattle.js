import React from "react";
import Lieutenant from "../../img/battle/lieutenant-2.png";
function CardBattle({img,text, width}) {
  return (
    <div className="backgroud__card">
      <img src={img} alt="" />

      <div className="progress-bar__battle">
        <div style={{width: `${width}%`}}></div>
        <p>{text}/100</p>
      </div>
    </div>
  );
}

export default CardBattle;
