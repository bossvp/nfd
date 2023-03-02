import React, { useState } from "react";
import Associate from "../../img/season/associate.png";
import Information from "./Information";

function Planet({ seteoWindow, setText, eText, btnInfo }) {
  const [eSelect, setSelect] = useState(false);
  
  const selectorCards = (e) => {
    
    if (e.target.className) {
      e.target.classList.toggle("card__state__select");
      setSelect(!eSelect);
    } else {
      const nodos = e.currentTarget.childNodes;
      let contador = 0;
      for (let i = 0; i < nodos.length; i++) {
        if (nodos[i].className) {
          contador++;
        }
      }
      if (contador < 1) {
        e.target.classList.toggle("card__state__select");
        setSelect(!eSelect);
      }
    }
  };
  return (
    <>
      <div className="col-12 col-md-9 " style={{alignItems:"center"}}>

        <div
          className="season__images"
          style={{ justifyItems: "start" }}
          onClick={selectorCards}
        >
          <div >
            <img src={Associate} alt="" />
            <p>PHEEBO</p>
          </div>
        </div>
        
        
      </div>

      <Information seteoWindow={seteoWindow} setText={setText} eSelect={eSelect} eText={eText} color={"#B06A26"} btnInfo={btnInfo}/>

    </>
  );
}

export default Planet;
