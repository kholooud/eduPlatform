import React, { createContext, useEffect, useState } from "react";
import { isAuthenticated } from "../API/AuthService";

export const UserContext = createContext(" ");

export default function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState(isAuthenticated());
  const checkLoggedIn =  () => {
    setCurrentUser(isAuthenticated());
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  useEffect(() => {
    console.log("userContext", currentUser);
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, checkLoggedIn: checkLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
}
