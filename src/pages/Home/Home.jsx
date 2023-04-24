import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import LandImg from "../../assets/landingImg.png";

import classes from "./Home.module.css";
import Year from "../../components/Year/Year";
import Features from "../../components/Featuers/Features";
import Footer from "../../components/Footer/Footer";

export default function Landing() {
  return (
    <>
      <Container className="mainLanding">
        <Grid container>
          <Grid
            item
            container
            xs={12}
            md={6}
            alignContent={"center"}
            textAlign={"center"}
          >
            <Grid item xs={12}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("أ/ صالح الصباحي").start();
                }}
                options={{
                  autoStart: true,
                }}
              />
            </Grid>
            <Grid item display={{ md: "none", xs: "block" }}>
              <img src={LandImg} width={"100%"} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">
                منصة الصبـاحـي لشرح منهج الرياضيات
              </Typography>
              <Typography variant="h6">للثانوية العامة</Typography>
              <Typography  className={classes.line}>الصفوف الدارسية</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              container
              justifyContent={"center"}
              gap={2}
              padding={1}
            >
              <Box className={classes.circle} bgcolor={"#fde047"}>
                1
              </Box>
              <Box className={classes.circle} bgcolor={"#60a5fa"}>
                2
              </Box>
              <Box className={classes.circle} bgcolor={"#fb7185 "}>
                3
              </Box>
            </Grid>
          </Grid>
          <Grid item md={6} display={{ md: "block", xs: "none" }}>
            <img src={LandImg} width={"100%"} />
          </Grid>
        </Grid>
      </Container>
      <Features />
      <Year />
    </>
  );
}
