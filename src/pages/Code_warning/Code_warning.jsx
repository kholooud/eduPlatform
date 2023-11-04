import React, { useContext, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material'
import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone';
import { reedemCode } from '../../API/StudentServices';
import { UserContext } from '../../context/UserContext';
import { HandleErrorContext } from '../../context/HandleErrorContext';



export default function Code_warning({ getLesson }) {
    const [barCode, setbarCode] = useState('')
    const [codeError, setcodeError] = useState(0)
    const { userToken } = useContext(UserContext);
    const { notify } = useContext(HandleErrorContext)



    const handleRedirect = async () => {
        console.log(barCode)
        let x = await reedemCode(barCode, userToken);
        if (x.status == 200) {
            notify('تم تفعيل الكود')
            getLesson()
            return setcodeError({ 'meassge': 'تم تفعيل الكود ', 'color': 'green' })
        }
        setcodeError({ 'meassge': 'الكود مش صح', 'color': 'red' })
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
                        onChange={(e) => {
                            setbarCode(e.target.value);
                        }}
                    />
                </CardContent>
                <CardActions sx={{ display: "flex", flexFlow: "column", justifyContent: "center" }}>
                    <Button variant="outlined" color='secondary' sx={{ fontFamily: "inherit" }} size="large" onClick={handleRedirect}>
                        تفعيل
                    </Button>
                    {codeError ? <Box sx={{ color: codeError.color, margin: "15px 0 0 0" }} >{codeError.meassge}</Box> : ""}
                </CardActions>
            </Card>
        </Grid>
    )
}
