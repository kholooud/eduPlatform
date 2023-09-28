import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Grid, Stack } from "@mui/material";
import classes from "../Years.module.css";
import year1 from "../../../assets/year1.jpeg";
import year2 from "../../../assets/year2.jpeg";
import year3 from "../../../assets/year3.jpeg";
import algebra from "../../../assets/algebra.jpg";
import handsa from "../../../assets/engineering.jpg";
import Trigonometry from "../../../assets/Trigonometry.jpg";
import { isAuthenticated } from '../../../API/AuthService';
import { Lesson } from '../../../API/subjects';
import { UserContext } from "../../../context/UserContext"
import { Link } from "react-router-dom";

const year_data = [
  {
    id: 1,
    title: "الصف الأول الثانوي",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: year1,
  },
  {
    id: 2,
    title: "الصف الثاني الثانوي",
    description: "جميع كورسات الصف الثاني الثانوي",
    imgSrc: year2,
  },
  {
    id: 3,
    title: "الصف الثالث الثانوي",
    description: "جميع كورسات الصف الثالث الثانوي",
    imgSrc: year3,
  }]

const subjects = [
  {
    id: "1",
    semester_code: '1-1-0',
    title: "حساب مثلثات",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: algebra,
  },
  {
    id: "2",
    semester_code: '1-1-0',
    title: "هندسة",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: handsa,
  },
  {
    id: "3",
    semester_code: '1-1-0',
    title: "جبر",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: Trigonometry,
  },
  {
    id: "4",
    semester_code: '2-1-1',
    title: "جبر(بحته)",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: Trigonometry,
  },
  {
    id: "5",
    semester_code: '2-1-1',
    title: "تفاضل(بحته)",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: algebra,
  },
  {
    id: "6",
    semester_code: '2-1-1',
    title: "حساب مثلثات(بحته)",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: algebra,
  },
  {
    id: "7",
    semester_code: '2-1-1',
    title: "استاتيكا(تطبيقيه)",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: algebra,
  },
  {
    id: "8",
    semester_code: '2-1-1',
    title: "فراغيه(تطبيقيه)",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: algebra,
  },
  {
    id: "9",
    semester_code: '2-2-1',
    title: "جبر(بحته)",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: Trigonometry,
  },
  {
    id: "10",
    semester_code: '2-2-1',
    title: "تفاضل(بحته)",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: algebra,
  },
  {
    id: "11",
    semester_code: '2-2-1',
    title: "حساب مثلثات(بحته)",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: algebra,
  },
  {
    id: "12",
    semester_code: '2-2-1',
    title: "ديناميكا(تطبيقيه)",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: algebra,
  }, {
    id: "13",
    semester_code: '2-2-1',
    title: "إحتمال(تطبيقيه)",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: algebra,
  },
  {
    id: "14",
    semester_code: '3-0-0',
    title: "إستاتيكا",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: algebra,
  },
  {
    id: "15",
    semester_code: '3-0-0',
    title: "ديناميكا",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: algebra,
  },
  {
    id: "16",
    semester_code: '3-0-0',
    title: "جبر",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: Trigonometry,
  },
  {
    id: "17",
    semester_code: '3-0-0',
    title: "هندسه فراغيه",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: handsa,
  },
  {
    id: "18",
    semester_code: '3-0-0',
    title: "تفاضل وتكامل",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: algebra,
  },
  {
    id: "19",
    semester_code: '3-0-0',
    title: "إحصاء",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: algebra,
  },
]

export function mappingResSubject(item, typeCode) {
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



export default function Year() {
  const [isAuth, setisAuth] = useState(isAuthenticated())
  const { currentUser } = useContext(UserContext);
  const [year, setYear] = useState(Lesson())

  // useEffect(() => {
  // Lesson().then(
  //   (res) => {
  //     res.map((item) => {
  //       let codeSnipt = mappingResSubject(item, 'lessons');
  //       item["year"] = codeSnipt.year;
  //       item["semester"] = codeSnipt.semester;
  //       item["type"] = codeSnipt.type;
  //       item["subject"] = codeSnipt.subject;
  //       console.log(item)
  //       return item;
  //     })


  //     setYear(item)

  //   }
  // ).catch()
  // }, [])

  useEffect(() => {
  }, [currentUser])

  return (
    <>
      {isAuth && currentUser ?
        subjects.map(e => {
          return (
            e.semester_code == currentUser.semester_code ?
              <Grid key={e.id} item xs={12} md={4} padding={2} marginBottom={5} paddingBottom={"2rem"}>
                <Link to='/#'>
                <Box sx={{ width: "100%", position: "relative" }}>
                  <Box sx={{ borderRadius: ".2rem", overflow: "hidden" }}>
                    <img src={e.imgSrc} className={classes.yearImg} />
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
                    <Box>{e.title}</Box>
                    <Box
                      sx={{
                        background: "#2dd4bf",
                        width: "100%",
                        height: "3px",
                      }}
                    ></Box>
                    <Box>{e.description}</Box>
                  </Stack>
                </Box>
                </Link>
              </Grid>
              : "")
        }) :
        year_data.map((e) => (
          <Grid key={e.id} item xs={12} md={4} padding={2} marginBottom={2} paddingBottom={"2rem"}>
            <Link to='/#'>
            <Box sx={{ width: "100%", position: "relative" }}>
              <Box sx={{ borderRadius: ".2rem", overflow: "hidden" }}>
                <img src={e.imgSrc} className={classes.yearImg} />
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
                <Box>{e.title}</Box>
                <Box
                  sx={{
                    background: "#2dd4bf",
                    width: "100%",
                    height: "3px",
                  }}
                ></Box>
                <Box>{e.description}</Box>
              </Stack>
            </Box>
            </Link>
          </Grid>

        ))
      }
    </>
  )
}
