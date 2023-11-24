import { Button, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import classes from "./Question.module.css"


export default function Question({ id, setqueAnsObj, imgPath, examID }) {
    const [selected, setselected] = useState(-1);
    const [prevAnswers, setprevAnswers] = useState(localStorage.getItem(`userAnswerEX_${examID}`) ? JSON.parse(localStorage.getItem(`userAnswerEX_${examID}`)).answers : {});

    useEffect(() => {
        setselected(prevAnswers[id])
        let a = { id: prevAnswers[id] }
        setqueAnsObj((prev) => {
            return { ...prev, ...a };
        })
    }, [])


    const handleClick = (e) => {
        setselected(e.id)
        let a = {}
        a[`${id}`] = e.id
        setqueAnsObj((prev) => {
            localStorage.setItem(
                `userAnswerEX_${examID}`,
                JSON.stringify({ 'examID': examID, 'answers': { ...prev, ...a } })
            );
            return { ...prev, ...a };
        })
    }

    return (
        <Grid sx={{ boxShadow: 7, padding: 1, marginY: 2, borderRadius: "5px" }}>
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
export function QuestionAnswers({ imgPath, answer, student_answer }) {
    const [studentAnswer, setstudentAnswer] = useState(student_answer);
    const [rightAnswer, setrightAnswer] = useState(answer);

    return (
        <Grid sx={{ boxShadow: 7, padding: 1, marginY: 2, borderRadius: "5px" }}>
            <img src={`http://66.29.149.18/storage/${imgPath}`} width={"100%"} />
            <Stack direction={"row"} className={classes.buttonBox}>
                <Button
                    disabled
                    sx={{
                        minWidth: "max-content",
                        background: rightAnswer == 'a' ? '#62B230' : (studentAnswer == 'a' ? '#f22929' : '#FFF'),
                        color: rightAnswer == 'a' ? 'white !important' : (studentAnswer == 'a' ? 'white !important' : '#black')
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="a" >ا</Button>
                <Button
                    disabled
                    sx={{
                        minWidth: "max-content",
                        background: rightAnswer == 'b' ? '#62B230' : (studentAnswer == 'b' ? '#f22929' : '#FFF'),
                        color: rightAnswer == 'b' ? 'white !important' : (studentAnswer == 'b' ? 'white !important' : '#black')
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="b" >ب</Button>
                <Button
                    disabled
                    sx={{
                        minWidth: "max-content",
                        background: rightAnswer == 'c' ? '#62B230' : (studentAnswer == 'c' ? '#f22929' : '#FFF'),
                        color: rightAnswer == 'c' ? 'white !important' : (studentAnswer == 'c' ? 'white !important' : '#black')
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="c" >ج</Button>
                <Button
                    disabled
                    sx={{
                        minWidth: "max-content",
                        background: rightAnswer == 'd' ? '#62B230' : (studentAnswer == 'd' ? '#f22929' : '#FFF'),
                        color: rightAnswer == 'd' ? 'white !important' : (studentAnswer == 'd' ? 'white !important' : '#black')
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="d">د</Button>
            </Stack>
        </Grid >
    )
}

export function HomeWorkQuestion({ id, setqueAnsObj, imgPath, homeworkID, homeWorkStatus }) {
    const [selected, setselected] = useState(-1);
    const [prevAnswers, setprevAnswers] = useState(localStorage.getItem(`userAnswerHW_${homeworkID}`) ? JSON.parse(localStorage.getItem(`userAnswerHW_${homeworkID}`)).answers : {});

    useEffect(() => {
        setselected(prevAnswers[id])
        let a = { id: prevAnswers[id] }
        setqueAnsObj((prev) => {
            return { ...prev, ...a };
        })
    }, [])


    const handleClick = (e) => {
        setselected(e.id)
        let a = {}
        a[`${id}`] = e.id
        setqueAnsObj((prev) => {
            localStorage.setItem(
                `userAnswerHW_${homeworkID}`,
                JSON.stringify({ 'homeWorkID': homeworkID, 'answers': { ...prev, ...a } })
            );
            return { ...prev, ...a };
        })
    }

    return (
        <Grid sx={{ boxShadow: 7, padding: 1, marginY: 2, borderRadius: "5px" }}>
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

export function HomeWorkQuestionAnswers({ imgPath, answer, student_answer }) {
    const [studentAnswer, setstudentAnswer] = useState(student_answer);
    const [rightAnswer, setrightAnswer] = useState(answer);

    return (
        <Grid sx={{ boxShadow: 7, padding: 1, marginY: 2, borderRadius: "5px" }}>
            <img src={`http://66.29.149.18/storage/${imgPath}`} width={"100%"} />
            <Stack direction={"row"} className={classes.buttonBox}>
                <Button
                    disabled
                    sx={{
                        minWidth: "max-content",
                        background: rightAnswer == 'a' ? '#62B230' : (studentAnswer == 'a' ? '#f22929' : '#FFF'),
                        color: rightAnswer == 'a' ? 'white !important' : (studentAnswer == 'a' ? 'white !important' : '#black')
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="a" >ا</Button>
                <Button
                    disabled
                    sx={{
                        minWidth: "max-content",
                        background: rightAnswer == 'b' ? '#62B230' : (studentAnswer == 'b' ? '#f22929' : '#FFF'),
                        color: rightAnswer == 'b' ? 'white !important' : (studentAnswer == 'b' ? 'white !important' : '#black')
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="b" >ب</Button>
                <Button
                    disabled
                    sx={{
                        minWidth: "max-content",
                        background: rightAnswer == 'c' ? '#62B230' : (studentAnswer == 'c' ? '#f22929' : '#FFF'),
                        color: rightAnswer == 'c' ? 'white !important' : (studentAnswer == 'c' ? 'white !important' : '#black')
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="c" >ج</Button>
                <Button
                    disabled
                    sx={{
                        minWidth: "max-content",
                        background: rightAnswer == 'd' ? '#62B230' : (studentAnswer == 'd' ? '#f22929' : '#FFF'),
                        color: rightAnswer == 'd' ? 'white !important' : (studentAnswer == 'd' ? 'white !important' : '#black')
                    }}
                    onClick={(e) => { handleClick(e.target) }}
                    variant="outlined" color='secondary' id="d">د</Button>
            </Stack>
        </Grid >
    )
}