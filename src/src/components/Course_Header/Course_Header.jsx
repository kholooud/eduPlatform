import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import classes from "./Course_Header.module.css";
import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';
import RadioButtonCheckedTwoToneIcon from '@mui/icons-material/RadioButtonCheckedTwoTone';
import courseimg from "../../assets/course_content.jpg"
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import Card_section from '../Card_section/Card_section';

export default function Course_Header() {
    return (
        <Container>
            <Grid sx={{ bgcolor: "#3b82f6", borderRadius: "0.5rem", boxSizing: "border-box", minHeight: "30rem", zIndex: "55", position: "relative" }}>
                <Box sx={{ padding: "2rem 2rem" }}>
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
                                label="فيديوهات"
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
                                label="امتحانات"
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
                                label="واجبات"
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
                                label="ملفات"
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
                                label="كويزات الفيديو"
                            >
                            </Chip>
                        </Stack>
                    </Stack>
                    <Typography sx={{ color: "white", padding: "1rem" }} variant='h4' fontFamily={'inherit'}>كورس مراجعة طلاب السنتر</Typography>
                    <Typography sx={{ color: "white", padding: "1rem" }} variant='subtitle1' fontFamily={'inherit'}>مراجعة لطلاب السناتر</Typography>
                    <Stack direction={{ xs: "column", md: "row" }} >
                        <Stack direction={{ xs: "row" }} sx={{ paddingRight: "1rem" }}>
                            <CreateNewFolderTwoToneIcon
                                sx={{
                                    color: "#facc15",
                                    marginLeft: "0.5rem",
                                    fontSize: "small",
                                    alignSelf: "center",
                                }}
                            />
                            <Typography sx={{ color: "white", padding: "0.5rem" }} variant='body2' fontFamily={'inherit'}>تاريخ انشاء الكورس</Typography>
                            <Chip sx={{ backgroundColor: "#facc15", fontFamily: "inherit" }} label="الاثنين، ١٥ مايو ٢٠٢٣" />
                        </Stack>
                        <Stack direction={{ xs: "row" }}>
                            <RadioButtonCheckedTwoToneIcon
                                sx={{
                                    color: "#fb7185",
                                    marginLeft: "0.5rem",
                                    fontSize: "small",
                                    alignSelf: "center",
                                }}
                            />
                            <Typography sx={{ color: "white", padding: "0.5rem" }} variant='body2' fontFamily={'inherit'}>آخر تحديث للكورس</Typography>
                            <Chip sx={{ backgroundColor: "#fb7185", fontFamily: "inherit" }} label="الثلاثاء، ٣٠ مايو ٢٠٢٣" />
                        </Stack>
                    </Stack>
                </Box>
            </Grid>
          
        </Container >
    )
}
