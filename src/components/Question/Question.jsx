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
            {/* <img src={QuestionIMG} width={"100%"} /> */}
            <img src={`http://66.29.149.18/storage/${imgPath}`} width={"100%"} />
            <Stack direction={"row"} className={classes.buttonBox}>
                <Button
                    sx={{
                        minWidth: "max-content",
                        background: selected == 'a' ? "#3b82f6" : "#fff",
                        color: selected == 'a' ? '#fff' : " "
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="a" >ا</Button>
                <Button
                    sx={{
                        minWidth: "max-content",
                        background: selected == 'b' ? "#3b82f6" : "#fff",
                        color: selected == 'b' ? '#fff' : " "
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="b" >ب</Button>
                <Button
                    sx={{
                        minWidth: "max-content",
                        background: selected == 'c' ? "#3b82f6" : "#fff",
                        color: selected == 'c' ? '#fff' : " "
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="c" >ج</Button>
                <Button
                    sx={{
                        minWidth: "max-content",
                        background: selected == 'd' ? "#3b82f6" : "#fff",
                        color: selected == 'd' ? '#fff' : " "
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="d">د</Button>
            </Stack>
        </Grid >
    )
}
