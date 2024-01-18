import axios from "axios";
import { baseUrl } from './AuthService'



export const Lesson = async (userToken) => {
    let resData;
    console.log(userToken)
    const { response } = await axios.get(`${baseUrl}/lessons`, {
        headers: {
            authorization: `Bearer ${userToken}`
        }
    })
        .then((response) => {
            resData = response.data.body.data;
            return resData
        }).catch(() => {
        });
    return resData
};

export const getHomework = async (homeworkID, userToken) => {

    let resData;
    const response = await axios.get(`${baseUrl}/homeworks/${homeworkID}`, {
        headers: {
            authorization: `Bearer ${userToken}`
        }
    })
        .then((response) => {
            console.log("sucAllam=>", response)
            resData = response;
            return resData
        }).catch(() => {
            console.log("de=>", response)
            resData = response.response
            return resData
        });
    return resData
};


export const submitHomeWork = async (userToken, homeWorkAnswers) => {
    let resData;
    const respons = await axios.post(`${baseUrl}/homeworks/submit`,
        homeWorkAnswers,
        {
            headers: {
                authorization: `Bearer ${userToken}`
            }
        }
    )
        .then((response) => {
            console.log("home answer ", response)
            resData = response
        }).catch((response) => {
            console.log("home answer catch", response)
            resData = response.response
            return resData
        });
    return resData
};


