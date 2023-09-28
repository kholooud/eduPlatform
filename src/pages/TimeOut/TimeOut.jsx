import React from 'react'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone';

export default function TimeOut() {

    return (
        <Grid container sx={{ justifyContent: "center", padding: "2rem" }}  >
            <Card sx={{ minWidth: { md: "50%", xs: "20%" }, padding: "2rem" }}>
                <CardContent sx={{ textAlign: "center" }}>
                    <ReportTwoToneIcon sx={{ color: "#f43f5d" }} />
                    <Typography variant='body1' sx={{ fontWeight: 'bold' }}> إنتهى وقت مشاهدة الحصة</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
