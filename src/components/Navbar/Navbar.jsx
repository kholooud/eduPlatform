import { AppBar, Box, Button, Container, Grid, Stack } from "@mui/material";
import React from "react";
import logo from "../../assets/logoSalah.png";
import classes from "./Navbar.module.css";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

export default function Navbar({ handleThemeMode, themeMode }) {
  return (
    <AppBar position="sticky" color={"transparent"} elevation={0}>
      <Container>
        <Grid container item justifyContent="space-between" paddingY={2}>
          <Grid item xs={3} md={3}>
            <img src={logo} className={classes.img} />
          </Grid>
          <Grid
            xs={1}
            md={4}
            container
            item
            sx={{
              justifyContent: {xs:"center",md:"space-between"},
              alignItems: "center",
              flexWrap: "nowrap",
            }}
          >
            <Button
              variant="contained"
              startIcon={<LoginOutlinedIcon />}
              xs={1}
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              تسجيل الدخول
            </Button>
            <Button
              xs={1}
              variant="contained"
              startIcon={<AccountBoxOutlinedIcon />}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              انشئ حسابك
            </Button>

            <Grid
              item
              container
              xs={12}
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
                  class="ml-3.5 transform transition-transform scale-100 duration-300"
                >
                  <path
                    d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  class="flex-none transition duration-500 transform text-yellow-400 opacity-100 scale-100"
                >
                  <path
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
