import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import s from "../Modals/stylesModals.module.scss"

function ModalCards({ state, setstate, img }) {
    const [show, setShow] = useState(true);

    const handleClose = () => {
      setShow(false);
      setstate(!state);
    };
    const handleShow = () => setShow(true);
    
    // selector de cards
    const selectorCards = (e) =>{
        e.target.classList.toggle("select_ModalCards");
        alert("hubo click")
    }
    const card = [];
    for (let i = 0; i < 21; i++) {
        card.push(
            <div className="card__ModalCards" key={i} onClick={()=>selectorCards}>

                <img src={img} alt="" /> //falta el img
                <p style={{fontWeight:"bold", margin:".8em 0 1.3em"}}>
                    BIKE (001)
                </p>

            </div>
        )
        
    }


    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          keyboard={false}
          centered
        >
          <Modal.Body className="bg_modalText">
            <div className="modalCards">
              <div className="modalCards_header">
                <h2>SELECT CARD</h2>
              </div>
              <div className="cards_modalCards">
                {card}
              </div>
              <div className="modalCards_footer">
                <div >
                  <div className="modalCards_footer_btns">
                    <button onClick={() => handleClose()}>Cancel</button>
  
                    <button onClick={() => handleClose()}>Confirm</button>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default ModalCards;
