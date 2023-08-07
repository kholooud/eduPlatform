import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  const [temp, settemp] = useState(false);
  if (temp) {
    return <Navigate to={"/Login"} />;
  } else {
    return props.children;
  }
}
