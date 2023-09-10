import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import classes from "./WeekTab.module.css";
import { Link } from "react-router-dom";

export default function WeekTab({ tabName, View, current,icon }) {
  const active = current == View ? 1 : 0;
  return (
    <Link to={View == "Lecture" ? "" : View}>
      <Grid
        container
        xs={2}
        md={10}
        className={classes.tab}
        sx={{
          boxShadow: "3",
          background: active ? "#3b82f6" : "",
          color: active ? "white" : "#3b82f6",
          margin: "2px",
          height: "50px",
          justifyContent: {xs:'center',md:'start'},
        }}
      >
        {icon}
        <Typography
          sx={{ fontFamily: "inherit", display: { xs: "none", md: "block" } }}
        >
          {tabName}
        </Typography>
      </Grid>
    </Link>
  );
}
