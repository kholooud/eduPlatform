import axios from "axios";
import { baseUrl } from "./AuthService"

export const getExam = async (examID,userToken) => {
    let resData;
    const { response } = await axios.get(`${baseUrl}/exams/${examID}`, {
        headers: {
            authorization: `Bearer ${userToken}`
        }
    })
        .then((response) => {
            resData = response.data.body;
            console.log("exam",resData)
            return resData
        }).catch(() => {
            console.log("first")
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
            console.log("allexam",resData)
            return resData
        }).catch(() => {
            console.log("frist get all exams")
        });
    return resData
};
