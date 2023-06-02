import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Skeleton,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import classes from "./Course_Content.module.css";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import TimerTwoToneIcon from "@mui/icons-material/TimerTwoTone";
import VideocamTwoToneIcon from "@mui/icons-material/VideocamTwoTone";
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";

export default function Course_Content() {
  return (
    <Container
      sx={{ boxShadow: 7, borderRadius: "16px", backgroundColor: "#f3f4f6" }}
      p={2}
      m={2}
    >
      <Grid Container my={4} py={4}>
        <Grid item py={2} sx={{ display: "grid" }}>
          <Box
            component="span"
            className={classes.hr}
            width={"6%"}
            fontFamily="inherit"
          ></Box>
          <Typography
            item
            fontWeight="bolder"
            fontFamily={"inherit"}
            py={1}
            variant="h3"
          >
            محتوى
            <Typography variant="span" color="#f43f5e">
              {" "}
              الكورس
            </Typography>
          </Typography>
          <Box component="span" className={classes.hr} width={"9%"}></Box>
          <Box component="span" className={classes.hr} width={"6%"}></Box>
        </Grid>
        <Box>
          <Box bgColor={"white"}>
            <Accordion sx={{ my: 2, padding: 2, borderRadius: "6px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: "#ffe4e6",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              >
                <DashboardCustomizeOutlinedIcon
                  color="#f43f5e"
                  sx={{
                    fontSize: "large",
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
                  <Accordion sx={{ borderRadius: "6px", marginTop: "10px" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{ padding: "13px" }}
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
                  <Accordion sx={{ borderRadius: "6px", marginTop: "10px" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{ padding: "13px" }}
                    >
                      <VideocamTwoToneIcon
                        sx={{ color: "#eab308", marginRight: "10px" }}
                      />
                      <Typography
                        variant="h5"
                        fontFamily="inherit"
                        sx={{ color: "black", fontWeight: "bolder" }}
                      >
                        حل امتحان على الباب الرابع
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
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion sx={{ my: 2, padding: 2 }}>
              <AccordionSummary 
                className={classes.accordionHeadMain}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <DashboardCustomizeOutlinedIcon
                  color="#f43f5e"
                  sx={{
                    fontSize: "large",
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
                  marginTop:"25px"
                }}
              >
                <Box>
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
                  {/* <Accordion sx={{ borderRadius: "6px", marginTop: "10px" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{ padding: "13px" }}
                    >
                      <VideocamTwoToneIcon
                        sx={{ color: "#eab308", marginRight: "10px" }}
                      />
                      <Typography
                        variant="h5"
                        fontFamily="inherit"
                        sx={{ color: "black", fontWeight: "bolder" }}
                      >
                        حل امتحان على الباب الرابع
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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
                  </Accordion> */}
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}
