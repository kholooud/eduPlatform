import { CircularProgress, Grid } from '@mui/material';
import React from 'react'
import ReactPlayer from 'react-player';
import { useOutletContext } from "react-router-dom";


export default function Video() {
    const { video_path } = useOutletContext()
    return (
        video_path ? <ReactPlayer controls width={"100%"} url={video_path} />
            :
            <Grid sx={{ width: "100%", height: "100%", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                {/* <CircularProgress color="secondary" /> */}
                مفيش فيديو للدرس ده
            </Grid>
    )
}
