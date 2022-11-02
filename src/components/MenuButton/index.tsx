import React, { ReactNode } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const MenuButton = (props: {
  icon: ReactNode;
  linkTo: string;
  text: string;
  clickHandler?: () => void;
}) => {
  return (
    <Button
      size="medium"
      variant={"text"}
      color="secondary"
      startIcon={props.icon}
      component={Link}
      to={props.linkTo}
      onClick={props.clickHandler}
    >
      {props.text}
    </Button>
  );
};
export default MenuButton;
