import React from "react";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      sx={{ justifyContent: "space-between", padding: "15px 5% 30px" }}
    >
      <Grid item>Moriken Web</Grid>
      <Grid item>&copy; 2022, Kenryu Mouri</Grid>
    </Grid>
  );
};

export default Footer;
