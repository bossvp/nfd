import React from 'react'
import Buttons from '../stats-components/Buttons'
import TableLucky from '../stats-components/TableLucky'
import TableRewards from '../stats-components/TableRewards'
import TableWeek from '../stats-components/TableWeek'
import Footer from "../Footer";
function Stats() {
  return (
    <div  className="background__stats">
        <div className="container-fluid container__stats" >
        <div className="container__title">
          <h3 className="container__title-title">stats</h3>
        
        <div className="row">
<Buttons/>
{/* <TableWeek/> */}
{/* <TableRewards/> */}
<TableLucky/>
        </div>
        </div>
        </div>

        <Footer />
    </div>
  )
}

export default Stats