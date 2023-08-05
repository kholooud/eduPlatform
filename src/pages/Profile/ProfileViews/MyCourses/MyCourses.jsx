import React from 'react'
import Table from '../../../../components/Table/Table';
import { Link } from 'react-router-dom';

const columns = [
    {
        field: "id",
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

    { xid: 888, code: 'jghfek', session: 'المحاضرة الاولة', useData: "12:30 2022-04-13", status: "شاغل" },
    { xid: 3, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "شاغل" },
    { xid: 4, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "شاغل" },
    { xid: 5, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "شاغل" },
    { xid: 6, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { xid: 7, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { xid: 8, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { xid: 9, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { xid: 10, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { xid: 11, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { xid: 12, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { xid: 13, code: 'jghfkf', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "انتهي" },
    { xid: 1, code: 'jghfhk', session: 'المحاضرة الاولة', useData: '23/7/2023', status: "شاغل" },
];
export default function MyCourses() {
  return (
    <Table rows={rows} columns={columns}/>
  )
}
