import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalGang() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        centered
      >
        {/* <Modal.Header closeButton>
              <Modal.Title>Join a Gang</Modal.Title>    
              <p>
                To join a clan you need a gang membership
              </p>
            </Modal.Header> */}
        <Modal.Body className="background__modal">
          <div className="body__modal">
            <div className="body__modal-header">
              <h2>Make a Gang</h2>
              <p>To start a clan you need a "temp-gang" box</p>
            </div>
            <div className="body__modal-input">
              <p>Gang name</p>
              <input type="text" placeholder="Enter a name"/>
              <p>temp-gang box</p>
            </div>
           
            <div className="body_modal__footer">
            <p className="text-center text-white fw-bolder text-white h2">No temp-gang box yet</p>

            <div className="body_modal__footer-buttons">
                <div className="modal__footer-img"></div>
                <div className="modal__footer-buttons">
                    <button>
                        Cancel
                    </button>
                    <button>
                        Make
                    </button>
                </div>
            </div>
            </div>
          </div>
        </Modal.Body>
        {/*  <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary">Join</Button>
            </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ModalGang;
