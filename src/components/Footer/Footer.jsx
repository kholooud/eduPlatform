import React from "react";
import classes from "./Footer.module.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#334155",
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="span"
            className={classes.socialIcon}
            bgcolor={"#fff"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--fa6-brands"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
              color="#275a95"
            >
              <path
                fill="currentColor"
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              />
            </svg>
          </Typography>
          <Typography
            variant="span"
            className={classes.socialIcon}
            bgcolor={"#f43f5d"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--ant-design"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
              color="#883448"
            >
              <path
                fill="currentColor"
                d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133l-232 135z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--ant-design"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
              color="#fff"
            >
              <path
                fill="currentColor"
                d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133l-232 135z"
              />
            </svg>
          </Typography>
        </Box>
        <Box
          sx={{
            height: "5px",
            background: "#222d40",
            margin: ".5rem",
            borderRadius: "5px",
            width: "60%",
          }}
        ></Box>
        <Grid container sx={{ margin: ".5rem", color: "#fff",justifyContent:"center"}}>
          <Grid item xs={1} textAlign={"end"}>
            <Typography variant="span">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--emojione-v1"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#d13852"
                  d="M54.02 26.962c-.169-2.643-.734-4.79-2.576-7c-3.686-4.421-12.158-5.157-15.953-.901c-.66.626-1.284 1.38-1.911 2.281l-1.419 2.039l-1.419-2.039c-.629-.9-1.255-1.655-1.916-2.281c-3.792-4.256-12.265-3.521-15.951.901c-1.843 2.211-2.41 4.358-2.579 7c-.24 7.858 5.463 14.15 6.167 15.07c3.87 4.54 8.092 8.834 12.38 12.789c.776.68 1.446 1.243 2.116 1.804c.403.33.8.662 1.201.989c.399-.327.797-.659 1.196-.989c.673-.561 1.343-1.124 2.117-1.804c4.289-3.955 8.511-8.249 12.381-12.789c.706-.923 6.409-7.215 6.166-15.07"
                />
                <path
                  fill="#f1a5b1"
                  d="M51.648 25.56a6.893 6.893 0 0 0-.313-1.997a6.222 6.222 0 0 0-.802-1.662c-2.042-3-6.489-4.081-10.206-3.321c-1.448.349-2.9.894-3.568 2.278c-.228.594.252.879.989.843c2.673-.299 5.632-.03 7.996 1.119c.589.288 1.139.63 1.643 1.032c1.696 1.313 2.429 3.356 2.764 5.381c.822-.166 1.273-1.155 1.378-2.036a7.185 7.185 0 0 0 .119-1.637"
                />
                <g fill="#faae40">
                  <path d="M54.4 18.02a9.222 9.222 0 0 1 1.83 6.566c1.754-2.41 1.868-5.726.008-8.182c-1.981-2.625-5.528-3.396-8.453-2.02a9.198 9.198 0 0 1 6.615 3.637" />
                  <path d="M58.18 14.675a15.665 15.665 0 0 1 3.095 11.12c2.977-4.083 3.162-9.699.016-13.859c-3.369-4.454-9.37-5.753-14.321-3.423a15.625 15.625 0 0 1 11.21 6.162M9.915 18.02a9.257 9.257 0 0 0-1.832 6.566c-1.751-2.41-1.866-5.726-.006-8.182c1.984-2.625 5.527-3.396 8.454-2.02a9.204 9.204 0 0 0-6.616 3.637" />
                  <path d="M6.137 14.675a15.626 15.626 0 0 0-3.094 11.12c-2.976-4.083-3.169-9.699-.019-13.859c3.371-4.454 9.374-5.753 14.325-3.423c-4.256.352-8.389 2.426-11.212 6.162" />
                </g>
              </svg>
            </Typography>
          </Grid>
          <Grid item xs={10} md={7} textAlign={"center"}>
            تم صنع هذه المنصة بهدف تهيئة الطالب لـ كامل جوانب الثانوية العامة و
            ما بعدها
          </Grid>
          <Grid item xs={1} textAlign={"start"}>
            <Typography xs={2} variant="span">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--emojione-v1"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#d13852"
                  d="M54.02 26.962c-.169-2.643-.734-4.79-2.576-7c-3.686-4.421-12.158-5.157-15.953-.901c-.66.626-1.284 1.38-1.911 2.281l-1.419 2.039l-1.419-2.039c-.629-.9-1.255-1.655-1.916-2.281c-3.792-4.256-12.265-3.521-15.951.901c-1.843 2.211-2.41 4.358-2.579 7c-.24 7.858 5.463 14.15 6.167 15.07c3.87 4.54 8.092 8.834 12.38 12.789c.776.68 1.446 1.243 2.116 1.804c.403.33.8.662 1.201.989c.399-.327.797-.659 1.196-.989c.673-.561 1.343-1.124 2.117-1.804c4.289-3.955 8.511-8.249 12.381-12.789c.706-.923 6.409-7.215 6.166-15.07"
                />
                <path
                  fill="#f1a5b1"
                  d="M51.648 25.56a6.893 6.893 0 0 0-.313-1.997a6.222 6.222 0 0 0-.802-1.662c-2.042-3-6.489-4.081-10.206-3.321c-1.448.349-2.9.894-3.568 2.278c-.228.594.252.879.989.843c2.673-.299 5.632-.03 7.996 1.119c.589.288 1.139.63 1.643 1.032c1.696 1.313 2.429 3.356 2.764 5.381c.822-.166 1.273-1.155 1.378-2.036a7.185 7.185 0 0 0 .119-1.637"
                />
                <g fill="#faae40">
                  <path d="M54.4 18.02a9.222 9.222 0 0 1 1.83 6.566c1.754-2.41 1.868-5.726.008-8.182c-1.981-2.625-5.528-3.396-8.453-2.02a9.198 9.198 0 0 1 6.615 3.637" />
                  <path d="M58.18 14.675a15.665 15.665 0 0 1 3.095 11.12c2.977-4.083 3.162-9.699.016-13.859c-3.369-4.454-9.37-5.753-14.321-3.423a15.625 15.625 0 0 1 11.21 6.162M9.915 18.02a9.257 9.257 0 0 0-1.832 6.566c-1.751-2.41-1.866-5.726-.006-8.182c1.984-2.625 5.527-3.396 8.454-2.02a9.204 9.204 0 0 0-6.616 3.637" />
                  <path d="M6.137 14.675a15.626 15.626 0 0 0-3.094 11.12c-2.976-4.083-3.169-9.699-.019-13.859c3.371-4.454 9.374-5.753 14.325-3.423c-4.256.352-8.389 2.426-11.212 6.162" />
                </g>
              </svg>
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ dir: "ltr", margin: ".5rem" ,textAlign:"center",color:"#646f7e"}}>
          Developed By se3a All Copy Rights Reserved @2023
        </Box>
      </Container>
    </Box>
  );
}
