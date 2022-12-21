import React from 'react'
import Associate from "../../img/season/associate.png";
import Untouchable from "../../img/season/untouchable.png";
import Lieutenant from "../../img/season/lieutenant.png";
import Baron from "../../img/season/baron.png";
function ImagesGroup() {
  return (
    <div className="col-12 col-md-8 ">
            
            <div className="season__images">
        <img src={Associate} alt="" />
         <img src={Untouchable} alt="" />
       <img src={Lieutenant} alt="" />
        <img src={Baron} alt="" />
      </div>
      <div className="row">
        <div className="col-12 confirm-mision">
        <h3 className="text-white fw-bold text-uppercase "> Confirm mission</h3>
        <button>Start</button>
        </div>
       
      </div>
          </div>
  )
}

export default ImagesGroup