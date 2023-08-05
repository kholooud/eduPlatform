
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import Exam_result from "../Exam/Exam_result/Exam_result"
import Exam_solution from "./Exam_solution/Exam_solution";

export default function Exam() {
    return (
        <Box bgColor={"white"}>
            <Accordion sx={{ my: 2, padding: 2, borderRadius: "6px" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ borderRadius: "0.3rem", padding: "0.5rem" }}
                >
                    <DashboardCustomizeOutlinedIcon
                        color="#f43f5e"
                        sx={{
                            fontSize: "xxx-large",
                            alignSelf: "center",
                            marginRight: "20px",
                            Color: "#f43f5e",
                        }}
                    />
                    <Box display="block">
                        <Typography
                            variant="h4"
                            fontFamily="inherit"
                            fontWeight="bolder"
                        >
                            امتحان
                        </Typography>
                        <Typography variant="h6" fontFamily="inherit" color="#6b7280">
                            1ث
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        padding: "14px",
                        backgroundColor: "#f3f4f6",
                        marginTop: "20px",
                        borderRadius: "10px",
                    }}
                >
                    <Box>
                        {<Exam_result />}
                        {<Exam_solution />}

                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
