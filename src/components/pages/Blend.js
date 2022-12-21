import React from "react";
import Card from "../blend-components/Card";
import Footer from "../Footer";
import Hat from "../../img/hat.png";
import Level from "../../img/level.png";
import Moustache from "../../img/moustache.png";
function Blend() {
  return (
    <div className="background__blend">
      <div className="container-fluid">
        <div className="row container__blend">
          <div className="col-12 col-md-8">
            <p className="text-uppercase fw-bold prod__title ms-4">Blend</p>

            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <p className="text-uppercase fw-normal prod__subtitle">
                  Select your items
                  <span className="text-uppercase">
                    1/12 items ready for blending
                  </span>
                </p>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-end align-items-center">
                <button className="btn_prod">md common</button>
              </div>
            </div>

            <div
              className="container__cards__blend"
              style={{ marginLeft: "45px" }}
            >
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <p className="text-uppercase fw-bold h2 text-end pe-5 pt-4">
              Confirm blend
            </p>
            <div className="d-flex flex-column justify-content-end align-items-end">
              <table
                className="table__layout__blend"
                style={{ fontWeight: "700" }}
              >
                <tr>
                  <td>items</td>
                  <td>|</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>blend cost</td>
                  <td>|</td>
                  <td>0$PBO</td>
                </tr>
              </table>
              <button className="btn-mediam me-5">Blend</button>
            </div>
          </div>
          <div className="col-12 col-md-4 cara__score">


            <h2 className="text-uppercase fw-bold text-white text-center score-blend">
              Score
            </h2>

            <div className="score__content">
              <div className="score__content__agrupamiento pb-3">
                <div className="score__card">
                  <div className="score__card__header">
                    <img src={Hat} alt="" />
                    <div className="score-title">
                      <p className="fw-bolder text-uppercase">Respect</p>
                    </div>
                  </div>
                  <div className="score__card__body">
                    <p>170 </p>
                    <span>received</span>
                  </div>
                </div>

                <div className="score__card">
                  <div className="score__card__header">
                    <img src={Level} alt="" />
                    <div className="score-title">
                      <p className="fw-bolder text-uppercase">level</p>
                    </div>
                  </div>
                  <div className="score__card__body">
                    <p>20</p>
                    <span>280/2,500 xP</span>
                  </div>
                </div>
              </div>

              <div className="score__content__agrupamiento pb-3">
                <div className="score__card ">
                  <div className="score__card__header">
                    <img src={Moustache} alt="" />

                    <div className="score-title">
                      <p className="fw-bolder text-uppercase">$PBO</p>
                    </div>
                  </div>
                  <div className="score__card__body">
                    <p>20</p>
                    <span>280/2,500 xP</span>
                  </div>
                </div>

                <div className="score__card ">
                  <div className="score__card__header">
                    <div className="score-title">
                      <p className="fw-bolder text-uppercase">seanson points</p>
                    </div>
                  </div>
                  <div className="score__card__body">
                    <p>20</p>
                    <span>280/2,500 xP</span>
                  </div>
                </div>
              </div>
             
              
            </div>
            <div className="score__container-ultimocard">
            <div className="score__card ">
                  <div className="score__card__header">
                    <div className="score-title">
                      <p className="fw-bolder text-uppercase">other stat</p>
                    </div>
                  </div>
                  <div className="score__card__body">
                    <p>000</p>
                    <span>L impsun</span>
                  </div>
                </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blend;
