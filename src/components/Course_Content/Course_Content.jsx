import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Course_Content.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardPng from "../../assets/course_card.jpg"



export default function Course_Content({ lesson }) {

  const [lessonDetails, setlessonDetails] = useState({})
  useEffect(() => {
    setlessonDetails(lesson)
  }, [])

  return (

    <Grid item  xs={12} md={4} padding={2} marginBottom={2} >
      <Link to={`/week/${lesson.id}`}>
        <Card sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
          <CardMedia
            component="img"
            alt="cardimg"
            height="100%"
            image={CardPng}
          />
          <CardContent sx={{
            position: "relative",
            marginTop: "-61px",
            zIndex: "100",
            backgroundColor: "primary.main",
            maxWidth: "95%",
            right: "-10px",
            borderRadius: "0.5rem",
            boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem #6c6969",
            marginBottom: "25px"
          }}>
            <Grid container>
              <Grid item xs={12} sx={{ display: "flex", flexFlow: "column" }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "inherit", display: "inline"  }}>
                  {
                    lessonDetails.name
                  }
                </Typography>
                <Box
                  className={classes.hr}
                  component="span"
                  fontFamily="inherit"
                ></Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "inherit", display: "block" }}>
                  مراجعه لطلاب السناتر
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Link>
    </Grid>


  );
}
