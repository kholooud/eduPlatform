import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import TimerTwoToneIcon from "@mui/icons-material/TimerTwoTone";
import VideocamTwoToneIcon from "@mui/icons-material/VideocamTwoTone";


export default function Lecture() {
    return (
        <div>
            <Accordion sx={{ borderRadius: "6px" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        padding: "13px",
                        backgroundColor: "rgb(226 232 240)",
                        borderRadius: "5px",
                    }}
                >
                    <VideocamTwoToneIcon
                        sx={{ color: "#eab308", marginRight: "10px" }}
                    />
                    <Typography
                        variant="h5"
                        fontFamily="inherit"
                        sx={{ color: "black", fontWeight: "bolder" }}
                    >
                        المحاضرة الاولى باب خامس
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        marginTop: "10px",
                        backgroundColor: "white",
                        borderRadius: "5px",
                    }}
                >
                    <Stack>
                        <Box sx={{ display: "flex" }}>
                            <InfoTwoToneIcon
                                sx={{
                                    color: "#f43f5e",
                                    marginRight: "10px",
                                    fontSize: "small",
                                    alignSelf: "center",
                                }}
                            />
                            <Typography fontFamily="inherit" variant="subTitle">
                                الوصف:
                                <Typography
                                    fontFamily="inherit"
                                    color="#6b7280"
                                    display="inline"
                                >
                                    الصف الاول الثانوي
                                </Typography>
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <FormatListNumberedIcon
                                sx={{
                                    color: "#3b82f6",
                                    marginRight: "10px",
                                    fontSize: "small",
                                    alignSelf: "center",
                                }}
                            />
                            <Typography fontFamily="inherit" variant="subTitle">
                                عدد الاسئلة :
                                <Typography
                                    fontFamily="inherit"
                                    color="#6b7280"
                                    display="inline"
                                >
                                    30 سؤال
                                </Typography>
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <TimerTwoToneIcon
                                sx={{
                                    color: "#eab308",
                                    marginRight: "10px",
                                    fontSize: "small",
                                    alignSelf: "center",
                                }}
                            />
                            <Typography fontFamily="inherit" variant="subTitle">
                                الامتحان :
                                <Typography
                                    fontFamily="inherit"
                                    color="#6b7280"
                                    display="inline"
                                >
                                    500دقيقة
                                </Typography>
                            </Typography>
                        </Box>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
