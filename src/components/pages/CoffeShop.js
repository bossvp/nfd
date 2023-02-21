import React from 'react'
import CardCoffe from '../coffe-components/CardCoffe'
import Footer from '../Footer'

function CoffeShop() {
  return (
    <div className="background__coffe">
        <div className="container-fluid container__coffe">

        <div className="container__title">
          <h3 className="container__title-title">CoffeShop</h3>
          <h2 className="container__title-subtitle">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>

        <div className="row ">
            <div className="col-12 col-xl-3 my-2">
            <CardCoffe/>
            </div>
            <div className="col-12 col-xl-3 my-2">
            <CardCoffe/>
            </div>
            <div className="col-12 col-xl-3 my-2">
            <CardCoffe/>
            </div>
            <div className="col-12 col-xl-3 my-2">
            <CardCoffe/>
            </div>
        </div>

        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default CoffeShop