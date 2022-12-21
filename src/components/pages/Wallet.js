import React from "react";
import Card from "../blend-components/Card";
import Footer from "../Footer";
import Form from "react-bootstrap/Form";
import TableWallet from "../wallet-components/TableWallet";
import WalletCard from "../wallet-components/WalletCard";
import FormWallet from "../wallet-components/FormWallet";

function Wallet() {
  return (
    <div className="background__wallet">
      <div className="container-fluid container__wallet">
        <div className="container__title">
          <h3 className="container__title-title">wallet</h3>
        </div>

        <div className="row mt-5">
        {/* 
        selects
        <div className="col-12 ">
            <div className="float-end">
              <div className="container_selects">
                <div>
                  <Form.Select
                    aria-label="Default select example"
                    className="fondoSelect"
                  >
                    <option>Rarity filter</option>
                    <option value="1">Common</option>
                    <option value="2">Epic</option>
                    <option value="3">Mytic</option>
                  </Form.Select>
                </div>

                <div>
                  <Form.Select
                    aria-label="Default select example"
                    className="fondoSelect"
                  >
                    <option>Orden Direction</option>
                    <option value="1">Common</option>
                    <option value="2">Epic</option>
                    <option value="3">Mytic</option>
                  </Form.Select>
                </div>
                <div>
                  <Form.Select
                    aria-label="Default select example"
                    className="fondoSelect"
                  >
                    <option>Sort By</option>
                    <option value="1">Common</option>
                    <option value="2">Epic</option>
                    <option value="3">Mytic</option>
                  </Form.Select>
                </div>
              </div>
            </div>
          </div> */}

       {/*    
       buttones
       <div className="col-12 ">
            <div className="float-end">
              <div className="container_selects">
                <div>
               <button className="button">Use in Prod</button>
                </div>

                <div>
                <button className="button">Use in Deal</button>
                </div>
                <div>
                <button className="button">Not in Use</button>
                </div>
              </div>
            </div>
          </div>  */}

    {/*       <div className="container__cards__blend">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div> */}
         {/*  <TableWallet/> */}
         <WalletCard/>
         <FormWallet/>
        </div>

        <div className="battle__buttons" style={{ marginTop: "140px" }}>
          <button>Game items</button>
          <button>Logs W</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Wallet;
