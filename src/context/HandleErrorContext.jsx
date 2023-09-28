import { useTheme } from "@emotion/react";
import React, { createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const HandleErrorContext = createContext(" ");

export default function HandleErrorContextProvider(props) {
  const theme = useTheme();
  const notify = () =>
    toast.warn("حدث خطا برجاء التواصل بالدعم", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme.palette.mode,
      className: "toast-message",
    });
  return (
    <HandleErrorContext.Provider value={{ notify }}>
      {props.children}
    </HandleErrorContext.Provider>
  );
}
