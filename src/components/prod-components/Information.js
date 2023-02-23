import React from 'react'


import iconInfo from '../../img/info.png'

function Information({eSelect,seteoWindow,setText, eText, color = "#B06A26", btnInfo}) {
  return (
    <div className="col-12 col-md-3 d-flex flex-column" >

        <div className='d-flex justify-content-center align-items-center' style={{marginBottom:"2.5rem"}}> 
            <img src={iconInfo} alt=""  style={{width:"2rem", height:"2rem" , marginRight:"2rem"}}/>
            <h1
              className="text-white text-uppercase text-center fw-bold m-1 d-flex"
              style={{ margin: "200px 0px" }}
            >
           
              info {eText.tittle}
            </h1>
        </div>

        

        <h4 className="text-uppercase text-white fw-bold text-center p-0 m-0">
          Assets Multiplier
        </h4>
        <p className="text-white text-center  " style={{ marginLeft: "70px" }}>
          0.5%
        </p>

        <h4 className="text-uppercase text-white fw-bold text-center p-0 m-0">
          Random
        </h4>
        <p className="text-white text-center  " style={{ marginLeft: "70px" }}>
          After slot are lack, we add <br /> the random bonus
        </p>

        <h4 className="text-uppercase text-white fw-bold text-center p-0 m-0">
          total multiplier
        </h4>
        <p className="text-white text-center  " style={{ marginLeft: "70px" }}>
          0.5% (+/-10%)
        </p>

        <table className="table__layout mb-4" style={{  }}>
        <tbody>
        <tr>
            <td>neutral bonus</td>
            <td>|</td>
            <td>0%</td>
          </tr>
          <tr>
            <td>sativa bonus</td>
            <td>|</td>
            <td>0%</td>
          </tr>
          <tr>
            <td>Hybrid Bonus</td>
            <td>|</td>
            <td>8</td>
          </tr>
          <tr>
            <td>indica bonus</td>
            <td>|</td>
            <td>10%</td>
          </tr>
        </tbody>
        </table>

        <div className="row" style={{marginTop:"3rem"}}>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-white fw-bold text-uppercase ">
              {" "}
              Confirm Selection
            </h3>

            
            <button
              className="btn "
              style={{background:color, width:"8em", fontSize:"1.7em", color:"white", fontWeight:"bold" }}
              onClick={() => {
                if (eSelect) {
                  seteoWindow(btnInfo.set);
                  setText({
                    tittle: btnInfo.tittle,
                    subtitle: btnInfo.subtitle,
                  });
                }
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
  )
}

export default Information