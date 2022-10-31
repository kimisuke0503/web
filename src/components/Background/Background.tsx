import { Box } from "@mui/system";
import React from "react";

import backgroundImage from "../../assets/images/headbg.png";

const Background = () => {
  return (
    <Box
      sx={{
        height: "380px",
        maxHeight: "1000px",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        display: "flex",
        backgroundImage: `url(${backgroundImage})`,
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
      }}
    ></Box>
  );
};

export default Background;
