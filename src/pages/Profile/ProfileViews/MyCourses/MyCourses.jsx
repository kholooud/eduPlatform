import React from 'react'
import Table from '../../../../components/Table/Table';
import { Link } from 'react-router-dom';

const columns = [
    {
        field: "rowId",
        headerName: '',
        width: 50,
        align: 'center'
    },
    {
        field: 'session',
        headerName: 'المحاضرة',
        width: 200,
        renderCell: (params) => (
            <Link to={`/${params.row.xid}`} >{params.value}</Link>
        )
    },
    {
        field: 'useData',
        headerName: 'الاستخدام',
        width: 150
    },
    {
        field: 'status',
        headerName: 'حالة',
        // description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 100
    },
    {
        field: 'avialble',
        headerName: 'المده',
        sortable: false,
        width: 100
    },
];

const rows = [

    { id: 888, code: 'jghfek', session: 'المحاضرة الاولة', useData: "12:30 2022-04-13", status: "شاغل" },
    { id: 3, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "شاغل" },
    { id: 4, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "شاغل" },
    { id: 5, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "شاغل" },
    { id: 6, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { id: 7, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { id: 8, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { id: 9, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { id: 10, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { id: 11, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { id: 12, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { id: 13, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { id: 1, code: 'jghfhk', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "شاغل" },
];
export default function MyCourses() {
  return (
    <Table rows={rows} columns={columns}/>
  )
}
