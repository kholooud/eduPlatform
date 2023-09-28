import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeContextProvider from "./context/ThemeContext";
import UserContextProvider from "./context/UserContext";
// import HandleErrorContextProvider from "./context/HandleErrorContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        {/* <HandleErrorContextProvider> */}
          <App />
        {/* </HandleErrorContextProvider> */}
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
