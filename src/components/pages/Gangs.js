import React from "react";
import Footer from "../Footer";
import CardGang from "../gangs-components/CardGang";
import MakeAndJoin from "../gangs-components/MakeAndJoin";
import ModalGang from "../gangs-components/ModalGang";


function Gangs() {
  return (
    <div className="background__gangs">
      <div className="container-fluid container__gangs">
        <div className="container__title">
          <h3 className="container__title-title">Gangs</h3>
          {/*  <h2 className="container__title-subtitle">
              Create or join a gang!
            </h2> */}
          <h2 className="container__title-subtitle">
            Rank Gang{" "}
            <span style={{ fontSize: "12px" }}>14/16 slots occupied</span>
          </h2>
        </div>

        <div className="row">
       {/*    <MakeAndJoin/> */}
        {/*   <CardGang/> */}
          <ModalGang />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gangs;
