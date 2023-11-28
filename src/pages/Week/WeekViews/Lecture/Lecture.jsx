import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { useOutletContext } from "react-router-dom";

export default function Video() {
  const { video_path } = useOutletContext();
  console.log("videoPath", video_path);
  return (
    <>
      {}
      {video_path == null ? (
        <Grid
          item
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          مفيش فيديو للدرس ده
        </Grid>
      ) : video_path == "code_deactived" ? (
        <div>ask for new code</div>
      ) : (
        <ReactPlayer controls width={"100%"} url={video_path} />
      )}
    </>
  );
}
