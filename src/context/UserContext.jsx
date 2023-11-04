import React, { createContext, useEffect, useState } from "react";
import { isAuthenticated } from "../API/AuthService";

export const UserContext = createContext(" ");

export default function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState(isAuthenticated()?.userData);
  const [userToken, setuserToken] = useState(isAuthenticated()?.userToken);
  const [expireDate, setexpireDate] = useState(isAuthenticated()?.expire);
  const checkLoggedIn = () => {
    setCurrentUser(isAuthenticated()?.userData);
    setuserToken(isAuthenticated()?.userToken);
    setexpireDate(isAuthenticated()?.expire);
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);



  return (
    <UserContext.Provider value={{ currentUser, userToken, expireDate, checkLoggedIn: checkLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
}
