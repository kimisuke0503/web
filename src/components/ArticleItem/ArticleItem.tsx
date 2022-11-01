import React from "react";
import { Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ArticleItem = (props: {
  linkTo: string;
  imgSrc: string;
  title: string;
  date: string;
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link to={props.linkTo}>
        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Paper elevation={5} sx={{ borderRadius: "5%", padding: "5%" }}>
            {props.title}
            <br />
            {props.date}
            <img
              src={props.imgSrc}
              alt={props.imgSrc}
              style={{ width: "100%", height: "auto" }}
            ></img>
          </Paper>
        </motion.button>
      </Link>
    </Grid>
  );
};

export default ArticleItem;
