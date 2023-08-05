import React from 'react'
import classes from "../Course_card/Course_card.module.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardPng from "../../../assets/course_card.jpg"
import { Box } from '@mui/system';
import { Chip, Divider, Grid, Stack } from '@mui/material';
import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';

export default function Course_card() {
    return (
        <div>
            <Box sx={{ margin: "2rem", boxShadow: "none" }}>
                <Card sx={{ maxWidth: 500, marginInline: "auto", boxShadow: "none" }}>
                    <CardMedia
                        component="img"
                        alt="cardimg"
                        height="100%"
                        image={CardPng}
                    />
                    <CardContent sx={{
                        position: "relative",
                        marginTop: "-61px",
                        zIndex: "100",
                        backgroundColor: "white",
                        maxWidth: "95%",
                        right: "-10px",
                        borderRadius: "0.5rem",
                        boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem #6c6969",
                        marginBottom: "25px"
                    }}>
                        <Grid container>
                            <Grid xs={12} md={8} sx={{ display: "flex", flexFlow: "column" }}>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: "inherit", display: "block" }}>
                                    كورس مراجعة طلاب السنتر
                                </Typography>
                                <Box
                                    className={classes.hr}
                                    component="span"
                                    fontFamily="inherit"
                                ></Box>
                                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "inherit", display: "block" }}>
                                    مراجعه لطلاب السناتر
                                </Typography>
                            </Grid>
                            <Grid xs={12} md={4} >
                                <CardActions sx={{ justifyContent: "center", display: "block" }}>
                                    <Button variant="outlined" className={classes.button1} size="small" >الدخول للكورس</Button>
                                    <Button variant="outlined" className={classes.button2} size="small" >اشترك الان</Button>
                                </CardActions>
                            </Grid>
                        </Grid>
                        <Divider variant="middle" />
                        <Grid container>
                            <Grid xs={12} md={6} sx={{ marginTop: "2rem" }} >
                                <Chip label="200" />
                            </Grid>
                            <Grid xs={12} md={6} sx={{ marginTop: "2rem" }}>
                                <Stack direction={"row"} sx={{ float: "right", clear: "both" }}>
                                    <Typography fontSize={"x-small"} sx={{ whiteSpace: "nowrap", fontFamily: "inherit", color: "#7e7e7e" }}>الثلاثاء، ٣٠ مايو ٢٠٢٣</Typography>
                                    <SyncOutlinedIcon sx={{ fontSize: "smaller" }} />
                                </Stack>
                                <Stack direction={"row"} sx={{ float: "right", clear: "both" }}>
                                    <Typography fontSize={"x-small"} sx={{ whiteSpace: "nowrap", fontFamily: "inherit", color: "#7e7e7e" }}>الثلاثاء، ٣٠ مايو ٢٠٢٣</Typography>
                                    <CreateNewFolderTwoToneIcon sx={{ fontSize: "smaller" }} />
                                </Stack>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}