
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import TimerTwoToneIcon from "@mui/icons-material/TimerTwoTone";
import VideocamTwoToneIcon from "@mui/icons-material/VideocamTwoTone";

export default function Exam_solution() {
    return (
        <div>
            <Accordion sx={{ borderRadius: "6px", marginTop: "1rem !important" }}>
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
                        الواجب
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ marginTop: "5px" }}>
                    <Stack direction={"row"}>
                        <InfoTwoToneIcon
                            sx={{
                                fontSize: "small",
                                color: "#f43f5e",
                                alignSelf: "center",
                                marginRight: "10px",
                            }}
                        />
                        <Typography fontFamily={"inherit"} variant="subTitle">
                            الوصف :
                            <Typography
                                fontFamily={"inherit"}
                                variant="subTitle"
                                color="#6b7280"
                            >
                                الصف الاول الثانوي
                            </Typography>
                        </Typography>
                    </Stack>
                    <Stack direction={"row"}>
                        <TimerTwoToneIcon
                            sx={{
                                fontSize: "small",
                                color: "#eab308",
                                alignSelf: "center",
                                marginRight: "10px",
                            }}
                        />
                        <Typography fontFamily={"inherit"} variant="subTitle">
                            مدة الفيديو :
                            <Typography
                                fontFamily={"inherit"}
                                variant="subTitle"
                                color="#6b7280"
                            >
                                55 دقيقة
                            </Typography>
                        </Typography>
                    </Stack>
                    <Stack direction={"row"}>
                        <GroupTwoToneIcon
                            sx={{
                                fontSize: "small",
                                color: "#eab308",
                                alignSelf: "center",
                                marginRight: "10px",
                            }}
                        />
                        <Typography fontFamily={"inherit"} variant="subTitle">
                            عدد المشاهدات :
                            <Typography
                                fontFamily={"inherit"}
                                variant="subTitle"
                                color="#6b7280"
                            >
                                0
                            </Typography>
                        </Typography>
                    </Stack>
                    <Stack direction={"row"}>
                        <LightModeTwoToneIcon
                            sx={{
                                fontSize: "small",
                                color: "#eab308",
                                alignSelf: "center",
                                marginRight: "10px",
                            }}
                        />
                        <Typography fontFamily={"inherit"} variant="subTitle">
                            اجمالي وقت المشاهدة :
                            <Typography
                                fontFamily={"inherit"}
                                variant="subTitle"
                                color="#6b7280"
                            >
                                0
                            </Typography>
                        </Typography>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
