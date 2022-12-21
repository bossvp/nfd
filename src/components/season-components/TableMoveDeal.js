import React from 'react'

function TableMoveDeal() {
  return (
    <table className="tabla_mision">
              <thead>
                <tr>
                  <td colSpan={6}>
                    <div className="container__header-table ">
                      <button>Move</button>
                      <button>Refresh</button>
                      <input type="text" />
                      <button>Deal</button>
                    </div>

                    <h2 className="fw-bold h1 mt-3">Assets in WALLET</h2>
                    <h3 className="text-success fw-bold pb-3">
                      Total price 281899.52 ePHEEBO
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td>Nfd</td>
                  <td>Weight</td>
                  <td>Rarity</td>
                  <td>Quantity</td>
                  <td>Total price</td>
                  <td>Quantity to move</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nepal</td>
                  <td>oz</td>
                  <td>silver</td>
                  <td>3</td>
                  <td>281899.22</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>og kush</td>
                  <td>gr</td>
                  <td>gold</td>
                  <td>3</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
  )
}

export default TableMoveDeal