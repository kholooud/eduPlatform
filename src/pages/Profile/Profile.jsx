import { Box, Container, Grid } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import ProfileTab from "../../components/ProfileTab/ProfileTab";
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import RuleIcon from '@mui/icons-material/Rule';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";
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
              <AccountCircleIcon
                sx={{
                  fontSize: { md: "4rem", xs: "2rem" },
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
              ملف المستخدم
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={3}  sx={{justifyContent:"center",alignContent:"start"}} >
          <ProfileTab tabName={"ملف المستخدم"} View={"Profile"} current={current} icon={<PersonIcon/>}/>
          {/* <ProfileTab tabName={"كورساتي"} View={"MyCourses"} current={current} icon={<ImportContactsIcon/>}/> */}
          <ProfileTab tabName={"الاكواد"} View={"Code"} current={current} icon={<QrCode2Icon/>}/>
          <ProfileTab tabName={"الامتحانات"} View={"ExResults"} current={current} icon={<RuleIcon/>}/>
          {/* <ProfileTab tabName={"الاشعارات"} View={"Notifications"} current={current} icon={<NotificationsActiveIcon/>}/> */}
        </Grid>
        <Grid item container xs={11} md={9} sx={{ background: "inherit", minHeight: "30vh",justifyContent:"center",alignItems:"center" }}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}
