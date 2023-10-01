import { Button, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import QuestionIMG from "../../assets/question.jpg"
import classes from "./Question.module.css"


export default function Question({ id, setqueAnsObj,imgPath }) {
    const [selected, setselected] = useState(-1);
    const handleClick = (e) => {
        setselected(e.id)
        let a = {}
        a[`${id}`] = e.id
        setqueAnsObj((prev) => {
            localStorage.setItem(
                "userAnswer",
                JSON.stringify({ ...prev, ...a })
            );
            return { ...prev, ...a };
        })

    }

    return (
        <Grid sx={{ boxShadow: 7, padding: 1, marginY: 2 ,borderRadius: "5px" }}>
            <img src={QuestionIMG} width={"100%"} />
            {/* <img src={`http://66.29.149.18/storage/${imgPath}`} width={"100%"} /> */}
            <Stack direction={"row"} className={classes.buttonBox}>
                <Button
                    sx={{
                        minWidth: "max-content",
                        background: selected == 1 ? "#3b82f6" : "#fff",
                        color: selected == 1 ? '#fff' : " "
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="1" >ا</Button>
                <Button
                    sx={{
                        minWidth: "max-content",
                        background: selected == 2 ? "#3b82f6" : "#fff",
                        color: selected == 2 ? '#fff' : " "
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="2" >ب</Button>
                <Button
                    sx={{
                        minWidth: "max-content",
                        background: selected == 3 ? "#3b82f6" : "#fff",
                        color: selected == 3 ? '#fff' : " "
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="3" >ج</Button>
                <Button
                    sx={{
                        minWidth: "max-content",
                        background: selected == 4 ? "#3b82f6" : "#fff",
                        color: selected == 4 ? '#fff' : " "
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="4">د</Button>
            </Stack>
        </Grid >
    )
}
