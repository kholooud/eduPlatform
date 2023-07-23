import { Box, Container, Grid } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ProfileTab from "../../components/ProfileTab/ProfileTab";
import { Outlet } from "react-router-dom";
export default function Profile() {
  return (
    <Container>
      <Grid container sx={{ boxShadow: 7 ,background:"white",justifyContent:"center" }}>
        <Grid
          item
          container
          xs={12}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid
            container
            xs={10}
            md={3}
            sx={{
              background: "white",
              borderRadius: "9999px",
              display: "flex",
              flexWrap: "nowrap",
              margin: "2rem",
              boxShadow: 2,
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
                  fontSize: "3rem",
                  color: "#3b82f6",
                }}
              />
            </Grid>
            <Grid
              item
              xs={9}
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
        <Grid item container xs={11} md={3} justifyContent={"center"} >
          <ProfileTab tabName={"ملف المستخدم"} View={"Main"} active={0}  />
          <ProfileTab tabName={"كورساتي"} View={"MyCourses"} active={0} />
          {/* <ProfileTab tabName={"الامان"} View={"Security"} active={0} /> */}
          <ProfileTab tabName={"الاكواد"} View={"Codes"} active={0} />
          <ProfileTab tabName={"نتائج الامتحانات"} View={"ExResults"} active={0} />
          <ProfileTab tabName={"الاشعارات"} View={"Notifications"} active={0} />
        </Grid>
        <Grid item container xs={11} md={9} bgcolor={"white"}>
          <Outlet/>
        </Grid>
      </Grid>
    </Container>
  );
}
