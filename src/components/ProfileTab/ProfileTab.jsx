import { Grid } from "@mui/material";
import React, { useState } from "react";
import classes from "./ProfileTab.module.css";
import { Link } from "react-router-dom";
import { PersonIcon, QrCodeIcon, ImportContactsIcon  } from '@mui/icons-material';

export default function ProfileTab({ tabName, View, current }) {
  const active = (current == View ? 1 : 0);
  return (
    <Link to={View} >
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
          height: "50px"
        }}
      >
        <PersonIcon />
        {tabName}
      </Grid>
    </Link>
  );
}
