import React from 'react'
import CardCoffe from '../coffe-components/CardCoffe'


function Membership({btn,setText}) {
  return (
    
        

        

        <div className="row ">
            <div className="col-12 col-xl-3 my-2" 
            onClick={ ()=>{
                
                btn("Level");
                setText({
                    tittle: "LEVEL",
                    subtitle: "Lorem ipsum dolor sit Amet."
                    })
                }
                 
                }>
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

     
    
  )
}

export default Membership