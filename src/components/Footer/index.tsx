import React from "react";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      sx={{ justifyContent: "space-between", padding: "20px 5% 0" }}
    >
      <Grid item>Kimisuke Web</Grid>
      <Grid item>&copy; 2022, Kimisuke</Grid>
    </Grid>
  );
};

export default Footer;
