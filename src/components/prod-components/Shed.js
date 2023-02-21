import React, { useState } from 'react'
import Associate from "../../img/season/associate.png";
import Untouchable from "../../img/season/untouchable.png";
import Lieutenant from "../../img/season/lieutenant.png";
import Baron from "../../img/season/baron.png";
import Information from './Information';

import Form from "react-bootstrap/Form";

function Shed({seteoWindow, setText, btnInfo, eText}) {
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

const cards =[];
const img = [Associate,Untouchable,Lieutenant,Baron];

let j=0;
for (let i = 1; i < 101; i++) {
  i=== 0 ? j=0 : i%4 === 0 ? j=0 : j++; 
  cards.push(
    <div key={i}>
      <img src={img[j]} alt="" key={i}/>
      { i<10 ? <p>#00{i}</p> : <p>#0{i}</p>}
    </div>
  )
  
}

  return (
    <>
    
      <div className="col-12 col-md-9 flex-column">
<div className="col-12 " style={{display:"flex", flexDirection:"column" }}>
                <div className="float-end">
                  <div className="container_selects">
                    <div>
                      <Form.Select
                        aria-label="Default select example"
                        className="fondoSelect"
                      >
                        <option>Rarity filter</option>
                        <option value="1">Common</option>
                        <option value="2">Epic</option>
                        <option value="3">Mytic</option>
                      </Form.Select>
                    </div>
            
                    <div>
                      <Form.Select
                        aria-label="Default select example"
                        className="fondoSelect"
                      >
                        <option>Orden Direction</option>
                        <option value="1">Common</option>
                        <option value="2">Epic</option>
                        <option value="3">Mytic</option>
                      </Form.Select>
                    </div>
                    <div>
                      <Form.Select
                        aria-label="Default select example"
                        className="fondoSelect"
                      >
                        <option>Sort By</option>
                        <option value="1">Common</option>
                        <option value="2">Epic</option>
                        <option value="3">Mytic</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
    </div>
        <div className="season__images" onClick={selectorCards}>
          {/* <img src={Associate} alt="" />
          <img src={Untouchable} alt="" />
          <img src={Lieutenant} alt="" />
          <img src={Baron} alt="" />
          <img src={Associate} alt="" />
          <img src={Untouchable} alt="" />
          <img src={Lieutenant} alt="" />
          <img src={Baron} alt="" />
          <img src={Associate} alt="" />
          <img src={Untouchable} alt="" />
          <img src={Lieutenant} alt="" />
          <img src={Baron} alt="" />
          <img src={Associate} alt="" />
          <img src={Untouchable} alt="" />
          <img src={Lieutenant} alt="" />
          <img src={Baron} alt="" />
          <img src={Associate} alt="" />
          <img src={Untouchable} alt="" />
          <img src={Lieutenant} alt="" />
          <img src={Baron} alt="" />
          <img src={Associate} alt="" />
          <img src={Untouchable} alt="" />
          <img src={Lieutenant} alt="" />
          <img src={Baron} alt="" />
          <img src={Associate} alt="" />
          <img src={Untouchable} alt="" />
          <img src={Lieutenant} alt="" />
          <img src={Baron} alt="" /> */}
          {cards}
        </div>
        
      </div>
      <Information seteoWindow={seteoWindow} setText={setText} eSelect={eSelect} eText={eText} color={"#AA1C3A"} btnInfo={btnInfo}/>
    </>
  );
}

export default Shed