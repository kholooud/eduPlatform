import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import classes from "./Course_Header.module.css";
import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';
import RadioButtonCheckedTwoToneIcon from '@mui/icons-material/RadioButtonCheckedTwoTone';
import courseimg from "../../assets/course_content.jpg"

export default function Course_Header() {
    return (
        <Container>
            <Grid sx={{ bgcolor: "#3b82f6", borderRadius: "0.5rem", boxSizing: "border-box", minHeight: "30rem", zIndex: "55", position: "relative" }}>
                <Box sx={{ padding: "2rem 2rem" }}>
                    <Stack direction="row" >
                        <Chip
                            sx={{ backgroundColor: "#facc15", fontFamily: "inherit", marginTop: "3rem" }}
                            label="فيديوهات"
                        >
                        </Chip>
                    </Stack>
                    <Typography sx={{ color: "white", padding: "1rem" }} variant='h4' fontFamily={'inherit'}>كورس مراجعة طلاب السنتر</Typography>
                    <Typography sx={{ color: "white", padding: "1rem" }} variant='h5' fontFamily={'inherit'}>مراجعة لطلاب السناتر</Typography>
                    <Stack direction="row" >
                        <Stack direction={{ xs: "column", md: "row" }} sx={{ paddingRight: "1rem" }}>
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
                        <Stack direction={{ xs: "column", md: "row" }}>
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
                    <Grid xs={12} md={4} sx={{ backgroundColor: "yellow", position: { md: "relative" }, marginTop: { md: "-20%" }, zIndex: { md: "100" } }}>
                        <Card sx={{ minWidth: { md: "50%", xs: "20%" }, margin: "1rem", position: "absolute" }}>
                            <CardMedia
                                component="img"
                                height="50%"
                                image={courseimg}
                                sx={{ padding: "1rem" }}
                            />
                            <CardContent sx={{ textAlign: "center" }}>
                                <Chip
                                    sx={{ backgroundColor: "#facc15", fontFamily: "inherit", }}
                                    label="200.00">
                                </Chip>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "center" }}>
                                <Button sx={{ color: "white", backgroundColor: "#3b82f6", fontFamily: "inherit" }} size="large" variant="outlined">اشترك الأن !</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </Container >
    )
}
