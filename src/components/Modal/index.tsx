import { Box } from "@mui/material";
import React from "react";

const Modal = (props: { show: boolean; toggleModal: () => void }) => {
  return props.show ? (
    <Box
      className="overlay"
      onClick={props.toggleModal}
      sx={{
        zIndex: "98",
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    ></Box>
  ) : null;
};

export default Modal;
