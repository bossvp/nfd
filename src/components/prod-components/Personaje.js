import React from 'react'
import Shark from "../../img/shark.png"
function Personaje() {
  return (
    <div className='container max-vh-30' id='cont' style={{height:"460px !important", maxHeight:"460px !important"}}>

        <div className="row" style={{marginTop:"4rem"}} >
            <p className='h1 text-uppercase text-white fw-bold' style={{marginLeft:"100px"}}>Selected item  <span className=' h4 ms-4 text-uppercase text-white fw-bold'>character</span></p>
           
            <div className="col-12 col-md-6">

            <img src={Shark} alt="" className='personaje__img'/>
            </div>
            <div className="col-12 col-md-6">
            <h2 className='fw-bold text-uppercase text-white ps-3 mb-2' style={{marginTop:"35px"}}>Hugo 'shark' cruz</h2>
            <h3 className='fw-bold text-uppercase text-white ps-3'>item detail</h3>
            <table className="table__layout" style={{marginLeft:"15px"}}>
                  <tr>
                    <td>assed id</td>
                    <td>|</td>
                    <td>1099811735470</td>
                  </tr>
                  <tr>
                    <td>mint</td>
                    <td>|</td>
                    <td>24</td>
                  </tr>
                  <tr>
                    <td>mint date</td>
                    <td>|</td>
                    <td>1 aug, 2022 22:26:44</td>
                  </tr>
                  <tr>
                    <td>rarity</td>
                    <td>|</td>
                    <td>gold</td>
                  </tr>
                  <tr>
                    <td>type</td>
                    <td>|</td>
                    <td>sativa</td>
                  </tr>
                </table>
                <h3 className='fw-bold text-uppercase mt-3'>Production</h3>
                <table className="table__layout"  style={{marginLeft:"15px"}}>
                  <tr>
                    <td>time</td>
                    <td>|</td>
                    <td>50 min</td>
                  </tr>
                  <tr>
                    <td>luck</td>
                    <td>|</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>power</td>
                    <td>|</td>
                    <td>48</td>
                  </tr>
                </table>
                <h3 className='fw-bold text-uppercase mt-3'>deal</h3>
                <table className="table__layout"  style={{marginLeft:"15px"}}>
                  <tr>
                    <td>speed</td>
                    <td>|</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>respect</td>
                    <td>|</td>
                    <td>25</td>
                  </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Personaje