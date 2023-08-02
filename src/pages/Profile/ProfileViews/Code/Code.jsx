import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColumnMenu } from '@mui/x-data-grid';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

function CustomColumnMenu(props) {
    return (
        <GridColumnMenu
            {...props}
            slots={{
                columnMenuColumnsItem: null,
            }}
            sx={{
                minWidth: '130px', background: 'red',color:'white',
                '& .MuiButtonBase-root':{
                    fontFamily:"Cairo !important",
                }
            }}
        />
    );
}

const localizedTextsMap = {
    columnMenuSortAsc: "تصاعدي",
    columnMenuSortDesc: "تنازلي",
    columnMenuFilter: "فلتر",
    columnMenuHideColumn: "",
    columnMenuShowColumns: ""
};

const columns = [
    {
        field: "id",
        headerName: '',
    },
    {
        field: 'code',
        headerName: 'الكود',
        width: 120
    },
    {
        field: 'session',
        headerName: 'المحاضرة',
        width: 200,
        renderCell: (params) => (
            <Link to={`/${params.row.xid}`}>{params.value}</Link>
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

export default function Code() {
    const theme = useTheme("");

    return (
        <Box sx={{
            minHeight: "100%",maxHeight:"100%", width: '100%', padding: "1rem", boxSizing: "border-box",
            "& .MuiDataGrid-root": {
                background: "#f7f7f7",
                fontFamily: 'inherit',
            },
            "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "bolder"
            },
            "& .MuiDataGrid-cell": {
                border: "none",
            },
            '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
                height: '5px',
            },
            '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
                background: '#f1f1f1',
            },
            '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
                backgroundColor: '#888',
            },
            '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover': {
                background: '#555',
            },

        }}>
            <DataGrid
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                rows={rows.map((item, index) => ({ id: index + 1, ...item }))}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                localeText={localizedTextsMap}
                slots={{ columnMenu: CustomColumnMenu }}
            />
        </Box>
    );
}