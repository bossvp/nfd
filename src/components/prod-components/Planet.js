import React, { useState,useEffect } from "react";

import Associate from "../../img/season/associate.png";
import Information from "./Information";

import Aos from "aos";
import "aos/dist/aos.css"


function Planet({ seteoWindow, setText, eText, btnInfo }) {
  const [eSelect, setSelect] = useState(false);
  
//selector de cards
  // const selectorCards = (e) => {
    
  //   if (e.target.className) {
  //     console.log(e.currentTarget.childNodes)
      

  //   } else {
  //     const nodos = e.currentTarget.childNodes;
  //     let contador = 0;
  //     for (let i = 0; i < nodos.length; i++) {
  //       if (nodos[i].className) {
  //         contador++;
  //       }
  //     }
  //     if (contador < 1) {
  //       e.target.classList.toggle("card__state__select");
  //       setSelect(!eSelect);
  //     }
  //   }
  // };
useEffect(()=>{
      Aos.init({duration:1500});
  
    },[])
  return (

    
  
    <>
      <div className="col-12 col-md-9 " style={{alignItems:"center"}} data-aos="zoom-in-down">

        <div
          className="season__images"
          style={{ justifyItems: "start"}}
          
        >
          <div className={eSelect ? `${"card__state__select"}` : "" }
          onClick={()=>setSelect(!eSelect)}
          
         >
            
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
