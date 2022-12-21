import React from 'react'
import Vince from '../../img/gangs/vince-testa.png'
import Pam from '../../img/gangs/pam-mei.png'
function MakeAndJoin() {
  return (
    <div className='col-12' >
        <div className='container__gangs-characters'>
            <div className="container__make">
                <img src={Vince} alt="" />
                <div className="container__make-button">
                    <button>make</button>
                </div>
            </div>
            <div className="container__make">
            <img src={Pam} alt="" />
                <div className="container__make-button">
                    <button>join</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MakeAndJoin