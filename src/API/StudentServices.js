import axios from "axios";
import { baseUrl } from "./AuthService"

export const getExam = async (examID, userToken) => {
    let resData;
    const { response } = await axios.get(`${baseUrl}/exams/${examID}`, {
        headers: {
            authorization: `Bearer ${userToken}`
        }
    })
        .then((response) => {
            resData = response.data.body;
            // console.log("exam",resData)
            return resData
        }).catch(() => {
            // console.log("first")
        });
    return resData
};

export const getAllExam = async (userToken) => {
    let resData;
    const { response } = await axios.get(`${baseUrl}/exams`, {
        headers: {
            authorization: `Bearer ${userToken}`
        }
    })
        .then((response) => {
            resData = response.data.body;
            // console.log("allexam",resData)
            return resData
        }).catch(() => {
            // console.log("frist get all exams")
        });
    return resData
};

export const submitExamAnswers = async (userToken, examAnswers) => {
    let resData;
    const respons = await axios.post(`${baseUrl}/exams/submit`,

        examAnswers,
        {
            headers: {
                authorization: `Bearer ${userToken}`
            }
        }
    )
        .then((response) => {
            console.log("exam ans ", response)
        }).catch((response) => {
            console.log("exam answer catch", response)
        });
    return resData
};


export const getSubject = async (subjectID, userToken) => {
    let resData;
    const { response } = await axios.get(`${baseUrl}/lessons?subject=${subjectID}`, {
        headers: {
            authorization: `Bearer ${userToken}`
        }
    })
        .then((response) => {
            resData = response.data.body;
            console.log("lessons",resData)
            return resData
        }).catch(() => {
            // console.log("first")
        });
    return resData
};
