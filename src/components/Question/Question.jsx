import { useTheme } from '@emotion/react'
import { Button, Grid, Container } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import QuestionIMG from "../../assets/question.jpg"
import classes from "./Question.module.css"



export default function Question() {
    const theme = useTheme();
    return (
        <Container>
            <Grid sx={{ boxShadow: 7, padding: 2, marginTop: "0.7rem" }}>
                <img src={QuestionIMG} width={"100%"} className={classes.img} />
                <Stack direction={"row"} className={classes.buttonBox}>
                    <Button className={classes.button} variant="outlined" color='secondary'>ا</Button>
                    <Button className={classes.button} variant="outlined" color='secondary' >ب</Button>
                    <Button className={classes.button} variant="outlined" color='secondary' >ج</Button>
                    <Button className={classes.button} variant="outlined" color='secondary'>د</Button>
                </Stack>
            </Grid >
        </Container>
    )
}
