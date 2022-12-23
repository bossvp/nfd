import React from 'react'
import s from './stylesModals.module.scss'


import img from '../../img/season/bike.png'

function SelectCard( {state, setstate} ) {
    const selectorCards = (e) =>{
        console.log(e.target.classList)
        e.target.classList.toggle(s["select"]);


    }
    const card = [];
    for (let i = 0; i < 21; i++) {
        card.push(
            <div className={s.card } key={i} onClick={selectorCards}>
                <img src={img} alt="" />

                <p style={{fontWeight:"bold", margin:".8em 0 1.3em"}}>
                    BIKE (001)
                </p>
            </div>
        )   
    }

  
  return (
    <>
        {state &&
            <div className={s.containerModalAddCard}>

                <div className={s.boxModalAddCard}>
                    <h1 
                    className={s.btnExit} 
                    onClick={()=> setstate(false)}
                    
                    >x</h1>
                    <h1 style={{fontWeight:"bold"}}>SELECT CARD</h1>

                    

                    <div className={s.cards}>
                        {card}
                    </div>

                    <button className={`${s.btnConfirm} button`}>
                        <h5>CONFIRM</h5>
                    </button>

                </div> 
            </div>
        } 
    </>
  )
}

export default SelectCard