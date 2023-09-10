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
import classes from "../Week/Week";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import Lecture from "./Lecture/Lecture";
import Quiz from "../Week/Quiz/Quiz";
import HomeWork from "./HomeWork/HomeWork";



export default function Week() {
    return (
        <Box sx={{ marginTop: "1rem !important" }}>
            <Accordion sx={{ my: 2, padding: 2 }}>
                <AccordionSummary
                    sx={{ borderRadius: "0.3rem", padding: "0.5rem" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
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
                            الاسبوع الاول{" "}
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
                        borderRadius: "10px",
                        marginTop: "25px"
                    }}
                >
                    <Box>
                        {<Lecture />}
                        {<HomeWork />}
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
