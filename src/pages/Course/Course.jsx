import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSubject } from "../../API/StudentServices";
import Course_Content from "../../components/Course_Content/Course_Content";
import Course_Header from "../../components/Course_Header/Course_Header";
import { UserContext } from "../../context/UserContext";
import classes from "./Course.module.css";
import { HandleErrorContext } from "../../context/HandleErrorContext";

const subjectCode = {
  algebra: { code: 1, des: "جبر" },
  Trigonometry: { code: 2, des: "حساب مثلثات" },
  geometry: { code: 3, des: "هندسة" },
  vacummetry: { code: 4, des: "هندسة فراغية" },
  calculus: { code: 5, des: "تفاضل" },
  calculusInt: { code: 6, des: "تفاضل و تكامل" },
  static: { code: 7, des: "استاتيكا" },
  dynamic: { code: 8, des: "ديناميكا" },
  statistics: { code: 9, des: "احصاء" },
  probability: { code: 10, des: "احتمال" },
};

export default function Course() {
  let { CourseId } = useParams();
  const [Lessons, setLesson] = useState(null);
  const { userToken } = useContext(UserContext);
  const { notify } = useContext(HandleErrorContext);
  const getSubjectData = async () => {
    let res = await getSubject(subjectCode[CourseId].code, userToken);
    if (res.status == 200) {
      return setLesson(res.data.body);
    }
    notify("حدث خطا اعاد محاولة مره اخري");
  };

  useEffect(() => {
    getSubjectData();
  }, []);

  return (
    <Container>
      <Course_Header title={subjectCode[CourseId].des} />
      <Grid
        sx={{
          boxShadow: 7,
          borderRadius: ".5rem",
          backgroundColor: "#f3f4f6",
          marginY: "1rem",
          padding: "1rem",
        }}
      >
        <Grid item sx={{ display: "grid" }}>
          <Box component="span" className={classes.hr1}></Box>
          <Typography
            item
            sx={{
              fontWeight: "bolder",
              fontFamily: "inherit",
              paddingY: "1rem",
              color: "black",
            }}
            variant="h3"
          >
            محتوى
            <Typography variant="span" color="#f43f5e">
              {" "}
              الكورس
            </Typography>
          </Typography>
          <Box component="span" className={classes.hr1} width={"9%"}></Box>
          <Box component="span" className={classes.hr1}></Box>
        </Grid>
        <Grid container>
          {Lessons != null ? (
            Lessons.length > 0 ? (
              Lessons.map((ele, index) => {
                return <Course_Content lesson={ele} key={index} />;
              })
            ) : (
              <Grid
                sx={{
                  minWidth: "100%",
                  minHeight: "15rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ color: "black" }}>لا يوجد دروس في هذا الفرع</Box>
              </Grid>
            )
          ) : (
            <Grid
              sx={{
                minWidth: "100%",
                minHeight: "15rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress color="secondary" />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
