import { Grid } from '@mui/material';
import React from 'react'
import ReactPlayer from 'react-player';
import classes from "./Player.module.css"

export default function Player() {
    return (
        <Grid >
             <ReactPlayer controls className={classes.player} url='https://www.youtube.com/watch?v=6ONFD3RiYeI' />
        </Grid>
    )
}
