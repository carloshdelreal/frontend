import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ModalComponent = ({ show, handleClose, handleAccept }) => {
  return (
    <>
      <Modal show={show} onHide={handleAccept}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>The Appointment will be booked for the specified Date and Time</Modal.Body>
        <div className="row justify-content-center p-3">
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 text-right">
            <button onClick={handleClose} type="button" className="btn doctor__btn-call btn-block btn-sm rounded-pill">Discard</button>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 text-left">
            <button onClick={handleAccept} type="button" className="btn doctor__btn-book btn-block btn-sm rounded-pill">Book</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

ModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.instanceOf(Function).isRequired,
  handleAccept: PropTypes.instanceOf(Function).isRequired,
};

export default ModalComponent;
