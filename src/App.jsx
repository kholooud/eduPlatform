import { useState } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Root from "./pages/Root/Root";
import Course_Content from "./components/Course_Content/Course_Content";
<<<<<<< HEAD
import Profile from "./pages/Profile/Profile";
import Main from "./pages/Profile/ProfileViews/Main/Main";
=======
import Course from "./pages/Course/Course";
>>>>>>> 5251cdffd36f4b0f69e1f0935ce87d732c62e887

function App() {
  const themeDefualt = {
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
    },
    direction: "rtl",
  };
  const themeLight = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#FFF",
      },
      secondary: {
        main: "#06b6d4",
        dark: "#10151f",
      },
      info: {
        main: "#f7788e",
      },
      warning: {
        main: "#facc15",
        dark: "#713f12",
      },
      background: {
        default: "#FFF",
      },
      text: {
        primary: "#000",
        sec: "#fff",
      },
    },
    ...themeDefualt,
  });
  const themeDark = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#080c14",
      },
      secondary: {
        main: "#06b6d4",
        dark: "#10151f",
      },
      info: {
        main: "#f7788e",
      },
      warning: {
        main: "#facc15",
        dark: "#713f12",
      },
      background: {
        default: "#080c14",
      },
      text: {
        primary: "#ffffff",
        sec: "#000",
      },
    },
    ...themeDefualt,
  });
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });
  const [themeMode, setthemeMode] = useState("themeLight");
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root handleThemeMode={setthemeMode} themeMode={themeMode} />}
      >
        <Route index element={<Home />} />
<<<<<<< HEAD
        <Route path="/Profile" element={<Profile />} >
          <Route path="main" element={<Main/>}></Route>
        </Route>
        <Route path="/Course" element={<Course_Content />} />
=======
        <Route path="/Course" element={<Course/>}/>
>>>>>>> 5251cdffd36f4b0f69e1f0935ce87d732c62e887
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} />

      </Route>
    )
  );
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider
          theme={themeMode == "themeLight" ? themeLight : themeDark}
        >
          <CssBaseline />
          <>
            <RouterProvider router={routers} />
            {/* <Course_Content /> */}
          </>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
