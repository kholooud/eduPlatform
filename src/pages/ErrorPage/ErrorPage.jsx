import React, { useContext } from 'react'
import { Grid, Box } from '@mui/material';
import { UserContext } from '../../context/UserContext';

export default function ErrorPage() {
    const { setisActive } = useContext(UserContext);
    localStorage.removeItem('userToken');
    function handlek() {
        setisActive(undefined)
    }

    return (
        <Grid container sx={{ height: "75vh", display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center",gap:"20px" }}>
            <Box md={12}>
                الملف الشخصي غير مفعل يرجى التواصل مع الشخص المسئول
            </Box>
            <Box item xs={12} onClick={handlek}
                sx={{
                    position: "relative",
                    alignItems: "center",
                    background: "#3b82f6",
                    color: "#fff",
                    border: "1px solid #3b82f6",
                    borderRadius:"5px",
                    padding: "10px",
                    "&:hover": {
                        background: "#fff",
                        color: "#3b82f6",
                    }
                }}>
                حاول تسجيل مرة اخري
            </Box>
        </Grid >
    )
}
