import React, { createContext, useEffect, useState } from "react";
import { isAuthenticated } from "../API/AuthService";

export const UserContext = createContext(" ");

export default function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState(isAuthenticated()?.userData);
  const [userToken, setuserToken] = useState(isAuthenticated()?.userToken);
  const [expireDate, setexpireDate] = useState(isAuthenticated()?.expire);
  const [isActive, setisActive] = useState(isAuthenticated()?.isActive);

  const checkLoggedIn = () => {
    setCurrentUser(isAuthenticated()?.userData);
    setuserToken(isAuthenticated()?.userToken);
    setexpireDate(isAuthenticated()?.expire);
    setisActive(isAuthenticated()?.isActive);
    console.log("se3a")
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);



  return (
    <UserContext.Provider value={{ currentUser, userToken, expireDate, isActive, setisActive: setisActive, checkLoggedIn: checkLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
}
