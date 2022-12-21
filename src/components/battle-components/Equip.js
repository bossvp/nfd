import React from "react";
import EquipInfo from "./EquipInfo";
import Lieutenant from "../../img/battle/lieutenant-2.png";
import Item1 from '../../img/battle/item-1.png'
import Item2 from '../../img/battle/item-2.png'
import Item3 from '../../img/battle/item-3.png'
function Equip() {
  return (
    <div className="row">
      <div className="col-12 col-md-2" >
        <img src={Lieutenant} alt="" />
      </div>
      <div className="col-12 col-md-2 mt-5" >
        <h2 className="text-white ">Level 20</h2>
        <div className="progress-bar__equip">
          <span className="progress-bar__equip-percentage">
            6550/17000 (39%)
          </span>
        </div>
        <div className="row px-5 mt-4">
          <div className="col-12 col-md-6 my-2">
            {" "}
            <EquipInfo />
          </div>
          <div className="col-12 col-md-6 my-2">
            {" "}
            <EquipInfo />
          </div>
          <div className="col-12 col-md-6 my-2">
            {" "}
            <EquipInfo />
          </div>
          <div className="col-12 col-md-6 my-2">
            {" "}
            <EquipInfo />
          </div>
          <div className="col-12 col-md-6 my-2">
            {" "}
            <EquipInfo />
          </div>
        </div>
        <div className="row  mt-4">
          <div className="col-12 col-md-4">
            {" "}
           <img src={Item1} alt="" />
          </div>
          <div className="col-12 col-md-4">
            {" "}
            <img src={Item2} alt="" />
          </div>
          <div className="col-12 col-md-4">
            {" "}
            <img src={Item3} alt="" />
          </div>
          <div className="col-12 col-md-4">
            {" "}
           <img src={Item1} alt="" />
          </div>
          <div className="col-12 col-md-4">
            {" "}
            <img src={Item2} alt="" />
          </div>
          <div className="col-12 col-md-4">
            {" "}
            <img src={Item3} alt="" />
          </div>
          
        </div>
      </div>
      {/*  <p className='text-white text-start h2'>Level 20</p> */}

      {/*   <div className="progress-bar__equip">
      </div> */}
    </div>
  );
}

export default Equip;
