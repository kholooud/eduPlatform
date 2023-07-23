import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import proImg from "../../../../assets/testimonial-2.jpg";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { EmailOutlined } from "@mui/icons-material";
import Classes from "./Main.module.css";
import CircularProgress from "@mui/joy/CircularProgress";
export default function Main() {
  return (
    <Grid
      container
      xs={12}
      justifyContent={"center"}
      alignContent={"flex-start"}
    >
      <Grid
        className="info"
        item
        container
        xs={11}
        justifyContent={"center"}
        margin={"1rem 0"}
      >
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
              width: "80%",
              aspectRatio: "1/1",
              borderRadius: "15px",
            }}
          >
            <img src={proImg} width={"100%"} />
          </Box>
        </Grid>
        <Grid
          item
          xs={9}
          bgcolor={""}
          sx={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "start",
            padding: "0 1rem",
          }}
        >
          <Box
            className={Classes.info}
            sx={{ fontSize: "1.8rem", marginBottom: "10px" }}
          >
            <BadgeOutlinedIcon sx={{ color: "#3b82f6" }} />
            <span>يوسف محمد</span>
          </Box>
          <Box className={Classes.info}>
            <PhoneEnabledOutlinedIcon />
            <span> 01228103702</span>
          </Box>
          <Box className={Classes.info}>
            <EmailOutlined />
            <span> ym69692@gmail.com</span>
          </Box>
          <Box className={Classes.info}>
            <SchoolOutlinedIcon />
            <span>الصف الاول الثانوي</span>
          </Box>
        </Grid>
      </Grid>
      <div className={Classes.breakLine}></div>
      <Grid className="statistics" item container xs={11}>
        <Grid
          className="header"
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            fontSize: { md: "2.2rem", sx: "1.5rem" },
            margin: "1rem 0",
          }}
        >
          <Grid item xs={1} textAlign={"end"}>
            <Typography variant="span">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--arcticons"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m6.255 14.724l10.12-.333L23.62 2.28l1.551-.042l-5.53 16.198l-9.156.019Zm4.155 22.727l2.719-9.755L3.75 17.153l.425-1.493l13.793 10.135l-2.73 8.74Zm21.918 3.319l-8.585-5.372l-12.768 6.006l-1.311-.83l13.628-10.356l7.609 5.094ZM41.8 20.15l-7.653 6.632l1.997 13.97l-1.178 1.01l-5.903-16.067l7.101-5.78ZM26.323 4.635l3.585 9.471l13.8 2.943l.542 1.454H27.134l-2.976-8.659Z"
                />
              </svg>
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} textAlign={"center"}>
            احصائيات الكورسات
          </Grid>
          <Grid item xs={1} textAlign={"start"}>
            <Typography variant="span">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--arcticons"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m6.255 14.724l10.12-.333L23.62 2.28l1.551-.042l-5.53 16.198l-9.156.019Zm4.155 22.727l2.719-9.755L3.75 17.153l.425-1.493l13.793 10.135l-2.73 8.74Zm21.918 3.319l-8.585-5.372l-12.768 6.006l-1.311-.83l13.628-10.356l7.609 5.094ZM41.8 20.15l-7.653 6.632l1.997 13.97l-1.178 1.01l-5.903-16.067l7.101-5.78ZM26.323 4.635l3.585 9.471l13.8 2.943l.542 1.454H27.134l-2.976-8.659Z"
                />
              </svg>
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12} display={"flex"}>
          <Grid
            item
            xs={4}
            bgcolor={"aliceblue"}
            sx={{ display: "flex", justifyContent: "center" }}
          >
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
