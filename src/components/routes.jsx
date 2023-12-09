import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Root from "../pages/Root/Root";
import Course from "../pages/Course/Course";
import Exam from "../pages/Exam/Exam";
import ExResults from "../pages/Profile/ProfileViews/ExResults/ExResults";
import Week from "../pages/Week/Week";
import HomeWork from "../pages/Week/WeekViews/HomeWork/HomeWork";
import Lecture from "../pages/Week/WeekViews/Lecture/Lecture";
import Profile from "../pages/Profile/Profile";
import Main from "../pages/Profile/ProfileViews/Main/Main";
import Code from "../pages/Profile/ProfileViews/Code/Code";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import Code_warning from "../pages/Code_warning/Code_warning";
import ErrorPage from "../pages/ErrorPage/ErrorPage"


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
            { path: "ExResults", element: <ExResults /> },
          ],
        }, {
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
              <Course />
            </ProtectedRoute>
          ),
        },
        {
          path: "/Login",
          element: currentUser && isActive ? <Navigate to="/" replace /> : ((isActive == false) ? <ErrorPage /> : <Login />),
        },
        {
          path: "/Register",
          element: currentUser && isActive ? <Navigate to="/" replace /> : (isActive == false ? <ErrorPage /> : <Register />),
        },
        
        {
          path: "/Exam/:examID",
          element: (
            <ProtectedRoute>
              <Exam />
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
    console.log("isactive", isActive)
  }, [isActive])
  return routers;
}
