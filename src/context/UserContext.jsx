import React, { createContext, useEffect, useState } from "react";
import { isAuthenticated } from "../API/AuthService";

export const UserContext = createContext(" ");

export default function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState(isAuthenticated()?.userData);
  const [userToken, setuserToken] = useState(isAuthenticated()?.userToken);
  const checkLoggedIn = () => {
    setCurrentUser(isAuthenticated()?.userData);
    setuserToken(isAuthenticated()?.userToken);
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  // useEffect(() => {
  //   console.log("userContext", currentUser);
  //   console.log("userContextToken", userToken);
  // }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser,userToken, checkLoggedIn: checkLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
}
