import React from 'react'
import { Box, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import classes from '../Years.module.css'


export default function Year({ele}) {

  return (
    <>
      <Grid key={ele.id} item xs={12} md={4} padding={2} marginBottom={5} paddingBottom={"2rem"}>
        <Link to={ele.path}>
          <Box sx={{ width: "100%", position: "relative" }}>
            <Box sx={{ borderRadius: ".2rem", overflow: "hidden" }}>
              <img src={ele.imgSrc} className={classes.yearImg} />
            </Box>
            <Stack
              padding={2}
              spacing={1}
              sx={{
                boxShadow: "3",
                borderRadius: "5px",
                width: "80%",
                margin: "auto",
                position: "absolute",
                bottom: "0%",
                left: "50%",
                bgcolor: "primary.main",
                zIndex: 555,
                transform: "translate(-50%,45%)",
                "&:hover": {
                  transform: "translate(-50%,45%) scale(1.05)",
                },
              }}
            >
              <Box>{ele.title}</Box>
              <Box
                sx={{
                  background: "#2dd4bf",
                  width: "100%",
                  height: "3px",
                }}
              ></Box>
              <Box>{ele.description}</Box>
            </Stack>
          </Box>
        </Link>
      </Grid>

    </>
  )
}
