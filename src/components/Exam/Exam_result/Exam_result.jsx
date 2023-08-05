import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import classes from "../Exam_result/Exam_result.module.css"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import TimerTwoToneIcon from "@mui/icons-material/TimerTwoTone";


export default function Exam_result() {
    return (
        <div>
            <Accordion sx={{ borderRadius: "6px", marginTop: "10px" }}>
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
                    <QuizOutlinedIcon
                        sx={{ color: "#2dd4bf", marginRight: "10px" }}
                    />
                    <Typography
                        variant="h5"
                        fontFamily="inherit"
                        sx={{ color: "black", fontWeight: "bolder" }}
                    >
                        امتحان أ على الباب الرابع
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ marginTop: "5px" }}>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        sx={{ marginBottom: 1 }}
                    >
                        <Stack direction="row" sx={{ marginRight: 2 }}>
                            <Box
                                className={classes.dot}
                                sx={{ backgroundColor: "#eab308", marginRight: 1 }}
                            ></Box>
                            <Typography>اقل نتيجة لك : 0 %</Typography>
                        </Stack>
                        <Stack direction="row" sx={{ marginRight: 2 }}>
                            <Box
                                className={classes.dot}
                                sx={{ backgroundColor: "#f43f5e", marginRight: 1 }}
                            ></Box>
                            <Typography>متوسط نتائجك : 0 %</Typography>
                        </Stack>
                        <Stack direction="row" sx={{ marginRight: 2 }}>
                            <Box
                                className={classes.dot}
                                sx={{ backgroundColor: "#3b82f6", marginRight: 1 }}
                            ></Box>
                            <Typography>اعلى نتيجة لك : 0 %</Typography>
                        </Stack>
                    </Stack>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        sx={{ marginBottom: 1 }}
                    >
                        <Typography fontFamily="inherit" variant="subTitle">
                            - عدد مرات دخولك :
                            <Typography
                                fontFamily="inherit"
                                variant="subTitle"
                                color="#6b7280"
                            >
                                {" "}
                                0
                            </Typography>
                        </Typography>
                        <Typography
                            fontFamily="inherit"
                            variant="subTitle"
                            sx={{ marginRight: 1 }}
                        >
                            - عدد مرات انهائك :
                            <Typography
                                fontFamily="inherit"
                                variant="subTitle"
                                color="#6b7280"
                            >
                                {" "}
                                0
                            </Typography>
                        </Typography>
                    </Stack>
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






