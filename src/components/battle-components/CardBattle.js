import React from "react";
import Lieutenant from "../../img/battle/lieutenant-2.png";
function CardBattle() {
  return (
    <div className="backgroud__card">
      <img src={Lieutenant} alt="" />

      <div className="progress-bar__battle">
      </div>
    </div>
  );
}

export default CardBattle;
