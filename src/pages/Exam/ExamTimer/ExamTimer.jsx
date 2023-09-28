import React from 'react'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import Countdown from "react-countdown";
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone';

export default function ExamTimer() {

    return (
        <Grid container sx={{ justifyContent: "center", padding: "2rem" }}  >
            <Card sx={{ minWidth: { md: "50%", xs: "20%" }, padding: "2rem" }}>
                <CardContent sx={{ textAlign: "center" }}>
                <TimerTwoToneIcon sx={{ color: "#f43f5d" }} />
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>باقي على الإمتحان</Typography>
                <Countdown sx={{fontWeight:"bold"}} date={Date.now() + 10000} />
                </CardContent>
            </Card>
        </Grid>
    )
}


