import React from "react";

const Modal = (props: { show: boolean; toggleModal: () => void }) => {
  return props.show ? (
    <div className="overlay" onClick={props.toggleModal}></div>
  ) : null;
};

export default Modal;
