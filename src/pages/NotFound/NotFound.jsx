import React from "react";

import { Grid, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <>
      <Grid container xs={12} height={"75vh"} justifyContent={"center"} alignItems={"center"}>
        <span variant="h6">
          ! عذرًا و لكن هذه الصفحة غير موجودة علي الموقع
        </span>
      </Grid>
    </>
  );
}
