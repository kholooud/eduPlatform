import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import ProfileTab from "../../components/ProfileTab/ProfileTab";
import { Outlet, useLocation } from "react-router-dom";
export default function Profile() {
  const location = useLocation();
  const current = (((location.pathname).split('/')).slice(-1));
  return (
    <Container>
      <Grid container sx={{ boxShadow: 7, background: "white", justifyContent: "center", marginY: "1rem", paddingBottom: "1rem" }}>
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
              background: "white",
              borderRadius: "9999px",
              display: "flex",
              flexWrap: "nowrap",
              margin: "2rem",
              boxShadow: 2,
              justifyContent:"start"
              
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
              }}
            >
              <AccountCircleIcon
                sx={{
                  fontSize: {md:"4rem" , xs:"2rem"},
                  color: "#3b82f6",
                }}
              />
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                fontSize: "1.7rem",
                textAlign: "center",
                padding: "5px",
                boxSizing: "border-box",
              }}
            >
              ملف المستخدم
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={3}  sx={{justifyContent:"center",alignContent:"start"}} >
          <ProfileTab tabName={"ملف المستخدم"} View={"Profile"} current={current} icon={<PersonIcon/>}/>
          <ProfileTab tabName={"كورساتي"} View={"MyCourses"} current={current} />
          <ProfileTab tabName={"الاكواد"} View={"Code"} current={current} />
          <ProfileTab tabName={"نتائج الامتحانات"} View={"ExResults"} current={current} />
          <ProfileTab tabName={"الاشعارات"} View={"Notifications"} current={current} />
        </Grid>
        <Grid item container xs={11} md={9}  sx={{background:"white",minHeight:"60vh"}}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}
