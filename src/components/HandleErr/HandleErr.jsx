import { Box } from '@mui/material'
import React from 'react'
import { position } from 'stylis'

export default function HandleErr() {
    return (
        <Box  bgcolor={"#f43f5e"}
            sx={{
                borderRadius: "0.4rem",
                width: " 70%",
                textAlign: "center",
                padding: "1rem",
                margin: "1rem",
                color: "red",
                transition: "all 0.4s ease",
                // transform: "translateY(-20rem) rotate(0deg)",
                position:"absolute",
                top:"0",
                left:"0",
                zIndex:"99999999999"
            }}
        >
             حدث خطا برجاء التواصل بالدعم
        </Box >
    )
}
