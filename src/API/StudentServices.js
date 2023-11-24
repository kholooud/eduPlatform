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
            return resData
        }).catch(() => {
            resData = response.response
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
            console.log("allexam", resData)
            return resData
        }).catch(() => {
            console.log("frist catch get all exams")
            resData = response.response
        });
    return resData
};
export const getAllCode = async (userToken) => {
    let resData;
    const { response } = await axios.get(`${baseUrl}/lessons/by/code`, {
        headers: {
            authorization: `Bearer ${userToken}`
        }
    })
        .then((response) => {
            resData = response.data.body;
            console.log("allcode", resData)
            return resData
        }).catch(() => {
            console.log("frist catch get all code")
            resData = response.response
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
            resData = response.response
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
            console.log("lessons", resData)
            return resData
        }).catch(() => {
            resData = response.response
        });
    return resData
};


export const getLesson = async (LessonID, userToken) => {
    let resData;
    const response = await axios.get(`${baseUrl}/lessons/${LessonID}`, {
        headers: {
            authorization: `Bearer ${userToken}`
        }
    })
        .then((response) => {
            resData = response;
            return resData
        }).catch((response) => {
            resData = response.response;
            return resData
        });

    return resData
};



export const reedemCode = async (barcode, lesson_id, userToken) => {
    let resData;
    const response = await axios.post(`${baseUrl}/reedem`,
        {
            'barcode': +barcode,
            'lesson_id': lesson_id
        }, {
        headers: {
            authorization: `Bearer ${userToken}`
        }
    }
    ).then((response) => {
        resData = response;
        console.log("code ", resData)
        return resData
    }).catch((response) => {
        resData = response.response
    });
    return resData
};


