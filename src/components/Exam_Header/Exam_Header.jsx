import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';
import RadioButtonCheckedTwoToneIcon from '@mui/icons-material/RadioButtonCheckedTwoTone';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';


export default function Course_Header() {
    return (
        <Container>
            <Grid sx={{ bgcolor: "#3b82f6", borderRadius: "0.5rem", boxSizing: "border-box", minHeight: "18rem", zIndex: "55", position: "relative" }}>
                <Box sx={{ padding: "2rem 2rem" }}>
                    <Typography sx={{ color: "white", padding: "1rem", textAlign: "center" }} variant='h4' fontFamily={'inherit'}>إمتحان على مادة الجبر</Typography>
                    <Stack direction={{ xs: "column", md: "row" }} margin={{ md: "3rem 0 1rem 0", xs: "1.5rem 0 0.5rem 0" }} >
                        <Stack direction="row" margin={{ xs: "0 0 0.5rem 0", md: "0 1rem 0 0" }}>
                            <Chip
                                sx={{
                                    backgroundColor: "#1e3a8a",
                                    fontFamily: "inherit",
                                    marginRight: "-2.8rem",
                                    zIndex: "100",
                                    color: "white",
                                    padding: "0.3rem"
                                }}
                                icon={<VideoLibraryIcon sx={{ color: "#fde047 !important", fontSize: "medium" }} />}
                                label="26+"

                            >
                            </Chip>
                            <Chip
                                sx={{ backgroundColor: "#22d3ee", fontFamily: "inherit", paddingLeft: "2.5rem", color: "white" }}
                                label="مدة الإمتحان"
                            >
                            </Chip>
                        </Stack>
                        <Stack direction="row" margin={{ xs: "0 0 0.5rem 0", md: "0 1rem 0 0" }}>
                            <Chip
                                sx={{
                                    backgroundColor: "#1e3a8a",
                                    fontFamily: "inherit",
                                    marginRight: "-2.8rem",
                                    zIndex: "100",
                                    color: "white",
                                    padding: "0.3rem"
                                }}
                                icon={<VideoLibraryIcon sx={{ color: "#fde047 !important", fontSize: "medium" }} />}
                                label="26+"

                            >
                            </Chip>
                            <Chip
                                sx={{ backgroundColor: "#f43f5e", fontFamily: "inherit", paddingLeft: "2.5rem", color: "white" }}
                                label="وقت البدء"
                            >
                            </Chip>
                        </Stack>
                        <Stack direction="row" margin={{ xs: "0 0 0.5rem 0", md: "0 1rem 0 0" }}>
                            <Chip
                                sx={{
                                    backgroundColor: "#1e3a8a",
                                    fontFamily: "inherit",
                                    marginRight: "-2.8rem",
                                    zIndex: "100",
                                    color: "white",
                                    padding: "0.3rem"
                                }}
                                icon={<VideoLibraryIcon sx={{ color: "#fde047 !important", fontSize: "medium" }} />}
                                label="26+"

                            >
                            </Chip>
                            <Chip
                                sx={{ backgroundColor: "#fde047", fontFamily: "inherit", paddingLeft: "2.5rem", color: "white" }}
                                label="عدد الأسئلة"
                            >
                            </Chip>
                        </Stack>
                        <Stack direction="row" margin={{ xs: "0 0 0.5rem 0", md: "0 1rem 0 0" }}>
                            <Chip
                                sx={{
                                    backgroundColor: "#1e3a8a",
                                    fontFamily: "inherit",
                                    marginRight: "-2.8rem",
                                    zIndex: "100",
                                    color: "white",
                                    padding: "0.3rem"
                                }}
                                icon={<VideoLibraryIcon sx={{ color: "#fde047 !important", fontSize: "medium" }} />}
                                label="26+"

                            >
                            </Chip>
                            <Chip
                                sx={{ backgroundColor: "#22d3ee", fontFamily: "inherit", paddingLeft: "2.5rem", color: "white" }}
                                label="الدرجات"
                            >
                            </Chip>
                        </Stack>
                    </Stack>
                </Box>
            </Grid>

        </Container >
    )
}
