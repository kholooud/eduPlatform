import { Grid } from "@mui/material";
import React from "react";
import classes from "./ProfileTab.module.css";
import { Link } from "react-router-dom";

export default function ProfileTab({ tabName,View, active }) {
  return (
    <Link to={View}>
      <Grid
        container
        xs={2}
        md={10}
        className={classes.tab}
        sx={{
          boxShadow: "3",
          background: active ? "#3b82f6" : "",
          color: active ? "white" : "#3b82f6",
          margin:"2px",
          fontSize:"2px"
        }}
      >
        {tabName}
      </Grid>
    </Link>
  );
}
