import React, { useState,useEffect } from "react";

import Associate from "../../img/season/associate.png";
import Information from "./Information";

import Aos from "aos";
import "aos/dist/aos.css"


function Planet({ seteoWindow, setText, eText, btnInfo }) {
  const [eSelect, setSelect] = useState(false);
  

useEffect(()=>{
      Aos.init({duration:1500});
  
    },[])
  return (

    
  
    <>
      <div className="col-12 col-md-9 " style={{alignItems:"center"}} data-aos="fade-down">

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
