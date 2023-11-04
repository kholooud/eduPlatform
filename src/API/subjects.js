import axios from "axios";
import {baseUrl} from './AuthService'



export const Lesson = async (userToken) => {
    let resData;
    console.log(userToken)
    // let userToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vNjYuMjkuMTQ5LjE4L2FwaS92MS9hZG1pbi9sb2dpbiIsImlhdCI6MTY5NTgwMDg3MSwiZXhwIjoxNjk1ODA0NDcxLCJuYmYiOjE2OTU4MDA4NzEsImp0aSI6IkhzbXJSVkkyQUxSdWI2dTMiLCJzdWIiOiJiNWFlZjkzZi00ZWFiLTExZWUtYWE0MS1jODRiZDY0YTk5MTgiLCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.oTxvNJMPH8Z85U_xEWgR3CGli3GikNIQRQ-l8wu-g6U"
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




