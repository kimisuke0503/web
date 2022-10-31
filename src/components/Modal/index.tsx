import React from "react";

const Modal = (props: { show: boolean; setShow: (show: boolean) => void }) => {
  const toggleModal = () => {
    props.setShow(!props.show);
  };

  return props.show ? (
    <div className="overlay" onClick={toggleModal}></div>
  ) : null;
};

export default Modal;
