import React from 'react'
import { Box, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import classes from '../Years.module.css'


export default function Year({ele}) {

  return (
    <>
      <Grid key={ele.id} item xs={12} md={4} padding={2} marginBottom={5} paddingBottom={"2rem"}>
        <Link to={ele.path}>
          <Box sx={{ width: "100%", position: "relative" }}>
            <Box sx={{ borderRadius: ".2rem", overflow: "hidden" }}>
              <img src={ele.imgSrc} className={classes.yearImg} />
            </Box>
            <Stack
              padding={2}
              spacing={1}
              sx={{
                boxShadow: "3",
                borderRadius: "5px",
                width: "80%",
                margin: "auto",
                position: "absolute",
                bottom: "0%",
                left: "50%",
                bgcolor: "primary.main",
                zIndex: 555,
                transform: "translate(-50%,45%)",
                "&:hover": {
                  transform: "translate(-50%,45%) scale(1.05)",
                },
              }}
            >
              <Box>{ele.title}</Box>
              <Box
                sx={{
                  background: "#2dd4bf",
                  width: "100%",
                  height: "3px",
                }}
              ></Box>
              <Box>{ele.description}</Box>
            </Stack>
          </Box>
        </Link>
      </Grid>

    </>
  )
}
function mappingResSubject(item, typeCode) {
  let mappingCodeType = {
    'lessons': "subject_code",
    'exams': "subject_code",
    'students': 'semester_code',
    'questions': "subject_code"
  }
  let mappingReq = {
    "الصف الأول الثانوي": "1",
    "الصف الثاني الثانوي": "2",
    "الصف الثالث الثانوي": "3",
    "الفصل الدراسي الأول": "1",
    "الفصل الدراسي الثاني": "2",
    "عام": "0",
    "علمي": "1",
    "أدبي": "2",
    "جبر": "1",
    "حساب مثلثات": "2",
    "هندسة": "3",
    "هندسة فراغية": "4",
    "تفاضل": "5",
    "تفاضل و تكامل": "6",
    "استاتيكا": "7",
    "ديناميكا": "8",
    "احتمال": "9",
    "احصاء": "10"
  }
  let mappingYears = {
    1: "الصف الأول الثانوي",
    2: "الصف الثاني الثانوي",
    3: "الصف الثالث الثانوي",
  };
  let mappingSemester = {
    0: "disbaled",
    1: "الصف الدراسي الأول",
    2: "الصف الدراسي الثاني",
  };
  let mappingTypes = {
    0: "عام",
    1: "علمي",
    2: "أدبي",
  };
  let mappingSubjects = {
    1: "جبر",
    2: "حساب مثلثات",
    3: "هندسة",
    4: "هندسة فراغية",
    5: "تفاضل",
    6: "تفاضل و تكامل",
    7: "استاتيكا",
    8: "ديناميكا",
    9: "احتمال",
    10: "احصاء",
  };

  if (!typeCode) {

    return mappingReq[item];

  }
  let codeAfterSplit = item[mappingCodeType[typeCode]].split("-");
  return {
    year: mappingYears[codeAfterSplit[0]],
    semester: mappingSemester[codeAfterSplit[1]],
    type: mappingTypes[codeAfterSplit[2]],
    subject: mappingSubjects[codeAfterSplit[3]],
  };

}