import React, { useState } from 'react'
import Associate from "../../img/season/associate.png";
import Untouchable from "../../img/season/untouchable.png";
import Lieutenant from "../../img/season/lieutenant.png";
import Baron from "../../img/season/baron.png";
import Information from './Information';


function Neigh({seteoWindow, setText, btnInfo, eText}) {
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
    <>
      <div className="col-12 col-md-9 ">
        <div className="season__images" onClick={selectorCards}>
          <img src={Associate} alt="" />
          <img src={Untouchable} alt="" />
          <img src={Lieutenant} alt="" />
          
        </div>
        {/* <div className="row">
          <div className="col-12 confirm-mision">
            <h3 className="text-white fw-bold text-uppercase ">
              {" "}
              Confirm mission
            </h3>
            <button onClick={()=>{ 
              if(eSelect){
                seteoWindow("Shed")
                setText({
                  tittle: "Shed",
                  subtitle: "Lorem ipsum dolor sit Amet.",  
                })
              }
              
              
              }}>Start</button>
      
          </div>
        </div> */}
      </div>
      <Information seteoWindow={seteoWindow} setText={setText} eSelect={eSelect} eText={eText} color={"#B06A26"} btnInfo={btnInfo}/>
    </>
  );
}

export default Neigh