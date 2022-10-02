import React from "react";

const Modal = (props: { show: boolean; setShow: (show: boolean) => void }) => {
  const toggleModal = () => {
    props.setShow(!props.show);
  };

  if (props.show) {
    return <div className="overlay" onClick={toggleModal}></div>;
  } else {
    return null;
  }
};

export default Modal;
