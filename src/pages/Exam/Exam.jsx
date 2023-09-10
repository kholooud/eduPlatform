import {  Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ChipDiv from '../../components/ChipDiv/ChipDiv';
import Question from '../../components/Question/Question'

const examQues = [
    { question_id: "123", img: "fdkfk" },
    { question_id: "124", img: "fdkfk" },
    { question_id: "125", img: "fdkfk" },
    { question_id: "126", img: "fdkfk" },
]
export default function Exam() {
    const [queAnsObj, setqueAnsObj] = useState({});
    const submitExam = () => {
        console.log("queAnsObj", queAnsObj)
    }
    useEffect(() => {
        setqueAnsObj(() => {
            let temp = {}
            examQues.map((que) => {
                let a = {};
                a[`${que.question_id}`] = -1;
                temp = { ...temp, ...a }
            })
            return temp
        })
    }, [])
    useEffect(() => {
        console.log("object", queAnsObj)
    }, [queAnsObj])
    return (
        <div>
            <Grid container sx={{ minHeight: "15rem", padding: "2rem", display: "flex", justifyContent: "center", bgcolor: "#3b82f6", borderRadius: "0.5rem", boxSizing: "border-box" }}>
                <Typography item graphy sx={{ color: "white", padding: "1rem", textAlign: "center", fontFamily: "inherit", width: "100%" }} variant='h4'>إمتحان على مادة الجبر</Typography>
                <Grid container item sx={{ justifyContent: { md: "center", xs: "space-evenly" }, alignContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <Grid item ><ChipDiv label={"الدرجات"} data={"98/100"} colorBG={"#b424cd"} /></Grid>
                    <Grid item ><ChipDiv label={"عدد الاسئلة"} data={"20"} colorBG={"#4724cd"} /></Grid>
                    <Grid item ><ChipDiv label={"مدة الامتحان"} data={"2H"} colorBG={"#22d3ee"} /></Grid>
                    <Grid item ><ChipDiv label={"وقت البدء"} data={"20:00 24/09/2023"} colorBG={"#f43f5e"} /></Grid>
                </Grid>
                <Grid container item sx={{ justifyContent: { md: "center", xs: "space-evenly" }, alignContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <Grid item onClick={() => { submitExam() }} ><ChipDiv label={"تسليم"} data={"100"} colorBG={"#b424cd"} /></Grid>
                    <Grid item ><ChipDiv label={"متبقي "} data={"00:00"} colorBG={"#b424cd"} /></Grid>
                </Grid>
            </Grid>
            {examQues.map((e) => {
                return <Question key={e.question_id} id={e.question_id} setqueAnsObj={setqueAnsObj} />
            })}
        </div>
    )
}
