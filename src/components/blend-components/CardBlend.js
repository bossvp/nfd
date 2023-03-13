import React from "react";
import Phi from "../../img/phi201.png";

function CardBlend({
  img = Phi,
  text = "Available",
  color = "rgb(254, 175, 0)",
}) {
  return (
    <div className="card__blend_page">
      <h1 style={text === "Finish" ? {background:"red"}: {}}>{text}</h1>
      <img src={img} alt="" />
      <p className="fw-bold pt-2">"PHS [28657]"</p>
      
    </div>
  );
}

export default CardBlend;