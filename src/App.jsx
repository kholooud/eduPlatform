import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { useState } from "react";
function App() {
  const themeLight = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#FFF",
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
      },
    },
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
  });

  const themeDark = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#080c14",
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
      },
    },
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
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });
  const [themeMode, setthemeMode] = useState("themeLight");

  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider
          theme={themeMode == "themeLight" ? themeLight : themeDark}
        >
          <CssBaseline />
          <>
            <Navbar handleThemeMode={setthemeMode} themeMode={themeMode} />
            {/* <Box width={"100%"} height={"2000px"}></Box> */}
            <Home />
            <Footer />
          </>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
