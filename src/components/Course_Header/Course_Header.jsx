import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import CreateNewFolderTwoToneIcon from '@mui/icons-material/CreateNewFolderTwoTone';
import RadioButtonCheckedTwoToneIcon from '@mui/icons-material/RadioButtonCheckedTwoTone';
import ChipDiv from '../ChipDiv/ChipDiv';


export default function Course_Header() {
    return (
        <Container>
            <Grid sx={{ bgcolor: "#3b82f6", borderRadius: "0.5rem", boxSizing: "border-box", zIndex: "55", position: "relative" }}>
                <Box sx={{ padding: "2rem 2rem" }}>
                    <Grid container item sx={{ justifyContent: { md: "left", xs: "space-evenly" }, alignContent: "center", alignItems: "center", flexDirection: "row" }}>
                        <Grid item ><ChipDiv label={"فيديوهات"} data={"+26"} colorBG={"#22d3ee"} /></Grid>
                        <Grid item ><ChipDiv label={"امتحانات"} data={"+26"} colorBG={"#f43f5e"} /></Grid>
                        <Grid item ><ChipDiv label={"واجبات"} data={"+26"} colorBG={"#fde047"} /></Grid>
                        <Grid item ><ChipDiv label={"ملفات"} data={"+26"} colorBG={"#22d3ee"} /></Grid>
                    </Grid>
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
