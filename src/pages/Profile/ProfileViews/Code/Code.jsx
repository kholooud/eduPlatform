import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCode } from "../../../../API/StudentServices";
import Table from "../../../../components/Table/Table";
import { UserContext } from "../../../../context/UserContext";
import { HandleErrorContext } from "../../../../context/HandleErrorContext";

const columns = [
  {
    field: "rowId",
    headerName: "",
    width: 50,
    align: "center",
  },
  {
    field: "code",
    headerName: "الكود",
    width: 120,
    renderCell: (params) => {
      return params.row.barcode;
    },
  },
  {
    field: "session",
    headerName: "المحاضرة",
    width: 200,
    renderCell: (params) => (
      <Link to={`/week/${params.row.lesson_id}`}>{params.row.name}</Link>
    ),
  },
  {
    field: "status",
    headerName: "حالة",
    // description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
    renderCell: (params) => {
      return params.row.status;
    },
  },
  {
    field: "activated_at",
    headerName: "تشغيل",
    // description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
    renderCell: (params) => {
      return params.row.activated_at;
    },
  },
  {
    field: "deactive_at",
    headerName: "ينتهي ",
    // description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
    renderCell: (params) => {
      return params.row.deactive_at;
    },
  },
];

export default function Code() {
  const { userToken } = useContext(UserContext);
  const { notify } = useContext(HandleErrorContext);
  const [rows, setrows] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const getAllCodeData = async () => {
    setisLoading(true);
    let res = await getAllCode(userToken);
    if (res.status == 200) {
      setisLoading(false);
      let x = res.data.body.map((item) => ({
        ...item.code,
        ...item.lesson,
        lesson_id: item.lesson.id,
        id: item.code.id,
      }));
      return setrows(x);
    }
    notify("حدث خطا اعاد محاولة مره اخري");
  };

  useEffect(() => {
    getAllCodeData();
  }, []);

  return <Table rows={rows} columns={columns} isLodaing={isLoading} />;
}
