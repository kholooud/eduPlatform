import React from 'react'
import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from '@mui/material'
import { Navigate } from 'react-router-dom';
import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone';



export default function Code_warning() {
    const handleRedirect = () => {
       console.log("heloooooooooooo")
    }

    return (
        <Grid container sx={{ justifyContent: "center", padding: "2rem" }}  >
            <Card sx={{ minWidth: { md: "50%", xs: "20%" }, padding: "2rem" }}>
                <CardContent sx={{ textAlign: "center" }}>
                    <ReportTwoToneIcon sx={{ color: "#f43f5d" }} />
                    <Typography variant='body1' sx={{ fontWeight: 'bold' }}>عفوا يجب أن تدخل كود الحصة أولا</Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="code"
                        label="إدخل الكود"
                        type="text"
                        variant="standard"
                        color='secondary'
                    />
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                    <div>
                        <Button variant="outlined" color='secondary' sx={{ fontFamily: "inherit" }} size="large">
                           تفعيل
                        </Button>
                    </div>
                </CardActions>
            </Card>
        </Grid>
    )
}
