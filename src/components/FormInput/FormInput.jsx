import { useTheme } from '@emotion/react';
import { Grid, TextField } from '@mui/material'
import React from 'react'

export default function FormInput({ register, img, label, errors, ele, type, xs, md }) {
    const theme = useTheme("");
    function FormHelperTextProps(indicator) {
        return {
            sx: {
                color: "#fff !important",
                bgcolor: `${indicator ? theme.palette.info.main : "transparent"}`,
                fontFamily: "inherit",
                borderRadius: "5px",
                boxSizing: "border-box",
                padding: "5px",
                // color: '#fff'
            },
        };
    }
    return (
        <Grid
            item
            xs={xs}
            md={md}
            boxSizing={"border-box"}
            paddingBottom={1}
        >
            <TextField
                label={
                    <>
                        {img}{label}
                    </>
                }
                variant="standard"
                color="secondary"
                errors={errors[ele]}
                sx={{ width: "80%" }}
                helperText={
                    errors[ele] ? errors[ele].message : " "
                }
                FormHelperTextProps={FormHelperTextProps(errors[ele])}
                type={type}
                {...register(ele)}
            />
        </Grid>
    )
}
