import React, { useEffect, useState } from 'react'
import Question from '../../../../components/Question/Question';
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
            {examQues.map((e) => {
                return <Question key={e.question_id} id={e.question_id} setqueAnsObj={setqueAnsObj} />
            })}
        </div>
    )
}
