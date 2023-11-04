import React, { useEffect, useState } from 'react'
import { HomeWOrkQuestion } from '../../../../components/Question/Question';
import { useOutletContext } from "react-router-dom";
import { Box, CircularProgress } from '@mui/material';

export default function Exam() {
    const { homework, homework_status } = useOutletContext()
    const [queAnsObj, setqueAnsObj] = useState({});
    const [examQues, setexamQues] = useState([]);
    const [examCount, setexamCount] = useState(null);

    const submitHomework = () => {
        console.log("queAnsObj", queAnsObj)
    }
    useEffect(() => {
        if (!homework_status) {
            setqueAnsObj(() => {
                let temp = {}
                examQues.map((que) => {
                    let a = {};
                    a[`${que.question_id}`] = -1;
                    temp = { ...temp, ...a }
                })
                return temp
            })
        }

    }, [])



    useEffect(() => {
        console.log('homework', homework, homework_status)
        setexamQues(homework.questions);
        setexamCount(homework.question_count)
    }, [homework, homework_status])


    useEffect(() => {
        console.log("object", queAnsObj)
    }, [queAnsObj])

    return (
        <Box sx={{ display: 'flex', flexFlow: "column", width: '100%', height: '100%', justifyContent: "center", alignItems: 'center' }}>
            {examQues.length > 0 && examCount > 0 ? (
                examQues.map((e) => {
                    return (
                        <HomeWOrkQuestion
                            key={e.id}
                            id={e.id}
                            imgPath={e.image_path}
                            setqueAnsObj={setqueAnsObj}
                            homeworkID={homework.id}
                        />
                    );
                })
            ) : ("")}
            {examQues.length == 0 && examCount == 0 ? <div>مفيش واجب للدرس ده</div> : ""}
            {examQues.length == 0 && examCount == null ? <CircularProgress color="secondary" /> : ""}
        </Box>
    )
}
