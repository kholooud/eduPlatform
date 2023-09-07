import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Root from "../pages/Root/Root";
import Course from "../pages/Course/Course";
import Courses from "../components/Courses/Courses";
import Invoice from "../pages/Invoice/Invoice";
import HomeWork from "../pages/HomeWork/HomeWork";
import Exam from "../pages/Exam/Exam";
import MyCourses from "../pages/Profile/ProfileViews/MyCourses/MyCourses";
import ExResults from "../pages/Profile/ProfileViews/ExResults/ExResults";
import Notifications from "../pages/Profile/ProfileViews/Notifications/Notifications";
import Video from "../pages/video/Video";
import Profile from "../pages/Profile/Profile";
import Main from "../pages/Profile/ProfileViews/Main/Main";
import Code from "../pages/Profile/ProfileViews/Code/Code";
import Course_Content from "./Course_Content/Course_Content";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

export default function routes() {
  const { themeMode, setthemeMode } = useContext(ThemeContext);
  const { currentUser } = useContext(UserContext);

  const routers = createBrowserRouter([
    {
      path: "",
      // element: <Root />,
      element: <Root handleThemeMode={setthemeMode} themeMode={themeMode} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/Profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
          children: [
            ,
            { index: true, element: <Main /> },
            { path: "Code", element: <Code /> },
            { path: "MyCourses", element: <MyCourses /> },
            { path: "ExResults", element: <ExResults /> },
            { path: "Notifications", element: <Notifications /> },
          ],
        },
        // {
        //   path: "/Course",
        //   element: (
        //     <ProtectedRoute>
        //       <Course_Content />
        //     </ProtectedRoute>
        //   ),
        // },
        {
          path: "/Course",
          element: (
            <ProtectedRoute>
              <Course />
            </ProtectedRoute>
          ),
        },
        {
          path: "/Login",
          element: currentUser ? <Navigate to="/" replace/> : <Login />,
        },
        {
          path: "/Register",
          element: currentUser ? <Navigate to="/" replace/> : <Register />,
        },
        {
          path: "/Courses",
          element: (
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          ),
        },
        {
          path: "/Invoice",
          element: (
            <ProtectedRoute>
              <Invoice />
            </ProtectedRoute>
          ),
        },
        {
          path: "/Exam",
          element: (
            <ProtectedRoute>
              <Exam />
            </ProtectedRoute>
          ),
        },
        {
          path: "/HomeWork",
          element: (
            <ProtectedRoute>
              {" "}
              <HomeWork />
            </ProtectedRoute>
          ),
        },
        {
          path: "/Video",
          element: (
            <ProtectedRoute>
              <Video />
            </ProtectedRoute>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return routers;
}
