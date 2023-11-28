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