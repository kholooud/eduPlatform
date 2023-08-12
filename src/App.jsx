import routers from "./components/routes.jsx";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { useContext } from "react";

function App() {
  const { themeMode, themeLight, themeDark } = useContext(ThemeContext)
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={themeMode == "themeLight" ? themeLight : themeDark}>
          <CssBaseline />
            <RouterProvider router={routers()} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
