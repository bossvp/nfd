import React from "react";
import User from "../../img/gangs/user.png";
import Brow from "../../img/gangs/mt_brow.png";
import Footer from "../Footer";
function CardGang() {
  const boxUserOne = [];
  const boxUserTwo = [];
  let color = "red"
    for (let i = 1; i < 17; i++) {
      switch (i) {
        case 1:
          color = "#FFD06D"
          break;
        case 2:
          color = "#A993C4"
          break;

        case 3:
          color = "#FF6F79"
          break;
        case (15):
        case (16):
          color = "#C0C0C0"
          break;  
        default:
          color = "#FFBB86"
          break;
      }
      
        i < 9 ?
        boxUserOne.push(
          <div className="card__gang mb-2" style={{background:`${color}`, color:`${color}`}} key={i}>
            <span>{i}</span>
            <div className="card__gang-name">
                <img src={User} alt="" />
                <p style={{color:"black"}}>Username_0{i}</p>
                <div className="card__gang-name-punctuation">
                  <img src={Brow} alt="" />
                  <p>{42501 - i}</p>
                </div>
            </div>
        </div>
        )
        :
        boxUserTwo.push(
          <div className="card__gang mb-2" style={{background:`${color}`, color:`${color}`}} key={i}>
            <span>{i}</span>
            <div className="card__gang-name">
                <img src={User} alt="" />
                <p style={{color:"black"}}>Username_0{i}</p>
                <div className="card__gang-name-punctuation">
                  <img src={Brow} alt="" />
                  <p>{42501 - i}</p>
                </div>
            </div>
        </div>
        )
    }

  return (
    
<div className="background__gangs">
      <div className="container-fluid container__gangs">
        <div className="container__title">
          <h3 className="container__title-title">Gangs</h3>
          {/*  <h2 className="container__title-subtitle">
              Create or join a gang!
            </h2> */}
          <h2 className="container__title-subtitle">
            Rank Gang{" "}
            <span style={{ fontSize: "12px" }}>14/16 slots occupied</span>
          </h2>
        </div>

        <div className="row">
        
        <div className="col-12 col-xl-6">


        <div className="row">

          <div className="col-12 col-md-6 mb-2">

            {boxUserOne}
            {/* <div className="card__gang mb-2">
              <span>1</span>
              <div className="card__gang-name">
                <img src={User} alt="" />
                <p >Username_01</p>
                <div className="card__gang-name-punctuation">
                  <img src={Brow} alt="" />
                  <p>42500</p>
                </div>
              </div>
            </div>
            <div className="card__gang mb-2">
              <span>1</span>
              <div className="card__gang-name">
                <img src={User} alt="" />
                <p >Username_01</p>
                <div className="card__gang-name-punctuation">
                  <img src={Brow} alt="" />
                  <p>42500</p>
                </div>
              </div>
            </div>
            <div className="card__gang mb-2">
              <span>1</span>
              <div className="card__gang-name">
                <img src={User} alt="" />
                <p >Username_01</p>
                <div className="card__gang-name-punctuation">
                  <img src={Brow} alt="" />
                  <p>42500</p>
                </div>
              </div>
            </div>
            <div className="card__gang mb-2">
              <span>1</span>
              <div className="card__gang-name">
                <img src={User} alt="" />
                <p >Username_01</p>
                <div className="card__gang-name-punctuation">
                  <img src={Brow} alt="" />
                  <p>42500</p>
                </div>
              </div>
            </div>
            <div className="card__gang mb-2">
              <span>1</span>
              <div className="card__gang-name">
                <img src={User} alt="" />
                <p >Username_01</p>
                <div className="card__gang-name-punctuation">
                  <img src={Brow} alt="" />
                  <p>42500</p>
                </div>
              </div>
            </div>
            <div className="card__gang mb-2">
              <span>1</span>
              <div className="card__gang-name">
                <img src={User} alt="" />
                <p >Username_01</p>
                <div className="card__gang-name-punctuation">
                  <img src={Brow} alt="" />
                  <p>42500</p>
                </div>
              </div>
            </div>
            <div className="card__gang mb-2">
              <span>1</span>
              <div className="card__gang-name">
                <img src={User} alt="" />
                <p >Username_01</p>
                <div className="card__gang-name-punctuation">
                  <img src={Brow} alt="" />
                  <p>42500</p>
                </div>
              </div>
            </div>
            <div className="card__gang mb-2">
              <span>1</span>
              <div className="card__gang-name">
                <img src={User} alt="" />
                <p >Username_01</p>
                <div className="card__gang-name-punctuation">
                  <img src={Brow} alt="" />
                  <p>42500</p>
                </div>
              </div>
            </div> */}

          </div>

          <div className="col-12 col-md-6">
          {boxUserTwo}
              {/* <div className="card__gang mb-2">
                  <span>1</span>
                  <div className="card__gang-name">
                    <img src={User} alt="" />
                    <p >Username_01</p>
                    <div className="card__gang-name-punctuation">
                      <img src={Brow} alt="" />
                      <p>42500</p>
                    </div>
                  </div>
                </div>
              <div className="card__gang mb-2">
                  <span>1</span>
                  <div className="card__gang-name">
                    <img src={User} alt="" />
                    <p >Username_01</p>
                    <div className="card__gang-name-punctuation">
                      <img src={Brow} alt="" />
                      <p>42500</p>
                    </div>
                  </div>
                </div>
              <div className="card__gang mb-2">
                  <span>1</span>
                  <div className="card__gang-name">
                    <img src={User} alt="" />
                    <p >Username_01</p>
                    <div className="card__gang-name-punctuation">
                      <img src={Brow} alt="" />
                      <p>42500</p>
                    </div>
                  </div>
                </div>
              <div className="card__gang mb-2">
                  <span>1</span>
                  <div className="card__gang-name">
                    <img src={User} alt="" />
                    <p >Username_01</p>
                    <div className="card__gang-name-punctuation">
                      <img src={Brow} alt="" />
                      <p>42500</p>
                    </div>
                  </div>
                </div>
              <div className="card__gang mb-2">
                  <span>1</span>
                  <div className="card__gang-name">
                    <img src={User} alt="" />
                    <p >Username_01</p>
                    <div className="card__gang-name-punctuation">
                      <img src={Brow} alt="" />
                      <p>42500</p>
                    </div>
                  </div>
                </div>
              <div className="card__gang mb-2">
                  <span>1</span>
                  <div className="card__gang-name">
                    <img src={User} alt="" />
                    <p >Username_01</p>
                    <div className="card__gang-name-punctuation">
                      <img src={Brow} alt="" />
                      <p>42500</p>
                    </div>
                  </div>
                </div>
              <div className="card__gang mb-2">
                  <span>1</span>
                  <div className="card__gang-name">
                    <img src={User} alt="" />
                    <p >Username_01</p>
                    <div className="card__gang-name-punctuation">
                      <img src={Brow} alt="" />
                      <p>42500</p>
                    </div>
                  </div>
                </div>
              <div className="card__gang mb-2">
                  <span>1</span>
                  <div className="card__gang-name">
                    <img src={User} alt="" />
                    <p >Username_01</p>
                    <div className="card__gang-name-punctuation">
                      <img src={Brow} alt="" />
                      <p>42500</p>
                    </div>
                  </div>
                </div> */}
                
          </div>
        </div>
      </div>


      <div className="col-12 col-xl-6">
        <div className="container__yourgang">
        <h1 className="text-uppercase fw-bold text-center text-white" style={{fontSize:"55px"}}>your gang</h1>
        
        <div className="card__gang yourgang mb-5">
              <div className="card__gang-yourgang">
                <p>Bullies 1041</p>
                <div className="card__gang-name-punctuation">
                  <img src={Brow} alt="" />
                  <p>42500</p>
                </div>
              </div>
            </div>
        <button> Leave</button>
        </div>
     


      </div>
         
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CardGang;

