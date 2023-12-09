async function handleApiResponse(apiFunction) {
    try {
        const response = await apiFunction();
        if (response.status === 200) {
            return (response.data);
        } else {
            return (`Unexpected status: ${response.status}`);
        }
    } catch (error) {
        return (error.response);
    }
};
export default handleApiResponse;

export const isOnline = (no, yes) => {
    var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
    xhr.onload = function () {
        if (yes instanceof Function) {
            yes();
        }
    }
    xhr.onerror = function () {
        if (no instanceof Function) {
            no();
        }
    }
    xhr.open("GET", "anypage.php", true);
    xhr.send();
}