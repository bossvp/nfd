import React from "react";

function TableMarket() {
  return (
    <table className="tabla_mision">
      <thead>
        <tr>
          <td colSpan={6}>
            <h4 className="text-secondary fw-bold pb-1">
              Total price 0.00 ePHEEBO
            </h4>
            <div className="container__header-table mb-3 ">
              <button>buy</button>
              <button>Refresh</button>
            </div>
          </td>
        </tr>
        <tr >
          <td>Nfd</td>
          <td>Price %</td>
          <td>Weight-Rarity</td>
          <td>Quantity</td>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>Napal</td>
            <td>13.84 -2.1%</td>
            <td>
              <select name="" id="" className="fondoSelect">
                <option value="">MD Common - 13.84</option>
              </select>
            </td>
            <td>
                <input type="number"/>
            </td>
          </tr>
          <tr>
            <td>Napal</td>
            <td>13.84 -2.1%</td>
            <td>
              <select name="" id="" className="fondoSelect">
                <option value="">MD Common - 13.84</option>
              </select>
            </td>
            <td>
                <input type="number"/>
            </td>
          </tr>
          <tr>
            <td>Napal</td>
            <td>13.84 -2.1%</td>
            <td>
              <select name="" id="" className="fondoSelect">
                <option value="">MD Common - 13.84</option>
              </select>
            </td>
            <td>
                <input type="number"/>
            </td>
          </tr>
      </tbody>
    </table>
  );
}

export default TableMarket;
