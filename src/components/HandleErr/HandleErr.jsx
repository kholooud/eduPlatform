// import { Box } from "@mui/material";
// const Icon = ({ closeToast }) => {
//   return (
//     <Box
//       direction="left"
//       bgcolor={"#f43f5e"}
//       sx={{
//         borderRadius: "0.4rem",
//         width: "250px",
//         textAlign: "center",
//         padding: "1rem",
//         margin: "1rem",
//         color: "red",
//         position: "fixed",
//         bottom: "0",
//         zIndex: "99999999999",
//       }}
//     >
//       حدث خطا برجاء التواصل بالدعم
//     </Box>
//   );
// };
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
