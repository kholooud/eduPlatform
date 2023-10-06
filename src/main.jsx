import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeContextProvider from "./context/ThemeContext";
import UserContextProvider from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
