import React from 'react'
import Card from '../blend-components/Card'
import bike from '../../img/season/bike.png'
import Phi from "../../img/phi201.png";
import PadLock from "../../img/padlock.png";

function MissionCards() {
  return (
    <div  className="col-12 col-md-6 ">

        <div className="container__cards_mission">

            <Card img={Phi} text={"PHS ( 28657 )" } color={"rgb(254, 175, 0)"}/>
            <Card img={bike} text={"BIKE ( 001 )" } color={"rgb(255,255,255)"}/>
            
            <div className="card__prod ">
                <img src={PadLock} style={{width:"8em",height:"8em"}}  />
                <button style={{width:"10em"}} className="btn btn-dark btn-lg btn-block position-absolute bottom-0 m-2 w-9em" >SELECT BAG</button>
              </div>

              <div className="card__prod ">
                <img src={PadLock} style={{width:"8em",height:"8em"}}  />
                <button style={{width:"10em"}} className="btn btn-dark btn-lg btn-block position-absolute bottom-0 m-2 w-9em" >SELECT BAG</button>
              </div>

            <div className="card__prod__locked_slot">
                <p className="fw-bold pt-2">LOCKED SLOT</p>
                <img src={PadLock} alt="" />
                
              </div>
              <div className="card__prod__locked_slot">
                
                <p className="fw-bold pt-2">LOCKED SLOT</p>
                <img src={PadLock} alt="" />
            
              </div>
              <div className="card__prod__locked_slot">
                
                <p className="fw-bold pt-2">LOCKED SLOT</p>
                <img src={PadLock} alt="" />
              </div>
              <div className="card__prod__locked_slot">
                
                <p className="fw-bold pt-2">LOCKED SLOT</p>
                <img src={PadLock} alt="" />
              </div>
        </div>

        <table
                className="table__layout__blend"
                style={{ fontWeight: "700" ,marginTop:"120px"}}
              >
                <tr>
                  <td>loan</td>
                  <td>|</td>
                  <td>12000</td>
                </tr>
                <tr>
                  <td>Pay back</td>
                  <td>|</td>
                  <td>13200</td>
                </tr>
                <tr>
                  <td>wallet</td>
                  <td>|</td>
                  <td>12000</td>
                </tr>
                <tr>
                  <td>objective</td>
                  <td>|</td>
                  <td>15000</td>
                </tr>
                <tr style={{background:'red'}}>
                  <td>P/l</td>
                  <td>|</td>
                  <td>-1200</td>
                </tr>
              </table>
    </div>
  )
}

export default MissionCards