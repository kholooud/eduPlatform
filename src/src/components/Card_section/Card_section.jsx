import { Container } from '@mui/system';
import React from 'react'
import classes from "../Course_Header/Course_Header";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Stack, Typography } from '@mui/material'
import courseimg from "../../assets/course_content.jpg"
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';

export default function Card_section() {
    return (
        <Container>
            <Box
                sx={{
                    flexGrow: 1, marginTop: "2rem",
                    boxSizing: "border-box",
                    minHeight: "30rem", position: "relative"
                }}>
                <Grid container >
                    <Grid xs={12} md={8}>
                        <Card sx={{ minWidth: { md: "50%", xs: "20%" }, margin: "1rem" }}>
                            <CardMedia
                                component="img"
                                height="50%"
                                image={courseimg}
                            />
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} sx={{ position: { md: "relative" }, marginTop: { md: "-20%" }, zIndex: { md: "100" } }}>
                        <Card sx={{ minWidth: { md: "50%", xs: "20%" }, margin: "1rem", position: "absolute" }}>
                            <CardMedia
                                component="img"
                                height="50%"
                                image={courseimg}
                                sx={{ padding: "1rem", borderRadius: "1.5rem" }}
                            />
                            <CardContent sx={{ textAlign: "center" }}>
                                <Stack direction="row" margin={{ xs: "0 0 0.5rem 0", md: "0 1rem 0 0" }} sx={{ justifyContent: "center" }}>
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
                                        label="150.00"

                                    >
                                    </Chip>
                                    <Chip
                                        sx={{ backgroundColor: "#facc15", fontFamily: "inherit", paddingLeft: "2.5rem", color: "white" }}
                                        label="جنيها"
                                    >
                                    </Chip>
                                </Stack>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "center" }}>
                                <Button className={classes.ButtonHover} sx={{ color: "white", backgroundColor: "#3b82f6", fontFamily: "inherit" }} size="large" variant="outlined">اشترك الأن !</Button>
                            </CardActions>
                            <CardContent>
                                <Stack direction="row" sx={{ marginBottom: "0.5rem" }}>
                                    <AccessTimeTwoToneIcon />
                                    <Typography variant='body2' sx={{ fontFamily: "inherit", marginLeft: "0.5rem" }}>المحتوى</Typography>
                                    <Typography variant='body2' sx={{ fontFamily: "inherit", marginLeft: "auto" }}>+21 ساعة</Typography>
                                </Stack>
                                <Stack direction="row">
                                    <HelpTwoToneIcon />
                                    <Typography variant='body2' sx={{ fontFamily: "inherit", marginLeft: "0.5rem" }}>اجمالي الاسئلة</Typography>
                                    <Typography variant='body2' sx={{ fontFamily: "inherit", marginLeft: "auto" }}>+0 اسئلة</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
