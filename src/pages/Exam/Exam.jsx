import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ChipDiv from "../../components/ChipDiv/ChipDiv";
import Question from "../../components/Question/Question";
import { getExam, submitExamAnswers } from "../../API/StudentServices";
import { UserContext } from "../../context/UserContext";
import { useParams } from "react-router-dom";
import TimerTwoToneIcon from "@mui/icons-material/TimerTwoTone";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import Countdown from "react-countdown";

export default function Exam() {
  const [examDetails, setexamDetails] = useState({});
  const { userToken } = useContext(UserContext);
  let { examID } = useParams();

  const getExamData = async () => {
    let res = await getExam(examID, userToken);
    console.log("get data", res);
    setexamDetails(res);
  };

  useEffect(() => {
    getExamData();
  }, []);

  return !examDetails.status ? (
    <Loader />
  ) : (
    <>
      {examDetails.status == "pending" ? (
        <ExamPending
          startDate={examDetails.exam_date_start}
          getExamData={getExamData}
        />
      ) : (
        ""
      )}
      {examDetails.status == "entered" ? (
        <ExamEntered
          examDetails={examDetails}
          userToken={userToken}
          examID={examID}
          getExamData={getExamData}
        />
      ) : (
        ""
      )}
      {examDetails.status == "completed" ? "" : ""}
      {examDetails.status == "submited" ? <ExamSubmited /> : ""}
    </>
  );
}
function ExamEntered({ examDetails, userToken, examID, getExamData }) {
  const [examQues, setexamQues] = useState(
    examDetails.questions ? examDetails.questions : []
  );
  const [queAnsObj, setqueAnsObj] = useState({});

  const submitExam = () => {
    console.log("queAnsObj", queAnsObj);
    submitExamAnswers(userToken, { exam_id: examID, answers: queAnsObj });
    getExamData();
  };

  useEffect(() => {
    setqueAnsObj(() => {
      let answers = {};
      examQues.map((que) => {
        let a = {};
        a[`${que.id}`] = "-1";
        answers = { ...answers, ...a };
      });
      return answers;
    });
  }, [examQues]);

  // to show only
  useEffect(() => {
    console.log("examDetails", examDetails);
    console.log("queAnsObj", queAnsObj);
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
            <ChipDiv
              label={"الدرجات"}
              data={examDetails.full_mark}
              colorBG={"#b424cd"}
            />
          </Grid>
          <Grid item>
            <ChipDiv
              label={"عدد الاسئلة"}
              data={examDetails.question_count}
              colorBG={"#4724cd"}
            />
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
        <Loader />
      )}
    </div>
  );
}
function ExamPending({ startDate, getExamData }) {
  const ll = new Date(startDate);
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      getExamData();
    } else {
      // Render a countdown
      return (
        <span>
          {String(days).padStart(2, "0")} يوم
          <br />
          {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </span>
      );
    }
  };

  return (
    <Grid container sx={{ justifyContent: "center", padding: "2rem" }}>
      <Card sx={{ minWidth: { md: "50%", xs: "20%" }, padding: "2rem" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <TimerTwoToneIcon sx={{ color: "#f43f5d" }} />
          <Box>باقي على الإمتحان</Box>
          <Countdown
            sx={{ fontWeight: "bold" }}
            date={ll}
            // renderer={calcTimeDelta}
            renderer={renderer}
          />
        </CardContent>
      </Card>
    </Grid>
  );
}
function ExamSubmited() {
  return (
    <Grid container sx={{ justifyContent: "center", padding: "2rem" }}>
      <Card sx={{ minWidth: { md: "50%", xs: "20%" }, padding: "2rem" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <ChecklistRtlIcon sx={{ color: "#f43f5d" }} />
          <Box>تم تسليم الامتحان انتظر النتيجة ...</Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

function Loader() {
  return (
    // <Grid
    //   sx={{
    //     display: "flex",
    //     // justifyContent: "center",
    //     // alignItems: "center",
    //     // boxShadow: 7,
    //     padding: 1,
    //     marginY: 2,
    //     // borderRadius: "5px",
    //     // minHeight: "9rem",
    //     // width: "100%",
    //   }}
    // >
    <CircularProgress color="secondary" />
    // </Grid>
  );
}
