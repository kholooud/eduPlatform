import routers from "./components/routes.jsx";
import { RouterProvider } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";

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
        sec: "FFF",
        active: "#3b82f6",
        table: "#f7f7f7",
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
        sec: "#334155",
        active: "#FFF",
        table: "#172539",
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
  console.log(routers);
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider
          // theme={themeMode == "themeLight" ? themeLight : themeDark}
          theme={themeLight}
        >
          <CssBaseline />
          <>
            <RouterProvider router={routers()} />
          </>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
