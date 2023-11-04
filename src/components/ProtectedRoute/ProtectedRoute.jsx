import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../API/AuthService";
import { HandleErrorContext } from "../../context/HandleErrorContext";
import { UserContext } from "../../context/UserContext";

export default function ProtectedRoute({ children }) {
  const { currentUser, checkLoggedIn } = useContext(UserContext);
  const { notify } = useContext(HandleErrorContext)
  let nowTime = new Date();
  let expireDate = new Date(isAuthenticated()?.expire);


  if (currentUser && expireDate > nowTime) {
    return children;
  }
  else {
    notify('انتهت مده الجلسة')
    localStorage.removeItem('userToken');
    checkLoggedIn()
    return <Navigate to={"/Login"} replace />;
  }
}
