import axios from "axios";
import handleApiResponse from "./helper";
export const baseUrl = 'http://66.29.149.18/api/v1/student'


export const registerApi = async (data) => {
    let resData
    const response = await axios.post(`${baseUrl}/register`, {
        ...data,
        semester_id: data.year == "3" ? 0 : checkSemster(),
        semester: data.year == "3" ? 0 : `${checkSemster()}`
    }).then((response) => { resData = response.data }).catch(({ response }) => { resData = response.data });
    return resData
};

export const loginApi = async (data) => {
    const apiFunction = () => {
        return axios.post(`${baseUrl}/login`, {
            ...data,
        })
    }
    return (await handleApiResponse(apiFunction))
};

export const checkSemster = () => {
    let currentMonth = (new Date(Date.now())).getMonth() + 1
    let fristSemster = [7, 8, 9, 10, 11, 12, 1]
    let lastSemster = [2, 3, 4, 5, 6]
    if (fristSemster.includes(currentMonth)) {
        return 1
    } else if (lastSemster.includes(currentMonth)) {
        return 2
    }
}
export const isAuthenticated = () => {
    const userToken = localStorage.getItem('userToken');
    if (!userToken) {
        return null
    }
    return JSON.parse(userToken);
};
