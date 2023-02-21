import React, { useState } from "react";
import Footer from "../Footer";
import ImagesGroup from "../season-components/ImagesGroup";
import InfoMision from "../season-components/InfoMision";
import Level from "../season-components/Level";
import Membership from "../season-components/Membership";
import MissionCards from "../season-components/MissionCards";
import OptionsMission from "../season-components/OptionsMission";

function Season() {
  // const [ePage, setPage] =useState(true)

  const [eWindow, setWindow] = useState(
    {
      Membership:true,
      Level:false,
      Missions:false,
      Options:false,
      })

    function seteo(prop) {
      const tabs ={
        Membership:false,
      Level:false,
      Missions:false,
      Options:false,
      }

      setWindow({...tabs, [prop]:true})
    }

    const[eText , setText] = useState({
      tittle: "Membership",
      subtitle: "Lorem ipsum dolor sit Amet."
    })

  return (
    <div className="background__season">
      <div className="container-fluid container__season">
      
      <div className="container__title">
            <h3 className="container__title-title">{eText.tittle}</h3>
            <h2 className="container__title-subtitle">
              {eText.subtitle}
            </h2>
          
          </div>
        <div className="row ">
        {eWindow.Membership  && 

            <Membership btn={seteo} setText={setText}/>
      
        }

        {eWindow.Level && 
         <Level btn={seteo} setText={setText}/>
        }
        {eWindow.Missions &&
          <>
            <ImagesGroup  btnStart={seteo}/>
            <InfoMision />
          </>
        }
         {eWindow.Options &&
            <>
              <MissionCards/>
              <OptionsMission/>
            </>
         }
          
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Season;
