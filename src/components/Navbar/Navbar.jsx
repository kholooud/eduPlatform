import { AppBar, Box, Container, Grid, LinearProgress } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/logoSalah.png";
import classes from "./Navbar.module.css";
import { useTheme } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
export default function Navbar({ handleThemeMode, themeMode }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [logRegDIV, setlogRegDIV] = useState(false);
  const [outProDIV, setoutProDIV] = useState(false);
  const { currentUser, checkLoggedIn } = useContext(UserContext);

  function scorllIndector() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    setProgress(scrolled);
  }
  window.addEventListener("scroll", scorllIndector);

  const handleLogOut = () => {
    localStorage.removeItem("userToken");
    checkLoggedIn();
    navigate("/");
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: !progress ? "transparent" : `${theme.palette.primary.main}`,
        transition: "all .25s linear",
      }}
    >
      <Container position={"relative"}>
        <Grid container item justifyContent="space-between">
          <Link to="/">
            <Grid item xs={6} md={3}>
              <img src={logo} className={classes.img} />
            </Grid>
          </Link>

          {/* login register PC view */}
          <Grid
            xs={4}
            md={5}
            container
            item
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "stretch",
              flexWrap: "nowrap",
              fontSize: ".8rem",
            }}
          >
            {currentUser ? (
              <>
                {/* to solve position for loged in */}
                <Link to="/Login">
                  <Grid
                    container
                    item
                    md={4}
                    display={{ md: "flex", xs: "none" }}
                  ></Grid>
                </Link>
                <Grid
                  container
                  item
                  md={4}
                  display={{ md: "flex", xs: "none" }}
                  className={classes.btn}
                  onClick={() => {
                    setoutProDIV(!outProDIV);
                  }}
                  sx={{
                    position: "relative",
                    alignItems: "center",
                    background: "#3b82f6",
                    color: "#fff",
                    border: "1px solid #3b82f6",
                    "&:hover": {
                      background: "#fff",
                      color: "#3b82f6",
                    },
                  }}
                >
                  <Grid item xs={8} textAlign={"center"}>
                    اهلا {currentUser.full_name.split(" ")[0]}
                  </Grid>
                  <AccountCircleIcon item xs={2} />
                  <Box
                    id="outProDIV"
                    sx={{
                      display: { xs: "none", md: !outProDIV ? "none" : "flex" },
                      position: "absolute",
                      padding: "5px",
                      top: "0%",
                      transform: "translate(0,50%)",
                      width: "100%",
                      background: "#fff",
                      border: "1px solid #3b82f6",
                      borderRadius: "5px",
                      color: "#3b82f6",
                      zIndex: "6666",
                      flexFlow: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Link to="/Profile">
                      <Grid
                        container
                        item
                        xs={12}
                        display={{ xs: "flex" }}
                        className={classes.btn}
                        sx={{
                          background: "#3b82f6",
                          color: "#fff",
                          border: "1px solid #3b82f6",
                          "&:hover": {
                            background: "#fff",
                            color: "#3b82f6",
                          },
                        }}
                      >
                        <Grid
                          item
                          xs={2}
                          fontSize={"20px"}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnxlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--ph"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 256 256"
                          >
                            <g fill="currentColor">
                              <path
                                d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128Z"
                                opacity=".2"
                              />
                              <path d="M168 56a8 8 0 0 1 8-8h16V32a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V64h-16a8 8 0 0 1-8-8Zm62.56 54.68a103.92 103.92 0 1 1-85.24-85.24a8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41a79.66 79.66 0 0 1 36.06-28.75a48 48 0 1 1 59.4 0a79.66 79.66 0 0 1 36.06 28.75A87.62 87.62 0 0 0 216 128a88.85 88.85 0 0 0-1.22-14.68a8 8 0 1 1 15.78-2.64ZM128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32Zm0 64a87.57 87.57 0 0 0 53.92-18.5a64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216Z" />
                            </g>
                          </svg>
                        </Grid>
                        <Grid item xs={8} textAlign={"center"}>
                          ملف الشخصي
                        </Grid>
                      </Grid>
                    </Link>
                    <Grid
                      href="/"
                      container
                      item
                      xs={12}
                      display={{ xs: "flex" }}
                      className={classes.btn}
                      sx={{
                        background: "#3b82f6",
                        color: "#fff",
                        border: "1px solid #3b82f6",
                        marginTop: ".5rem",
                        "&:hover": {
                          background: "#fff",
                          color: "#3b82f6",
                        },
                      }}
                      onClick={() => {
                        handleLogOut();
                      }}
                    >
                      <Grid
                        item
                        xs={2}
                        fontSize={"20px"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnxlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--ri"
                          width="1em"
                          height="1em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm-1-7.208a2.5 2.5 0 1 1 2 0V16h-2v-3.208Z"
                          ></path>
                        </svg>
                      </Grid>
                      <Grid item xs={8} textAlign={"center"}>
                        تسجيل الخروج
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </>
            ) : (
              <>
                <Link to="/Login">
                  <Grid
                    container
                    item
                    md={4}
                    display={{ md: "flex", xs: "none" }}
                    className={classes.btn}
                    sx={{
                      background: "#3b82f6",
                      color: "#fff",
                      border: "1px solid #3b82f6",
                      "&:hover": {
                        background: "#fff",
                        color: "#3b82f6",
                      },
                    }}
                  >
                    <Grid item xs={8} textAlign={"center"}>
                      تسجيل الدخول
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      fontSize={"20px"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnxlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--ri"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm-1-7.208a2.5 2.5 0 1 1 2 0V16h-2v-3.208Z"
                        ></path>
                      </svg>
                    </Grid>
                  </Grid>
                </Link>
                <Link to={"/Register"}>
                  <Grid
                    href="/"
                    container
                    item
                    md={4}
                    display={{ md: "flex", xs: "none" }}
                    className={classes.btn}
                    sx={{
                      background: "#3b82f6",
                      color: "#fff",
                      border: "1px solid #3b82f6",
                      "&:hover": {
                        background: "#fff",
                        color: "#3b82f6",
                      },
                    }}
                  >
                    <Grid item xs={8} textAlign={"center"}>
                      انشئ حسابك !
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      fontSize={"20px"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnxlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--ph"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 256 256"
                      >
                        <g fill="currentColor">
                          <path
                            d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128Z"
                            opacity=".2"
                          />
                          <path d="M168 56a8 8 0 0 1 8-8h16V32a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V64h-16a8 8 0 0 1-8-8Zm62.56 54.68a103.92 103.92 0 1 1-85.24-85.24a8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41a79.66 79.66 0 0 1 36.06-28.75a48 48 0 1 1 59.4 0a79.66 79.66 0 0 1 36.06 28.75A87.62 87.62 0 0 0 216 128a88.85 88.85 0 0 0-1.22-14.68a8 8 0 1 1 15.78-2.64ZM128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32Zm0 64a87.57 87.57 0 0 0 53.92-18.5a64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216Z" />
                        </g>
                      </svg>
                    </Grid>
                  </Grid>
                </Link>
              </>
            )}

            {/* icon for login register mobile view */}
            <Grid
              href="/"
              container
              item
              xs={4}
              display={{ md: "none", xs: "flex" }}
              className={classes.btn}
              sx={{
                background: "#3b82f6",
                color: "#fff",
                border: "1px solid #3b82f6",
                padding: "0",
                borderRadius: "50%",
                aspectRatio: "1/1",
                "&:hover": {
                  // background: "#fff",
                  // color: "#3b82f6",
                },
              }}
              onClick={() => {
                setlogRegDIV(!logRegDIV);
              }}
            >
              <AccountCircleIcon />
            </Grid>
            <Grid
              item
              container
              xs={7}
              md={2}
              sx={{
                justifyContent: "space-around",
                alignItems: "center",
                bgcolor: themeMode == "themeLight" ? "#fde047" : "#334155",
              }}
              className={classes.switch}
              onClick={() => {
                handleThemeMode(
                  themeMode == "themeLight" ? "themeDark" : "themeLight"
                );
              }}
            >
              <Grid
                item
                sx={{
                  bgcolor: themeMode == "themeLight" ? "#fde047" : "#fff",
                  color: themeMode == "themeLight" ? "#fef9c3" : "#334155",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  className="ml-3.5 transform transition-transform scale-100 duration-300"
                >
                  <path
                    d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Grid>
              <Grid
                item
                sx={{
                  bgcolor: themeMode == "themeLight" ? "#fff" : "#334155",
                  color: themeMode == "themeLight" ? "#fde047" : "#fff",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  className="flex-none transition duration-500 transform text-yellow-400 opacity-100 scale-100"
                >
                  <path
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* linear progress bar */}
      <Box
        sx={{
          width: "100%",
          display: !progress ? "none" : "block",
          transition: "all .25s linear",
          position: "absolute",
          bottom: 0,
          transform: "translate(0, 100%)",
          zIndex: "5555",
        }}
      >
        <LinearProgress
          variant="determinate"
          value={progress}
          color={"warning"}
        />
      </Box>
      {/* login register mobile view */}
      <Grid
        sx={{
          width: "98%",
          display: { md: "none", xs: !logRegDIV ? "none" : "flex" },
          transition: "all .25s linear",
          background: "#334155",
          borderRadius: "10px",
          position: "absolute",
          bottom: "-4px",
          transform: "translate(1%, 100%)",
          flexFlow: "column",
          justifyContent: "space-around",
          alignItems: "center",
          padding: ".5rem",
          zIndex: "555",
        }}
        id="logRegDIV"
        onClick={() => {
          setlogRegDIV(!logRegDIV);
        }}
      >
        {currentUser ? (
          <>
            {/* if user logged in */}
            <Link to="/Profile">
              <Grid
                container
                item
                xs={12}
                display={{ xs: "flex" }}
                className={classes.btn}
                sx={{
                  background: "#3b82f6",
                  color: "#fff",
                  border: "1px solid #3b82f6",
                  "&:hover": {
                    background: "#fff",
                    color: "#3b82f6",
                  },
                }}
              >
                <Grid
                  item
                  xs={1}
                  fontSize={"20px"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnxlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ph"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                  >
                    <g fill="currentColor">
                      <path
                        d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128Z"
                        opacity=".2"
                      />
                      <path d="M168 56a8 8 0 0 1 8-8h16V32a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V64h-16a8 8 0 0 1-8-8Zm62.56 54.68a103.92 103.92 0 1 1-85.24-85.24a8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41a79.66 79.66 0 0 1 36.06-28.75a48 48 0 1 1 59.4 0a79.66 79.66 0 0 1 36.06 28.75A87.62 87.62 0 0 0 216 128a88.85 88.85 0 0 0-1.22-14.68a8 8 0 1 1 15.78-2.64ZM128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32Zm0 64a87.57 87.57 0 0 0 53.92-18.5a64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216Z" />
                    </g>
                  </svg>
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                  ملف الشخصي
                </Grid>
              </Grid>
            </Link>
            <Grid
              href="/"
              container
              item
              xs={12}
              display={{ xs: "flex" }}
              className={classes.btn}
              sx={{
                background: "#3b82f6",
                color: "#fff",
                border: "1px solid #3b82f6",
                marginTop: ".5rem",
                "&:hover": {
                  background: "#fff",
                  color: "#3b82f6",
                },
              }}
              onClick={() => {
                handleLogOut();
              }}
            >
              <Grid
                item
                xs={1}
                fontSize={"20px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnxlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--ri"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm-1-7.208a2.5 2.5 0 1 1 2 0V16h-2v-3.208Z"
                  ></path>
                </svg>
              </Grid>
              <Grid item xs={4} textAlign={"center"}>
                تسجيل الخروج
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            {/* if user not logged in */}
            <Link to="/Login">
              <Grid
                container
                item
                xs={12}
                display={{ xs: "flex" }}
                className={classes.btn}
                sx={{
                  background: "#3b82f6",
                  color: "#fff",
                  border: "1px solid #3b82f6",
                  "&:hover": {
                    background: "#fff",
                    color: "#3b82f6",
                  },
                }}
              >
                <Grid
                  item
                  xs={1}
                  fontSize={"20px"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnxlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ri"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm-1-7.208a2.5 2.5 0 1 1 2 0V16h-2v-3.208Z"
                    ></path>
                  </svg>
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                  تسجيل الدخول
                </Grid>
              </Grid>
            </Link>
            <Link to={"/Register"}>
              <Grid
                href="/"
                container
                item
                xs={12}
                display={{ xs: "flex" }}
                className={classes.btn}
                sx={{
                  background: "#3b82f6",
                  color: "#fff",
                  border: "1px solid #3b82f6",
                  marginTop: ".5rem",
                  "&:hover": {
                    background: "#fff",
                    color: "#3b82f6",
                  },
                }}
              >
                <Grid
                  item
                  xs={1}
                  fontSize={"20px"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnxlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ph"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                  >
                    <g fill="currentColor">
                      <path
                        d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128Z"
                        opacity=".2"
                      />
                      <path d="M168 56a8 8 0 0 1 8-8h16V32a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V64h-16a8 8 0 0 1-8-8Zm62.56 54.68a103.92 103.92 0 1 1-85.24-85.24a8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41a79.66 79.66 0 0 1 36.06-28.75a48 48 0 1 1 59.4 0a79.66 79.66 0 0 1 36.06 28.75A87.62 87.62 0 0 0 216 128a88.85 88.85 0 0 0-1.22-14.68a8 8 0 1 1 15.78-2.64ZM128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32Zm0 64a87.57 87.57 0 0 0 53.92-18.5a64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216Z" />
                    </g>
                  </svg>
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                  انشئ حسابك !
                </Grid>
              </Grid>
            </Link>
          </>
        )}
      </Grid>
      <Box
        className="cover"
        sx={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          margin: "auto",
          backgroundColor: logRegDIV ? "rgba(76, 175, 80, 0.3)" : "transparent",
          display: logRegDIV || outProDIV ? "block" : "none",
        }}
        onClick={(e) => {
          if (logRegDIV) {
            setlogRegDIV(!logRegDIV);
          }
          if (outProDIV) {
            setoutProDIV(!outProDIV);
          }
        }}
      ></Box>
    </AppBar>
  );
}
