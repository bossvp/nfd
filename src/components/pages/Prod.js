import React, { useState } from "react";
import Footer from "../Footer";
import Shark from "../../img/shark.png";
import Phi from "../../img/phi201.png";
import PadLock from "../../img/padlock.png";
import Satin from "../../img/satin.png";
import Base from "../../img/base.png";
import Personaje from "../prod-components/Personaje";

function Prod() {
  const [active, setActive] = useState(false);
  const activarCard = () => {
    // alert('funciona')
    setActive(true);
  };
  const activeTable = () => {
    // alert('funciona')
    setActive(false);
  };

  const [eElement, setElement] = useState({
    empty: false,
    personaje: false,
    table: true,
  });

  function seteo(prop) {
    const tabs = {
      empty: false,
      personaje: false,
      table: false,
    };

    setElement({ ...tabs, [prop]: true });
  }

  return (
    <div className="background__prod">
      <div className="container-fluid">
        <div className="row container__prod">
          <div className="col-12 col-md-7">
            <p className="text-uppercase fw-bold prod__title ms-4">
              Produce nfd
            </p>

            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <p className="text-uppercase fw-normal prod__subtitle">
                  Your Slots{" "}
                  <span className="text-uppercase">4/9 slots occupied</span>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <button className="btn_prod" onClick={() => seteo("table")}>
                  Show slow prices
                </button>
              </div>
            </div>

            <div className="container__cards" style={{ marginLeft: "45px" }}>
              <div className="card__prod" onClick={() => seteo("personaje")}>
                <img src={Shark} alt="" />
                <p className="fw-bold pt-2">Hugo "Shark" Cruz</p>
                <span></span>
              </div>

              <div className="card__prod">
                <img src={Phi} alt="" />
                <p className="fw-bold pt-2">PHS ( 28657)</p>
                <span></span>
              </div>
              <div className="card__prod ">
                <img src={PadLock} style={{ width: "8em", height: "8em" }} />
                <button
                  style={{ width: "10em" }}
                  className="btn btn-dark btn-lg btn-block position-absolute bottom-0 m-2 w-9em"
                >
                  SELECT BAG
                </button>
              </div>
              <div className="card__prod">
                <img src={Satin} alt="" />
                <p className="fw-bold pt-2">Anya "Fate" Khan</p>
                <span></span>
              </div>
            </div>

            <div className="container__locked" style={{ marginLeft: "45px" }}>
              <div
                className="card__prod__locked"
                onClick={() => seteo("empty")}
              >
                <img src={Base} alt="" />
                <p className="fw-bold pt-2">Empy slot</p>
                <span></span>
              </div>
              <div
                className="card__prod__locked"
                onClick={() => seteo("empty")}
              >
                <img src={Base} alt="" />
                <p className="fw-bold pt-2">Empy slot</p>
                <span></span>
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

            <div className="row mt-5">
              <div className="col-12">
                <table className="table__layout">
                  <tr>
                    <td>bullets</td>
                    <td>|</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>epheebo</td>
                    <td>|</td>
                    <td>1,000,000.53673</td>
                  </tr>
                  <tr>
                    <td>$PBO</td>
                    <td>|</td>
                    <td>1,000,000.53673</td>
                  </tr>
                  <tr>
                    <td>LVL</td>
                    <td>|</td>
                    <td>Baron 10.00/15.00 respect</td>
                  </tr>
                </table>

                <div className="progress-bar__simple"></div>
              </div>
            </div>
          </div>

          {/* TABLA */}
          <div
            className="col-12 col-md-5 "
            style={{ border: "1px solid black" }}
          >
            {eElement.table && (
              <table className="tabla_prod">
                <thead>
                  <tr>
                    <td>Slot-type</td>
                    <td>Respect needed</td>
                    <td>Rarity</td>
                    <td>Price (ePHEEBO)</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowspan="3">5-Printer</td>
                    <td rowspan="3">8000</td>
                    <td>Common</td>
                    <td>35</td>
                  </tr>
                  <tr>
                    <td>Silver</td>
                    <td>280</td>
                  </tr>
                  <tr>
                    <td>Gold</td>
                    <td>886</td>
                  </tr>

                  <tr>
                    <td rowspan="3">6-Bag</td>
                    <td rowspan="3">1300</td>
                    <td>Common</td>
                    <td>29</td>
                  </tr>
                  <tr>
                    <td>Silver</td>
                    <td>146</td>
                  </tr>
                  <tr>
                    <td>Gold</td>
                    <td>886</td>
                  </tr>

                  <tr>
                    <td rowspan="3">7-Henchman</td>
                    <td rowspan="3">21000</td>
                    <td>Common</td>
                    <td>48</td>
                  </tr>
                  <tr>
                    <td>Silver</td>
                    <td>392</td>
                  </tr>
                  <tr>
                    <td>Gold</td>
                    <td>1283</td>
                  </tr>

                  <tr>
                    <td rowspan="3">8-Bag</td>
                    <td rowspan="3">34000</td>
                    <td>Common</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>Silver</td>
                    <td>221</td>
                  </tr>
                  <tr>
                    <td>Gold</td>
                    <td>678</td>
                  </tr>

                  <tr>
                    <td rowspan="3">9-Printer</td>
                    <td rowspan="3">55000</td>
                  </tr>

                  <tr>
                    <td>Silver</td>
                    <td>350</td>
                  </tr>
                  <tr>
                    <td>Gold</td>
                    <td>1283</td>
                  </tr>
                </tbody>
              </table>
            )}

            {eElement.personaje && <Personaje />}

            {eElement.empty && (
              <div
                className="container max-vh-30"
                id="cont"
                style={{
                  height: "460px !important",
                  maxHeight: "460px !important",
                }}
              >
                <div className="row" style={{ marginTop: "4rem" }}>
                  <div className="h1 text-uppercase text-white fw-bold d-flex justify-content-between align-items-center">
                    <p className="h1 text-uppercase text-white fw-bold">
                      Selected item
                      <span className=" h4 ms-4 text-uppercase text-white fw-bold">
                        EMPTY SLOT
                      </span>
                    </p>
                    
                  </div>
                  <div className="btns__prod d-flex justify-content-center align-items-center flex-column gap-3" style={{marginTop:"1em"}}>
                    <button className="btn" style={{background:"#FEF571", color:"#564709", fontWeight:"900", width: "10em" , fontSize:"1.4em"}}>ADD CARD</button>
                    <button className="btn" style={{background:"#FF6DAB", color:"#564709", fontWeight:"900", width: "10em", fontSize:"1.4em"}}>UPGRADE SLOT</button>
                  </div>
                </div>
              </div>
            )}

            <div className="row">
              <div className="mt-4 ms-4">
                <p className="text-uppercase fw-bolder h2 ">Production</p>
                <div className="ms-5">
                  <p className="text-uppercase fw-bolder h2 ">
                    150 min production time
                  </p>
                </div>
                <div className="progress-bar__production"></div>
                <div className="buttones__tabla">
                  <button className="btn-mediam">prod</button>
                  <button className="btn-mediam">print</button>
                </div>
              </div>

              <div className="d-flex justify-content-center mt-3">
                <table className="table__layout">
                  <tr>
                    <td>pure crystalline</td>
                    <td>|</td>
                    <td>0 MD</td>
                  </tr>
                  <tr>
                    <td>Malana cream</td>
                    <td>|</td>
                    <td>0 MD</td>
                  </tr>
                </table>
              </div>
              <p style={{ textAlign: "center", fontWeight: "" }}>
                PHEEBO | WEED | SATIVA | #1257
              </p>
            </div>
          </div>
        </div>
      </div>
      {<Footer />}
    </div>
  );
}

export default Prod;
