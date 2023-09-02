import { useTheme } from '@emotion/react'
import { Button, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import QuestionIMG from "../../assets/question.jpg"
import classes from "./Question.module.css"


export default function Question() {
    const theme = useTheme();
    return (
        <Grid sx={{ boxShadow: 7, padding: 1 }}>
            <img src={QuestionIMG} width={"100%"} className={classes.img} />
            <Stack direction={"row"} className={classes.buttonBox}>
                <Button className={classes.button} variant="outlined" color='secondary'>ا</Button>
                <Button className={classes.button} variant="outlined" color='secondary' >ب</Button>
                <Button className={classes.button} variant="outlined" color='secondary' >ج</Button>
                <Button className={classes.button} variant="outlined" color='secondary'>د</Button>
            </Stack>
        </Grid >
    )
}
