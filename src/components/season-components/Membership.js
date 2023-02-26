import React, { useState } from "react";
import CardCoffe from '../coffe-components/CardCoffe'
import CardSeason from './CardSeason';
import cardGold from '../../img/gold_pss.png'
import SelectCard from "../Modals/SelectCard";


function Membership({btn,setText}) {

  const [eModalSelect,setModalSelect] = useState({
    active:false,
    img: "",
    tittle: "Card",
  });


  return (
    
        

        

       <>
         <div className="row col-12 ">
             <div className="col-12 col-xl-2 my-2" 
             >
             <CardSeason/>
             </div>
             <div className="col-12 col-xl-2 my-2">
             <CardSeason/>
             </div>
             <div className="col-12 col-xl-2 my-2">
             <CardSeason/>
             </div>
             <div className="col-12 col-xl-2 my-2">
             <CardSeason/>
             </div>
             
             <div className=" col-12 my-2 col-xl-4" style={{ marginTop: "100px" }}>
        
             <div className=" d-flex flex-column justify-content-center align-items-center  col-12 col-xl-3 my-2 cardcoffe" 
             style={{ width:"auto"}} >
             
                <h1
                 style={{color:"white", fontWeight:"bold"}}
                 >STAKE</h1>
                 <img src={cardGold} alt="" className="" style={{width:"20rem"}}  />
                 
                 
                 
                 <button  
                 style={{color:"white", fontWeight:"bold", background:"black",padding:"1.2rem", width:"14rem", height:"4rem", fontSize:"1.4rem", border:"none", borderRadius:"2rem", outline:"none", marginTop:"1.5rem"}}
                 
                 onClick={()=> setModalSelect({ ...eModalSelect, active: true, tittle: "CARD", img:cardGold })}
                 >
                     OPTION 1
                 </button>
        
                 <div className="center d-flex flex-column justify-content-center align-items-center" style={{marginTop:"1.5rem"}}>
                     <p
                     style={{color:"white", fontWeight:"bold", margin:"0",     }}
                     >CONFIRM SELECTION</p> 
                     <button className="container__coffe-button" 
                     style={{background:"#725648", width:"12rem", margin:"0"}}
                     onClick={ ()=>{
                 
                        btn("Level");
                        setText({
                            tittle: "LEVEL",
                            subtitle: "Lorem ipsum dolor sit Amet."
                            })
                        }
                        
                        }
                     >NEXT</button>
                 </div>

             </div>
        
             
            </div>
             
         </div>
         <SelectCard state={eModalSelect} setstate={setModalSelect}/>
         
       </>
     
    
  )
}

export default Membership