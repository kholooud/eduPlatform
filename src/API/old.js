// export const loginApi = async (data) => {
//     let resData
//     const response = await axios.post(`${baseUrl}/login`, {
//         ...data,
//     }).then((response) => { resData = response.data }).catch(({ response }) => { resData = response.data });
//     return resData
// };


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


