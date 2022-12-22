import React from "react";
import Buttons from "../stats-components/Buttons";
import TableLucky from "../stats-components/TableLucky";
import TableRewards from "../stats-components/TableRewards";
import TableWeek from "../stats-components/TableWeek";
import Footer from "../Footer";
import { useState } from "react";
function Stats() {
  const [eTabs, setTabs] = useState({
    Week: true,
    Rewards: false,
    Lucky:false,  
  });

  function seteo(prop) {
    const tabs = {
      Week: false,
      Rewards: false,
      Lucky:false,  
    };

    setTabs({ ...tabs, [prop]: true });
  }

  let btnStyles = {
    background: "#C74C39",
  };
  return (
    <div className="background__stats">
      <div className="container-fluid container__stats">
        <div className="container__title">
          <h3 className="container__title-title">stats</h3>

          <div className="row">
            <Buttons seteo={seteo} btnStyles={btnStyles} eTabs={eTabs} />
            { eTabs.Week &&
              <TableWeek/> 
            }
            {eTabs.Rewards &&
              <TableRewards/>
            }
            {eTabs.Lucky &&
              <TableLucky />
            }
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Stats;
