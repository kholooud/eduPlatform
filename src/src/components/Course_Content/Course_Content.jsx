import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import classes from "./Course_Content.module.css";
import Exam from "../Exam/Exam";
import Week from "../week/week";


export default function Course_Content() {
  return (
    <Container
      sx={{ boxShadow: 7, borderRadius: "16px", backgroundColor: "#f3f4f6" }}
      p={2}
      m={2}
    >
      <Grid Container sx={{ marginTop: { xs: "20rem", md: "4rem" } }} marginBottom={{ xs: "1rem", md: "4rem" }} py={4}>
        <Grid item py={2} sx={{ display: "grid" }}>
          <Box
            component="span"
            className={classes.hr}
            width={"6%"}
            fontFamily="inherit"
          ></Box>
          <Typography
            item
            fontWeight="bolder"
            fontFamily={"inherit"}
            py={1}
            variant="h3"
          >
            محتوى
            <Typography variant="span" color="#f43f5e">
              {" "}
              الكورس
            </Typography>
          </Typography>
          <Box component="span" className={classes.hr} width={"9%"}></Box>
          <Box component="span" className={classes.hr} width={"6%"}></Box>
        </Grid>
        <Box>
          {<Exam />}
          {<Week />}
        </Box>
      </Grid>
    </Container>
  );
}
