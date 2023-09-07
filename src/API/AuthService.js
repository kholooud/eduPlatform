import axios from "axios";
export const baseUrl = 'http://66.29.149.18/api/v1/student'


export const registerApi = async (data) => {
    let resData
    const response = await axios.post(`${baseUrl}/register`, {
        ...data,
        birth_date: "2000-02-24",
        semester_id: 2,
    }).then((response) => { resData = response.data }).catch(({ response }) => { resData = response.data });
    return resData
};

export const isAuthenticated = () => {
    const userToken = localStorage.getItem('userToken');
    console.log('userToken is Auth', userToken)
    if (!userToken) {
        console.log("user token api auth not found")
        return null
    }
    console.log("user token api auth  found",JSON.parse(userToken))
    return JSON.parse(userToken);
};

export const loginApi = async (data) => {
    let resData
    const response = await axios.post(`${baseUrl}/login`, {
        ...data,
    }).then((response) => { resData = response.data }).catch(({ response }) => { resData = response.data });
    return resData
};