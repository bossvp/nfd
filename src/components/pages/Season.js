import React, { useState } from "react";
import Footer from "../Footer";
import ImagesGroup from "../season-components/ImagesGroup";
import InfoMision from "../season-components/InfoMision";
import MissionCards from "../season-components/MissionCards";
import OptionsMission from "../season-components/OptionsMission";

function Season() {
  const [ePage, setPage] =useState(true)

  return (
    <div className="background__season">
      <div className="container-fluid container__season">
      <div className="container__title">
            <h3 className="container__title-title">Missions</h3>
            <h2 className="container__title-subtitle">
              select one and start an adventure!
            </h2>
          
          </div>
        <div className="row ">
         
        {ePage &&
          <>
            <ImagesGroup  btnStart={setPage}/>
            <InfoMision />
          </>
        }
         {!ePage &&
            <>
              <MissionCards/>
              <OptionsMission/>
            </>
         }
          
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Season;
