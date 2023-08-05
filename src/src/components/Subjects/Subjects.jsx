import React from "react";
import classes from "./Subjects.module.css";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import bag from "../../assets/bag.svg";
import algebra from "../../assets/algebra.jpg";
import handsa from "../../assets/engineering.jpg";
import Trigonometry from "../../assets/Trigonometry.jpg";
import { Link } from "react-router-dom";

export default function Year() {
    let year_id;
    let yearComponent;

    switch (year_id) {
        case 1:
            yearComponent = <Grid item xs={12} md={4} padding={2} marginBottom={5}>
                <Box sx={{ width: "100%", position: "relative" }}>
                    <Box sx={{ borderRadius: ".2rem", overflow: "hidden" }}>
                        <img src={algebra} className={classes.yearImg} />
                    </Box>
                    <Stack
                        padding={2}
                        spacing={1}
                        sx={{
                            boxShadow: "3",
                            borderRadius: "5px",
                            width: "80%",
                            margin: "auto",
                            position: "absolute",
                            bottom: "0%",
                            left: "50%",
                            bgcolor: "primary.main",
                            zIndex: 555,
                            transform: "translate(-50%,45%)",
                            "&:hover": {
                                transform: "translate(-50%,45%) scale(1.05)",
                            },
                        }}
                    >
                        <Box>حساب مثلثات</Box>
                        <Box
                            sx={{
                                background: "#2dd4bf",
                                width: "100%",
                                height: "3px",
                            }}
                        ></Box>
                        <Box>جميع كورسات الصف الاول الثانوي</Box>
                    </Stack>
                </Box>
            </Grid>
            break;
        case 2:
            yearComponent = <Grid item xs={12} md={4} padding={2} marginBottom={5}>
                <Box sx={{ width: "100%", position: "relative" }}>
                    <Box sx={{ borderRadius: ".2rem", overflow: "hidden" }}>
                        <img src={handsa} className={classes.yearImg} />
                    </Box>
                    <Stack
                        padding={2}
                        spacing={1}
                        sx={{
                            boxShadow: "3",
                            borderRadius: "5px",
                            width: "80%",
                            margin: "auto",
                            position: "absolute",
                            bottom: "0%",
                            left: "50%",
                            zIndex: 555,
                            bgcolor: "primary.main",
                            transform: "translate(-50%,45%)",
                            "&:hover": {
                                transform: "translate(-50%,45%) scale(1.05)",
                            },
                        }}
                    >
                        <Box>هندسة</Box>
                        <Box
                            sx={{
                                background: "#2dd4bf",
                                width: "100%",
                                height: "3px",
                            }}
                        ></Box>
                        <Box>جميع كورسات الصف الثاني الثانوي</Box>
                    </Stack>
                </Box>
            </Grid>
            break;
        case 3:
            yearComponent = <Grid item xs={12} md={4} padding={2} marginBottom={5}>
                <Box sx={{ width: "100%", position: "relative" }}>
                    <Box sx={{ borderRadius: ".2rem", overflow: "hidden" }}>
                        <img src={algebra} className={classes.yearImg} />
                    </Box>
                    <Stack
                        padding={2}
                        spacing={1}
                        sx={{
                            boxShadow: "3",
                            borderRadius: "5px",
                            width: "80%",
                            margin: "auto",
                            position: "absolute",
                            bottom: "0%",
                            left: "50%",
                            zIndex: 555,
                            bgcolor: "primary.main",
                            transform: "translate(-50%,45%)",
                            "&:hover": {
                                transform: "translate(-50%,45%) scale(1.05)",
                            },
                        }}
                    >
                        <Box>جبر</Box>
                        <Box
                            sx={{
                                background: "#2dd4bf",
                                width: "100%",
                                height: "3px",
                            }}
                        ></Box>
                        <Box>جميع كورسات الصف الثالث الثانوي</Box>
                    </Stack>
                </Box>
            </Grid>
            break;
    }
    return (
        <Box
            bgcolor={"#fde047"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ paddingY: "3rem", marginY: "3rem", overflow: "hidden" }}
        >
            <Box className={classes.x}>
                الصفوف الدارسية
                <img src={bag} />
            </Box>
            <Container>
                <Grid
                    container
                    sx={{
                        bgcolor: "primary.main",
                        borderRadius: ".2rem",
                        boxSizing: "border-box",
                        minHeight: "20rem",
                        zIndex: "55",
                        position: "relative"
                    }}
                >
                    {yearComponent ? yearComponent : <> <Grid item xs={12} md={4} padding={2} marginBottom={5}>
                        <Box sx={{ width: "100%", position: "relative" }}>
                            <Box sx={{ borderRadius: ".2rem", overflow: "hidden" }}>
                                <img src={Trigonometry} className={classes.yearImg} />
                            </Box>
                            <Stack
                                padding={2}
                                spacing={1}
                                sx={{
                                    boxShadow: "3",
                                    borderRadius: "5px",
                                    width: "80%",
                                    margin: "auto",
                                    position: "absolute",
                                    bottom: "0%",
                                    left: "50%",
                                    bgcolor: "primary.main",
                                    zIndex: 555,
                                    transform: "translate(-50%,45%)",
                                    "&:hover": {
                                        transform: "translate(-50%,45%) scale(1.05)",
                                    },
                                }}
                            >
                                <Box>حساب مثلثات</Box>
                                <Box
                                    sx={{
                                        background: "#2dd4bf",
                                        width: "100%",
                                        height: "3px",
                                    }}
                                ></Box>
                                <Box>جميع كورسات الصف الاول الثانوي</Box>
                            </Stack>
                        </Box>
                    </Grid>
                        <Grid item xs={12} md={4} padding={2} marginBottom={5}>
                            <Box sx={{ width: "100%", position: "relative" }}>
                                <Box sx={{ borderRadius: ".2rem", overflow: "hidden" }}>
                                    <img src={handsa} className={classes.yearImg} />
                                </Box>
                                <Stack
                                    padding={2}
                                    spacing={1}
                                    sx={{
                                        boxShadow: "3",
                                        borderRadius: "5px",
                                        width: "80%",
                                        margin: "auto",
                                        position: "absolute",
                                        bottom: "0%",
                                        left: "50%",
                                        zIndex: 555,
                                        bgcolor: "primary.main",
                                        transform: "translate(-50%,45%)",
                                        "&:hover": {
                                            transform: "translate(-50%,45%) scale(1.05)",
                                        },
                                    }}
                                >
                                    <Box>هندسة</Box>
                                    <Box
                                        sx={{
                                            background: "#2dd4bf",
                                            width: "100%",
                                            height: "3px",
                                        }}
                                    ></Box>
                                    <Box>جميع كورسات الصف الثاني الثانوي</Box>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={
                            12} md={4} padding={2} marginBottom={5}>
                            <Box sx={{ width: "100%", position: "relative" }}>
                                <Box sx={{ borderRadius: ".2rem", overflow: "hidden" }}>
                                    <img src={algebra} className={classes.yearImg} />
                                </Box>
                                <Stack
                                    padding={2}
                                    spacing={1}
                                    sx={{
                                        boxShadow: "3",
                                        borderRadius: "5px",
                                        width: "80%",
                                        margin: "auto",
                                        position: "absolute",
                                        bottom: "0%",
                                        left: "50%",
                                        zIndex: 555,
                                        bgcolor: "primary.main",
                                        transform: "translate(-50%,45%)",
                                        "&:hover": {
                                            transform: "translate(-50%,45%) scale(1.05)",
                                        },
                                    }}
                                >
                                    <Box>جبر</Box>
                                    <Box
                                        sx={{
                                            background: "#2dd4bf",
                                            width: "100%",
                                            height: "3px",
                                        }}
                                    ></Box>
                                    <Box>جميع كورسات الصف الثالث الثانوي</Box>
                                </Stack>
                            </Box>
                        </Grid></>}
                </Grid>
            </Container>
        </Box>
    );
}
