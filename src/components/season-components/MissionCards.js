import React from 'react'
import Card from '../blend-components/Card'

function MissionCards() {
  return (
    <div  className="col-12 col-md-6 ">

        <div className="container__cards_mission">

            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

        <table
                className="table__layout__blend"
                style={{ fontWeight: "700" ,marginTop:"120px"}}
              >
                <tr>
                  <td>loan</td>
                  <td>|</td>
                  <td>12000</td>
                </tr>
                <tr>
                  <td>Pay back</td>
                  <td>|</td>
                  <td>13200</td>
                </tr>
                <tr>
                  <td>wallet</td>
                  <td>|</td>
                  <td>12000</td>
                </tr>
                <tr>
                  <td>objective</td>
                  <td>|</td>
                  <td>15000</td>
                </tr>
                <tr style={{background:'red'}}>
                  <td>P/l</td>
                  <td>|</td>
                  <td>-1200</td>
                </tr>
              </table>
    </div>
  )
}

export default MissionCards