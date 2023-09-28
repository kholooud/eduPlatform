import { useTheme } from "@emotion/react";
import React, { createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ErrorHandleContext = createContext(" ")

export default function ErrorHandleContextProvider({ children }) {
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
        <div>
            <ErrorHandleContext.Provider value={{ notify }}>
                {children}
            </ErrorHandleContext.Provider>
        </div>
    )
}
