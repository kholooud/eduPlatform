import axios from "axios";
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

export const isAuthenticated = () => {
    const userToken = localStorage.getItem('userToken');
    if (!userToken) {
        return null
    }
    return JSON.parse(userToken);
};

export const loginApi = async (data) => {
    let resData
    const response = await axios.post(`${baseUrl}/login`, {
        ...data,
    }).then((response) => { resData = response.data }).catch(({ response }) => { resData = response.data });
    return resData
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

// export const isOnline = (no, yes) => {
//     var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
//     xhr.onload = function () {
//         if (yes instanceof Function) {
//             yes();
//         }
//     }
//     xhr.onerror = function () {
//         if (no instanceof Function) {
//             no();
//         }
//     }
//     xhr.open("GET", "anypage.php", true);
//     xhr.send();
// }

// isOnline(
//     function () {
//         alert("Sorry, we currently do not have Internet access.");
//     },
//     function () {
//         alert("Succesfully connected!");
//     }
// );


