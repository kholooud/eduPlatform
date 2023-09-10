import axios from "axios";
export const baseUrl = 'http://66.29.149.18/api/v1/student'


export const registerApi = async (data) => {
    let resData
    const response = await axios.post(`${baseUrl}/register`, {
        ...data,
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
    console.log("user token api auth  found", JSON.parse(userToken))
    return JSON.parse(userToken);
};

export const loginApi = async (data) => {
    let resData
    const response = await axios.post(`${baseUrl}/login`, {
        ...data,
    }).then((response) => { resData = response.data }).catch(({ response }) => { resData = response.data });
    return resData
};


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