// import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import { Link } from "react-router-dom";
// import s from './stylesModals.module.scss'

// function SelectCard( {state, setState} ) {
//   const [show, setShow] = useState(true);

//   const handleClose = () => {
//     setShow(false)
//     // setState({...state, [text.name]:false})
//   };
//   const handleShow = () => setShow(true);
  

//     const selectorCards = (e) =>{
//     e.target.classList.toggle("select");
//     }

//     const card = [];
//     for (let i = 0; i < 21; i++) {
//         card.push(
//             <div className="modal__card" key={i} onClick={selectorCards}>
//                 <img src={state.img} alt="" />

//                 <p style={{fontWeight:"bold", margin:".8em 0 1.3em", pointerEvents:"none"}}>
//                     BIKE (001)
//                 </p>
//             </div>
//         )   
//     }


//   return (
//     <>
//       <Modal
//         show={show}
//         onHide={handleClose}
//         // backdrop="static"
//         keyboard={false}
//         centered
//       >
       
//         <Modal.Body className="background__modal">

//           <div className="body__modal">

//             <div className="body__modal-header">
//               <h2>SELECT BAG</h2>
//             </div>

//             <div className="modal__cards">
//                 {card}
//             </div>
           
//             <div className="body_modal__footer">
//             {/* <p className="text-center text-white fw-bolder text-white h2">{text.details}</p> */}

//             <div className="body_modal__footer-buttons">
                
//                 <div className="modal__footer-buttons">
//                     {/* <button onClick={()=>handleClose()}>
//                         Cancel
//                     </button> */}
                    
//                       <button onClick={()=>handleClose()}>CONFIRM</button>
                    
//                 </div>
//             </div>
//             </div>

//           </div>
//         </Modal.Body>
        
        
//       </Modal>
//     </>
//   );
// }

// export default SelectCard;
