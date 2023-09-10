import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import WeekTab from "../../components/WeekTab/WeekTab";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';
export default function Profile() {
  const theme = useTheme();
  const location = useLocation();
  const current = (((location.pathname).split('/')).slice(-1));
  return (
    <Container>
      <Grid container sx={{ boxShadow: 7, background: theme.palette.primary.sec, justifyContent: "center", marginY: "1rem", paddingBottom: "1rem" }}>
        <Grid
          item
          container
          xs={12}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid
            container
            xs={10}
            md={4}
            sx={{
              background: "inherit",
              borderRadius: "9999px",
              display: "flex",
              flexWrap: "nowrap",
              margin: "2rem",
              boxShadow: 2,
              justifyContent: "start"

            }}
          >
            <Grid
              item
              xs={2}
              sx={{
                aspectRatio: "1/1",
                overflow: "hidden",
                display: "flex",
                borderRadius: "9999px",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <DateRangeTwoToneIcon
                sx={{
                  fontSize: { md: "3rem", xs: "1rem" },
                  color: theme.palette.primary.active,
                  // color: "#3b82f6",
                }}
              />
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                fontSize: { xs: "1.3rem", md: "1.7rem" },
                textAlign: "center",
                padding: "5px",
                boxSizing: "border-box",
                display: 'flex',
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              الإسبوع الأول
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={3} sx={{ justifyContent: "center", alignContent: "start" }} >
          <WeekTab tabName={"المحاضرة"} View={"Lecture"} current={current} icon={<PersonIcon />} />
          <WeekTab tabName={"الواجب"} View={"HomeWork"} current={current} icon={<ImportContactsIcon />} />
        </Grid>
        <Grid item container xs={11} md={9} sx={{ background: "inherit", minHeight: "30vh", justifyContent: "center", alignItems: "center",display:"block" }}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}
