import React from 'react'
import Life from '../../img/battle/life.png'
function EquipInfo() {
  return (
    <div className='container__info'>
<img src={Life} alt="" />
<div className="container__info__equip">
    <p>
        Respect
    </p>
    <p className="container__info__equip-number">407</p>
</div>
    </div>
  )
}

export default EquipInfo