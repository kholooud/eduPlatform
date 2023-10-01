import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColumnMenu } from "@mui/x-data-grid";
import { useTheme } from "@emotion/react";
import { Grid } from "@mui/material";

function NoData() {
  return (
    <Grid
      container
      xs={10}
      sx={{
        background: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50px",
        minHeight: "5rem",
        padding: "10px",
        color:"black"
      }}
    >
      لا توجد بيانات
    </Grid>
  );
}



function CustomColumnMenu(props) {
  return (
    <GridColumnMenu
      {...props}
      slots={{
        columnMenuColumnsItem: null,
      }}
      sx={{
        minWidth: "130px",
        background: "",
        // color: "white",
        "& .MuiButtonBase-root": {
          fontFamily: "Cairo !important",
        },
      }}
    />
  );
}

const localizedTextsMap = {
  columnMenuSortAsc: "تصاعدي",
  columnMenuSortDesc: "تنازلي",
  columnMenuFilter: "فلتر",
  columnMenuHideColumn: "",
  columnMenuShowColumns: "",
};

export default function Table({ columns, rows, isLodaing }) {
  const theme = useTheme("");
  const handleRowClick = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details, // GridCallbackDetails
  ) => {
    console.log("ds",params.id)
  };

  return (
    <>
      {isLodaing ? (
        <Box
          sx={{
            minHeight: "100%",
            maxHeight: "100%",
            width: "100%",
            padding: "1rem",
            boxSizing: "border-box",
            "& .MuiDataGrid-root": {
              background: theme.palette.primary.table,
              fontFamily: "inherit",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bolder",
            },
            "& .MuiDataGrid-cell": {
              border: "none",
            },
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
              height: "5px",
            },
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
            },
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          }}
        >
          <DataGrid
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            rows={rows.map((item, index) => ({ rowId: index + 1, ...item }))}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            localeText={localizedTextsMap}
            slots={{ columnMenu: CustomColumnMenu }}
            onRowClick={handleRowClick}
          />
        </Box>
      ) : (
        <NoData />
      )}
    </>
  );
}
