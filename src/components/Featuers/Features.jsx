import React from "react";
import { Box, Container, Grid } from "@mui/material";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";

import classes from "./Features.module.css";
import { useTheme } from "@emotion/react";
export default function Features() {
  const theme = useTheme();
  function scrollActions(e) {
    let FBI1 = document.querySelector("#featureBoxInfo1");
    let FBI2 = document.querySelector("#featureBoxInfo2");
    let FBI3 = document.querySelector("#featureBoxInfo3");
    let feature = document.querySelector("#features");
    let featureBounding = feature.getBoundingClientRect();
    if (featureBounding.top > window.pageYOffset) {
      FBI1.style.transform = `translateY(-20rem) rotate(0deg)`;
      FBI2.style.transform = `translateY(-20rem) rotate(0deg)`;
      FBI3.style.transform = `translateY(-20rem) rotate(0deg)`;
    }
    if (
      featureBounding.top < window.pageYOffset &&
      featureBounding.top + featureBounding.height > window.pageYOffset
    ) {
      FBI1.style.transform = `translateY(-10rem) rotate(${
        (window.pageYOffset % 30) * 10
      }deg)`;
      FBI2.style.transform = `translateY(-10rem) rotate(${
        (window.pageYOffset % 30) * -10
      }deg)`;
      FBI3.style.transform = `translateY(-10rem) rotate(${
        (window.pageYOffset % 30) * 10
      }deg)`;
    }
    if (featureBounding.top + featureBounding.height < window.pageYOffset) {
      FBI1.style.transform = `translateY(0rem) rotate(0deg)`;
      FBI2.style.transform = `translateY(0rem) rotate(0deg)`;
      FBI3.style.transform = `translateY(0rem) rotate(0deg)`;
    }
  }
  window.addEventListener("scroll", scrollActions);
  return (
    <>
      <Grid  className={classes.paperBorder}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 908.6 195.8"
          xmlSpace="preserve"
        >
          <path
            fill= {`${theme.palette.primary.main}`}
            d="m910.8 54.5-2.8.4-2.8.4-2-1-2-.9-.3 1.1-.3 1.1-2.1-.4-2.1-.3-2 1.3-2 1.3-4-.3c-2.2-.1-4.7 0-5.6.2l-1.5.5-2.6-1-2.6-1-2.4-3-2.5-3-.8.3c-.4.2-2.8-.4-5.2-1.3l-4.4-1.6-2.7.4c-1.5.2-3.2.3-3.7.2l-1-.2L851 50l-2.2 2.2-3.2 1.4-3.2 1.4H837.7l-.3-.9-.3-.9-1.4.5c-.8.3-3.4.2-5.9-.1l-4.4-.6-7.5 2.5-7.5 2.5-.3-1-.3-.9-.9 1.4-.9 1.5-2.4.5c-4.4 1-9 1.3-9.2.6l-.2-.7-3.4 1.6-3.5 1.6-4.4-.9c-2.4-.5-5-.8-5.7-.7-1.3.2-7.1-1.7-14.8-5l-3.8-1.6-1 1.6-1 1.6-2.7-.4-2.7-.4-1.2 1.1-1.3 1h-7.1c-8.4 0-15.9.7-19 1.7l-2.2.8-3.5-.5-3.5-.5-1.4 1.3c-.8.7-1.8 1.4-2.3 1.7-2.1 1-5.1 3.8-6.2 5.7-.6 1.2-1.7 2.3-2.2 2.7-.6.4-1.9 1.2-2.9 2l-1.9 1.4-8.1-3.9c-9.9-4.7-14.2-6.5-14.9-6.3-.3.1-2.1 0-3.9-.1-4.2-.4-8.7.1-11.8 1.1-3.5 1.2-8.2 3.7-8.6 4.5l-.3.7h-1.5l-1.5-.1-2.3 2.1L643 75v3l-1.5.5-1.5.5-1-1.2-1-1.2-1.3.5-1.3.5-.3-1-.3-1-.7.8-.6.8-2.1-2.4-2.1-2.4-1.5.5c-1.7.5-14.2-1-15.5-1.9-.4-.3-3.6-1.1-7.1-1.7l-6.3-1.2-2.3.8-2.3.8-1.2-.5c-.7-.3-3.6-.5-6.7-.4l-5.4.1-5.5 2.4-5.5 2.4-1.7 1.8-1.7 1.8-5.7 1.8-5.7 1.8-2.5-1.1-2.5-1.1-2.7.3-2.7.2-3.6-1.8-3.6-1.8-5.5-.1-5.5-.1-1.8 1.2c-1 .7-1.7 1.5-1.6 1.8.1.3-.1 1.6-.6 2.8l-.7 2.2-2-.8-2-.8v2.6l-2.3-.4-2.3-.4-4.1 2.2c-2.2 1.3-4.9 2.4-5.8 2.7l-1.7.4.3.9.3.9-4.7 1.6-4.7 1.6.3.8.3.8-2 .2-2.1.1.4 1.1.4 1-1.8.6-1.8.6-.9 1.8-.9 1.8-4.4 1.4-4.4 1.4-.2-.7c-.1-.3-1.6-.5-3.3-.2l-3 .4-1.6 2c-.9 1.1-3.4 3.4-5.5 5-3.9 3-5 3.7-11.4 7.5-1.9 1.1-5 3.2-6.8 4.6-5.4 4.1-5.6 4.2-11.9 6.7-7.6 3.1-11.3 4.9-12.3 6.1l-.8.9-3.5.1c-14.5.2-19.9-.8-23.4-4l-2-1.8-4.1-.4c-2.3-.2-4.3-.7-4.4-1.1l-.3-.8-1.8.6-1.8.6-1.6-1-1.6-1-3.7 1.9c-2 1-4.1 2.1-4.5 2.3-.5.2-1.5 1.9-2.2 3.8l-1.3 3.3-.9-.2-.9-.2-3.6 3.8c-2 2.1-4.2 4.1-4.9 4.3l-1.3.4v2.2l-4.5.5-4.5.5-1.6 2.1c-.9 1.1-2.3 2.3-3.1 2.6s-2.2 1.4-3.1 2.4l-1.7 1.9-4.6 1.8c-2.6 1-5.5 2.3-6.6 2.8l-2 1-1.9 3.6c-1 2-2.2-5.8-2.6-5.6-.4.1-1.3 1.3-2 2.7l-1.3 2.3-4.4 2.1-35.1.4h-406.8V0H910.8v54.5"
          ></path>
        </svg>
      </Grid>
      <Container className="features">
        <Grid container id="features">
          <Grid item xs={12} md={4} className={classes.featureBox}>
            <img src={icon1} width={"75%"} />
            <Box id="featureBoxInfo1" bgcolor={"#f43f5e"}>
              وفر وقت المواصلات و السنتر
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className={classes.featureBox}>
            <img src={icon2} width={"70%"} />
            <Box id="featureBoxInfo2" bgcolor={"#3b82f6 "}>
              شاهد دروسك اكثر من مرة
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className={classes.featureBox}>
            <img src={icon3} width={"70%"} />
            <Box id="featureBoxInfo3" bgcolor={"#eab308 "}>
              احضر امتحانات دورية و مستمرة
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
