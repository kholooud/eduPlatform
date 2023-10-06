import { CircularProgress, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ChipDiv from "../../components/ChipDiv/ChipDiv";
import Question from "../../components/Question/Question";
import { getExam, submitExamAnswers } from "../../API/StudentServices";
import { UserContext } from "../../context/UserContext";
import {  useParams } from "react-router-dom";

export default function Exam() {
  const [examDetails, setexamDetails] = useState({});
  const [examQues, setexamQues] = useState([]);
  const [queAnsObj, setqueAnsObj] = useState({});
  const { userToken } = useContext(UserContext);
  let { examID } = useParams();


  const submitExam = () => {
    console.log("queAnsObj", queAnsObj);
    submitExamAnswers(userToken, { 'exam_id': examID, 'answers': queAnsObj })
  };

  const getExamData = async () => {
    let res = await getExam(examID, userToken);
    console.log("get data", res);
    setexamDetails(res);
    setexamQues(res.questions);
  };


  useEffect(() => {
    getExamData();
  }, []);


  useEffect(() => {
    setqueAnsObj(() => {
      let answers = {};
      examQues.map((que) => {
        let a = {};
        a[`${que.id}`] = '-1';
        answers = { ...answers, ...a };
      });
      return answers;
    });
  }, [examQues]);
  // to show only

  useEffect(() => {
    console.log("object", queAnsObj);
  }, [queAnsObj]);

  return (
    <div>
      <Grid
        container
        sx={{
          minHeight: "15rem",
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          bgcolor: "#3b82f6",
          borderRadius: "0.5rem",
          boxSizing: "border-box",
        }}
      >
        <Typography
          item
          graphy
          sx={{
            color: "white",
            padding: "1rem",
            textAlign: "center",
            fontFamily: "inherit",
            width: "100%",
          }}
          variant="h4"
        >
          إمتحان على مادة الجبر
        </Typography>
        <Grid
          container
          item
          sx={{
            justifyContent: { md: "center", xs: "space-evenly" },
            alignContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Grid item>
            <ChipDiv label={"الدرجات"} data={examDetails.full_mark} colorBG={"#b424cd"} />
          </Grid>
          <Grid item>
            <ChipDiv label={"عدد الاسئلة"} data={examDetails.question_count} colorBG={"#4724cd"} />
          </Grid>
          <Grid item>
            <ChipDiv label={"مدة الامتحان"} data={"2H"} colorBG={"#22d3ee"} />
          </Grid>
          <Grid item>
            <ChipDiv
              label={"وقت البدء"}
              data={examDetails.exam_date_start}
              colorBG={"#f43f5e"}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          sx={{
            justifyContent: { md: "center", xs: "space-evenly" },
            alignContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Grid
            item
            onClick={() => {
              submitExam();
            }}
          >
            <ChipDiv label={"تسليم"} data={"100"} colorBG={"#b424cd"} />
          </Grid>

        </Grid>
      </Grid>
      {examQues.length > 0 ? (
        examQues.map((e) => {
          return (
            <Question
              key={e.id}
              id={e.id}
              imgPath={e.image_path}
              setqueAnsObj={setqueAnsObj}
            />
          );
        })
      ) : (
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: 7,
            padding: 1,
            marginY: 2,
            borderRadius: "5px",
            minHeight: '9rem'
          }}
        >
          <CircularProgress color="secondary" />
        </Grid>
      )}
    </div>
  );
}
