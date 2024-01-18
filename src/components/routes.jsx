import React, { useContext, useEffect } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
const LazyHome = React.lazy(() => import("../pages/Home/Home"));
// import Home from "../pages/Home/Home";
const LazyRegister = React.lazy(() => import("../pages/Register/Register"));
// import Register from "../pages/Register/Register";
const LazyLogin = React.lazy(() => import("../pages/Login/Login"));
// import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Root from "../pages/Root/Root";
const LazyCourse = React.lazy(() => import("../pages/Course/Course"));
// import Course from "../pages/Course/Course";
const LazyExam = React.lazy(() => import("../pages/Exam/Exam"));
// import Exam from "../pages/Exam/Exam";
import Week from "../pages/Week/Week";
import HomeWork from "../pages/Week/WeekViews/HomeWork/HomeWork";
import Lecture from "../pages/Week/WeekViews/Lecture/Lecture";
const LazyProfile = React.lazy(() => import("../pages/Profile/Profile"));
// import Profile from "../pages/Profile/Profile";
import Main from "../pages/Profile/ProfileViews/Main/Main";
import Code from "../pages/Profile/ProfileViews/Code/Code";
import ExResults from "../pages/Profile/ProfileViews/ExResults/ExResults";

import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import Code_warning from "../pages/Code_warning/Code_warning";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { CircularProgress } from "@mui/material";

export default function routes() {
  const { themeMode, setthemeMode } = useContext(ThemeContext);
  const { currentUser, isActive } = useContext(UserContext);

  const routers = createBrowserRouter([
    {
      path: "",
      element: <Root handleThemeMode={setthemeMode} themeMode={themeMode} />,
      children: [
        {
          index: true,
          element: (
            <React.Suspense fallback={<CircularProgress color="secondary" />}>
              <LazyHome />
            </React.Suspense>
          ),
          // <Home />,
        },
        {
          path: "/Profile",
          element: (
            <ProtectedRoute>
              {/* <Profile/> */}
              <React.Suspense fallback={<CircularProgress color="secondary" />}>
                <LazyProfile />
              </React.Suspense>
            </ProtectedRoute>
          ),
          children: [
            { index: true, element: <Main /> },
            { path: "Code", element: <Code /> },
            { path: "ExResults", element: <ExResults /> },
          ],
        },
        {
          path: "/Week/:weekID",
          element: (
            <ProtectedRoute>
              <Week />
            </ProtectedRoute>
          ),
          children: [
            { index: true, element: <Lecture /> },
            { path: "HomeWork", element: <HomeWork /> },
          ],
        },
        {
          path: "/Course/:CourseId",
          element: (
            <ProtectedRoute>
              <React.Suspense fallback={<CircularProgress color="secondary" />}>
                <LazyCourse />
              </React.Suspense>
              {/* <Course /> */}
            </ProtectedRoute>
          ),
        },
        {
          path: "/Login",
          element:
            currentUser && isActive ? (
              <Navigate to="/" replace />
            ) : isActive == false ? (
              <ErrorPage />
            ) : (
              <React.Suspense fallback={<CircularProgress color="secondary" />}>
                <LazyLogin />
              </React.Suspense>
              // <Login />
            ),
        },
        {
          path: "/Register",
          element:
            currentUser && isActive ? (
              <Navigate to="/" replace />
            ) : isActive == false ? (
              <ErrorPage />
            ) : (
              <React.Suspense fallback={<CircularProgress color="secondary" />}>
                <LazyRegister />
              </React.Suspense>
              // <Register />
            ),
        },

        {
          path: "/Exam/:examID",
          element: (
            <ProtectedRoute>
              <React.Suspense fallback={<CircularProgress color="secondary" />}>
                <LazyExam />
              </React.Suspense>
              {/* <Exam /> */}
            </ProtectedRoute>
          ),
        },
        {
          path: "/ErrorPage",
          element: (
            <ProtectedRoute>
              <ErrorPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/Warning",
          element: (
            <ProtectedRoute>
              <Code_warning />
            </ProtectedRoute>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  useEffect(() => {
    console.log("isactive", isActive);
  }, [isActive]);
  return routers;
}
