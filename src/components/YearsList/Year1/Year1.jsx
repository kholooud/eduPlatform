import React from "react";
import classes from "../../Year/Year.module.css";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import bag from "../../../assets/bag.svg";
import year1 from "../../../assets/year1.jpeg";
import year2 from "../../../assets/year2.jpeg";
import year3 from "../../../assets/year3.jpeg";
import { Link } from "react-router-dom";


export default function Year() {
  return (
    <Box
      bgcolor={"#fde047"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ paddingY: "3rem", marginY: "3rem", overflow: "hidden" }}
    >
      <Box className={classes.x}>
        سـنه أولـى
        <img src={bag} />
      </Box>
      <Container>
       
      </Container>
    </Box>
  );
}
