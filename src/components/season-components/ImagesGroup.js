import React, { useState } from "react";
import Associate from "../../img/season/associate.png";
import Untouchable from "../../img/season/untouchable.png";
import Lieutenant from "../../img/season/lieutenant.png";
import Baron from "../../img/season/baron.png";
function ImagesGroup({btnStart}) {
  const [eSelect, setSelect] = useState(false)

  const selectorCards = (e) =>{
    if(e.target.className){
      e.target.classList.toggle("card__state__select");
      setSelect(!eSelect)
    } else{
      const nodos = e.currentTarget.childNodes;
      let contador = 0
      for (let i = 0; i < nodos.length; i++) {
        if(nodos[i].className){
          contador++
        }
      }
      if(contador < 1){
        e.target.classList.toggle("card__state__select")
        setSelect(!eSelect)
      }

    }    

}

  return (
    <div className="col-12 col-md-8 ">
      <div className="season__images" onClick={selectorCards}>
        <div>
          <img src={Associate} alt="" />
        </div>
        <div>
          <img src={Untouchable} alt="" />
        </div>
        <div>
          <img src={Lieutenant} alt="" />
        </div>
        <div>
          <img src={Baron} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 confirm-mision">
          <h3 className="text-white fw-bold text-uppercase ">
            {" "}
            Confirm mission
          </h3>
          <button onClick={()=>{ eSelect ? btnStart("Options") : console.log()}}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default ImagesGroup;
