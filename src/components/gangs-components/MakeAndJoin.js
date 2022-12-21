import React from 'react'
import Vince from '../../img/gangs/vince-testa.png'
import Pam from '../../img/gangs/pam-mei.png'
function MakeAndJoin({state, setState}) {
  return (
    <div className='col-12' >
        <div className='container__gangs-characters'>
            <div className="container__make">
                <img src={Vince} alt="" />
                <div className="container__make-button">
                    <button onClick={()=>setState({...state, Make:true})}>make</button>
                </div>
            </div>
            <div className="container__make">
            <img src={Pam} alt="" />
                <div className="container__make-button">
                    <button onClick={()=>setState({...state, Join:true})}>join</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MakeAndJoin