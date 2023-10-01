import React, { useContext, useEffect, useState } from "react";
import Table from "../../../../components/Table/Table";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import { getAllExam } from "../../../../API/StudentServices";
import { Button } from "@mui/material";

const columns = [
  {
    field: "rowId",
    headerName: "",
    width: 50,
    align: "center",
  },
  {
    field: "exam_name",
    headerName: "الامتحان",
    width: 100,
    renderCell: (params) => (
      <Link to={`/Exam/${params.row.id}`}>{params.row.exam_name}</Link>
    ),
  },
  {
    field: "status",
    headerName: "حالة",
    // description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
    renderCell: (params) => params.row.status
  },
  {
    field: "result_status",
    headerName: "الدرجة",
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <p>
        {params.row.status == "completed"
          ? params.row.result_status + "/100"
          : "-"}{" "}
      </p>
    ),
  },
  {
    field: "exam_date",
    headerName: "الزمن",
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <span>
        {(new Date(params.row.exam_date_end) -
          new Date(params.row.exam_date_start)) /
          (1000 * 60 * 60)}{" "}
        ساعة
      </span>
    ),
  },
  {
    field: "exam_date_start",
    headerName: "اليوم",
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <span>{params.row.exam_date_start.split(" ")[0]}</span>
    ),
  },
  {
    field: "exam_time_start",
    headerName: "الساعة",
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <span>{(params.row.exam_date_start.split(" ")[1]).slice(0,-3)}</span>
    ),
  },
];

const rows = [
  {
    xid: 888,
    code: "jghfek",
    session: "المحاضرة الاولة",
    useData: "12:30 2022-04-13",
    status: "شاغل",
  },
  {
    xid: 3,
    code: "jghfkf",
    session: "المحاضرة الاولة",
    useData: "23/7/2023",
    status: "شاغل",
  },
  {
    xid: 4,
    code: "jghfkf",
    session: "المحاضرة الاولة",
    useData: "23/7/2023",
    status: "شاغل",
  },
  {
    xid: 5,
    code: "jghfkf",
    session: "المحاضرة الاولة",
    useData: "23/7/2023",
    status: "شاغل",
  },
  {
    xid: 6,
    code: "jghfkf",
    session: "المحاضرة الاولة",
    useData: "23/7/2023",
    status: "انتهي",
  },
  {
    xid: 7,
    code: "jghfkf",
    session: "المحاضرة الاولة",
    useData: "23/7/2023",
    status: "انتهي",
  },
  {
    xid: 8,
    code: "jghfkf",
    session: "المحاضرة الاولة",
    useData: "23/7/2023",
    status: "انتهي",
  },
  {
    xid: 9,
    code: "jghfkf",
    session: "المحاضرة الاولة",
    useData: "23/7/2023",
    status: "انتهي",
  },
  {
    xid: 10,
    code: "jghfkf",
    session: "المحاضرة الاولة",
    useData: "23/7/2023",
    status: "انتهي",
  },
  {
    xid: 11,
    code: "jghfkf",
    session: "المحاضرة الاولة",
    useData: "23/7/2023",
    status: "انتهي",
  },
  {
    xid: 12,
    code: "jghfkf",
    session: "المحاضرة الاولة",
    useData: "23/7/2023",
    status: "انتهي",
  },
  {
    xid: 13,
    code: "jghfkf",
    session: "المحاضرة الاولة",
    useData: "23/7/2023",
    status: "انتهي",
  },
  {
    xid: 1,
    code: "jghfhk",
    session: "المحاضرة الاولة",
    useData: "23/7/2023",
    status: "شاغل",
  },
];
export default function ExResults() {
  const { userToken } = useContext(UserContext);
  const [rows, setrows] = useState([]);

  const getAllExamData = async () => {
    let res = await getAllExam(userToken);
    setrows(res);
    console.log("get data", res);
  };
  useEffect(() => {
    getAllExamData();
  }, []);

  return <Table rows={rows} columns={columns} isLodaing={rows.length} />;
}
