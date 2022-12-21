import React from "react";
import EarlyFinish from "./EarlyFinish";
import LockSlots from "./LockSlots";
import TableLogs from "./TableLogs";
import TableMarket from "./TableMarket";
import TableMoveDeal from "./TableMoveDeal";
import TabletTransfer from "./TabletTransfer";

function OptionsMission() {
  return (
    <div className="col-12 col-md-6 ">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 col-xl-2">
            <div className="container__buttons mb-4">
              <button>Info</button>
              <button>logs</button>
              <button>slots</button>
              <button>market</button>
              <button>move/deal</button>
              <button>transfer</button>
            </div>
          </div>
          <div
            className="col-12 col-xl-10"
          >
      {/*     <TableMoveDeal/> */}
        {/*  <EarlyFinish/> */}
      {/*    <TableLogs/> */}
     {/*     <TableMarket/> */}
        {/*  <LockSlots/> */}
         
         <TabletTransfer/>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionsMission;
