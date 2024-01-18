
import { useTheme } from "@emotion/react";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function HandleErr() {
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
//   const myPromise = new Promise((resolve) =>
//     fetch("https://jsonplaceholder.typicode.com/post")
//       .then((response) => response.json())
//       .then((json) => setTimeout(() => resolve(json), 3000))
//   );

  useEffect(() => {
    // toast.promise(myPromise, {
    //   pending: "Promise is pending",
    //   success: "Promise  Loaded",
    //   error: "error",
    // });
  }, []);

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}
