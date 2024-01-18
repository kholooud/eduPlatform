import React, { useContext, useState } from "react";
import classes from "./Years.module.css";
import { Box, Container, Grid } from "@mui/material";
import bag from "../../assets/bag.svg";
import Year from "./Year/Year";
import { isAuthenticated } from "../../API/AuthService";
import { UserContext } from "../../context/UserContext";
import year1 from "../../assets/year1.jpeg";
import year2 from "../../assets/year2.jpeg";
import year3 from "../../assets/year3.jpeg";
import algebra from "../../assets/algebra.jpg";
import handsa from "../../assets/engineering.jpg";
import Trigonometry from "../../assets/Trigonometry.jpg";
import statistics from "../../assets/statistics.avif";
import geometry from "../../assets/geometry.jpg";
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
    path: '/Course/Trigonometry'
  },
  {
    id: "2",
    semester_code: '1-1-0',
    title: "هندسة",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: handsa,
    path: '/Course/geometry'
  },
  {
    id: "3",
    semester_code: '1-1-0',
    title: "جبر",
    description: "جميع كورسات الصف الاول الثانوي",
    imgSrc: Trigonometry,
    path: '/Course/algebra'
  },
  {
    id: "4",
    semester_code: '2-1-1',
    title: "جبر(بحته)",
    description: "جميع كورسات الصف الثاني الثانوي",
    imgSrc: Trigonometry,
    path: '/Course/algebra'
  },
  {
    id: "5",
    semester_code: '2-1-1',
    title: "تفاضل(بحته)",
    description: "جميع كورسات الصف الثاني الثانوي",
    imgSrc: algebra,
    path: '/Course/calculus'
  },
  {
    id: "6",
    semester_code: '2-1-1',
    title: "حساب مثلثات(بحته)",
    description: "جميع كورسات الصف الثاني الثانوي",
    imgSrc: algebra,
    path: '/Course/Trigonometry'
  },
  {
    id: "7",
    semester_code: '2-1-1',
    title: "استاتيكا(تطبيقيه)",
    description: "جميع كورسات الصف الثاني الثانوي",
    imgSrc: algebra,
    path: '/Course/static'
  },
  {
    id: "8",
    semester_code: '2-1-1',
    title: "هندسة فراغيه(تطبيقيه)",
    description: "جميع كورسات الصف الثاني الثانوي",
    imgSrc: algebra,
    path: '/Course/vacummetry'
  },
  {
    id: "9",
    semester_code: '2-2-1',
    title: "جبر(بحته)",
    description: "جميع كورسات الصف الثاني الثانوي",
    imgSrc: Trigonometry,
    path: '/Course/algebra'
  },
  {
    id: "10",
    semester_code: '2-2-1',
    title: "تفاضل(بحته)",
    description: "جميع كورسات الصف الثاني الثانوي",
    imgSrc: algebra,
    path: '/Course/calculus'
  },
  {
    id: "11",
    semester_code: '2-2-1',
    title: "حساب مثلثات(بحته)",
    description: "جميع كورسات الصف الثاني الثانوي",
    imgSrc: algebra,
    path: '/Course/Trigonometry'
  },
  {
    id: "12",
    semester_code: '2-2-1',
    title: "ديناميكا(تطبيقيه)",
    description: "جميع كورسات الصف الثاني الثانوي",
    imgSrc: algebra,
    path: '/Course/dynamic'
  }, {
    id: "13",
    semester_code: '2-2-1',
    title: "إحتمال(تطبيقيه)",
    description: "جميع كورسات الصف الثاني الثانوي",
    imgSrc: algebra,
    path: '/Course/probability'
  },
  {
    id: "14",
    semester_code: '3-0-0',
    title: "إستاتيكا",
    description: "جميع كورسات الصف الثالث الثانوي",
    imgSrc: algebra,
    path: '/Course/static'
  },
  {
    id: "15",
    semester_code: '3-0-0',
    title: "ديناميكا",
    description: "جميع كورسات الصف الثالث الثانوي",
    imgSrc: algebra,
    path: '/Course/dynamic'
  },
  {
    id: "16",
    semester_code: '3-0-0',
    title: "جبر",
    description: "جميع كورسات الصف الثالث الثانوي",
    imgSrc: Trigonometry,
    path: '/Course/algebra'
  },
  {
    id: "17",
    semester_code: '3-0-0',
    title: "هندسه فراغيه",
    description: "جميع كورسات الصف الثالث الثانوي",
    imgSrc: geometry,
    path: '/Course/geometry'
  },
  {
    id: "18",
    semester_code: '3-0-0',
    title: "تفاضل وتكامل",
    description: "جميع كورسات الصف الثالث الثانوي",
    imgSrc: algebra,
    path: '/Course/calculusInt'

  },
  {
    id: "19",
    semester_code: '3-0-0',
    title: "إحصاء",
    description: "جميع كورسات الصف الثالث الثانوي",
    imgSrc: statistics,
    path: '/Course/statistics'
  },
]


export default function Years() {
  const [isAuth, setisAuth] = useState(isAuthenticated())
  const { currentUser } = useContext(UserContext);


  return (
    <Box
      bgcolor={"#fde047"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ paddingY: "3rem", marginY: "3rem", overflow: "hidden" }}
    >
      <Box className={classes.x}>
        الصفوف الدارسية
        <img src={bag} />
      </Box>
      <Container>
        <Grid
          container
          sx={{
            bgcolor: "white",
            borderRadius: ".2rem",
            boxSizing: "border-box",
            minHeight: "18rem",
            zIndex: "55",
            position: "relative"
          }}
        >
          <>
            {isAuth && currentUser ?
              subjects.map((e, index) => {
                return (
                  e.semester_code == currentUser.semester_code ?
                    <Year ele={e} key={index} />
                    : "")
              }) :
              year_data.map((e, index) => (
                <Year ele={e} key={index} />
              ))
            }
          </>
        </Grid>
      </Container>
    </Box>
  );
}
