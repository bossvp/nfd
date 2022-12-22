import React, { useState } from "react";
import Card from "../blend-components/Card";
import Footer from "../Footer";
import Form from "react-bootstrap/Form";
import TableWallet from "../wallet-components/TableWallet";
import WalletCard from "../wallet-components/WalletCard";
import FormWallet from "../wallet-components/FormWallet";

function Profile() {
  return (
    <div className="background__wallet">
      <div className="container-fluid container__wallet">
        <div className="container__title">
          <h3 className="container__title-title">Profile</h3>
        </div>

        <div className="row mt-5">
        
        
         


       

         
        
         <WalletCard/> 
         <FormWallet/>
        </div>

        
      </div>

      <Footer />
    </div>
  )
}

export default Profile