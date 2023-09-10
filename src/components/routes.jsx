import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Root from "../pages/Root/Root";
import Course from "../pages/Course/Course";
import Courses from "../components/Courses/Courses";
import Invoice from "../pages/Invoice/Invoice";
import Exam from "../pages/Exam/Exam";
import MyCourses from "../pages/Profile/ProfileViews/MyCourses/MyCourses";
import ExResults from "../pages/Profile/ProfileViews/ExResults/ExResults";
import Notifications from "../pages/Profile/ProfileViews/Notifications/Notifications";
import Week from "../pages/Week/Week";
import HomeWork from "../pages/Week/WeekViews/HomeWork/HomeWork";
import Lecture from "../pages/Week/WeekViews/Lecture/Lecture";
import Profile from "../pages/Profile/Profile";
import Main from "../pages/Profile/ProfileViews/Main/Main";
import Code from "../pages/Profile/ProfileViews/Code/Code";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Subjects from "../components/Subjects/Subjects";

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
            { index: true, element: <Main /> },
            { path: "Code", element: <Code /> },
            { path: "MyCourses", element: <MyCourses /> },
            { path: "ExResults", element: <ExResults /> },
            { path: "Notifications", element: <Notifications /> },
          ],
        },
        {
          path: "/Week",
          element: (
            // <ProtectedRoute>
            <Week />
          ),
          // </ProtectedRoute>
          children: [
            { index: true, element: <Lecture /> },
            { path: "HomeWork", element: <HomeWork /> },
          ],
        },
        {
          path: "/Course",
          element: (
            // <ProtectedRoute>
            <Course />
          ),
          // </ProtectedRoute>
        },
        {
          path: "/Login",
          element: currentUser ? <Navigate to="/" replace /> : <Login />,
        },
        {
          path: "/Register",
          element: currentUser ? <Navigate to="/" replace /> : <Register />,
        },
        {
          path: "/Courses",
          element: (
            // <ProtectedRoute>
            <Courses />
            // </ProtectedRoute>
          ),
        },

        {
          path: "/Subjects",
          element: (
            // <ProtectedRoute>
            <Subjects />

            // </ProtectedRoute>
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
            // <ProtectedRoute>
            <Exam />
            // </ProtectedRoute>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return routers;
}
