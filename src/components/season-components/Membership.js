import React from 'react'
import CardCoffe from '../coffe-components/CardCoffe'
import CardSeason from './CardSeason';
import cardGold from '../../img/gold_pss.png'
import { fontWeight } from '@mui/system';

function Membership({btn,setText}) {
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
                 
                 
                 
                 <select name="cars" id="cars" 
                 style={{color:"white", fontWeight:"bold", background:"black",padding:"1.2rem", width:"14rem", height:"4rem", fontSize:"1.4rem", border:"none", borderRadius:"2rem", outline:"none", marginTop:"1.5rem"}}
                 >
                     <option >OPTION 1</option>
                     <option >OPTION 2</option>
                     <option >OPTION 3</option>
                     <option >OPTION 4</option>
                 </select>
        
                 <div className="center d-flex flex-column justify-content-center align-items-center" style={{marginTop:"1.5rem"}}>
                     <p
                     style={{color:"white", fontWeight:"bold", margin:"0"    }}
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
         
         
       </>
     
    
  )
}

export default Membership