import React from 'react'
import CardBattle from '../battle-components/CardBattle'
import Equip from '../battle-components/Equip'
import Vs from '../battle-components/Vs'
import Footer from '../Footer'

function Battle() {
  return (
    <div className="background__battle">

<div className="container-fluid container__battle">
      <div className="container__title">
            <h3 className="container__title-title">battle</h3>
            <h2 className="container__title-subtitle">
              equip your character and start fighting!
            </h2>
          
          </div>
        <div className="row ">
            <div className="col-12">
            <div className="layout__battle">
        {/*     <CardBattle/>
         <Vs/>
         <CardBattle/> */}
        
            </div>

             <Equip/>
            </div>
           
       
        </div>
        <div className='battle__buttons'>
            <button>Equip</button>
            <button>Macth</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Battle