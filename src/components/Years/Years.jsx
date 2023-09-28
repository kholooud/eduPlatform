import React from "react";
import classes from "./Years.module.css";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import bag from "../../assets/bag.svg";
import Year from "./Year/Year";


export default function Years() {

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
        الصفوف الدارسية
        <img src={bag} />
      </Box>
      <Container>
        <Grid
          container
          sx={{
            bgcolor: "primary.main",
            borderRadius: ".2rem",
            boxSizing: "border-box",
            minHeight: "20rem",
            zIndex: "55",
            position: "relative"
          }}
        >
            <>
              {<Year />}
            </>
        </Grid>
      </Container>
    </Box>
  );
}
