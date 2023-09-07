import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    console.log("userToken", currentUser);
    console.log("children", children);
  }, [currentUser]);

  if (currentUser) {
    return children;
  } else {
    return <Navigate to={"/Login"} replace/>;
  }
}
