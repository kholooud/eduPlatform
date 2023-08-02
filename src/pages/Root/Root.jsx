import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { Container } from "@mui/system";

export default function Root({ handleThemeMode, themeMode }) {
  return (
    <>
      <Navbar handleThemeMode={handleThemeMode} themeMode={themeMode} />
      <Container sx={{minHeight:"75vh"}}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
