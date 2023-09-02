import React, { createContext, useState } from "react";

export const UserContext = createContext(" ");

export default function UserContextProvider(props) {
  const [userToken, setuserToken] = useState("");

  if (localStorage.getItem("token")) {
    setuserToken(localStorage.getItem("userToken"));
  }
  
  return (
    <UserContext.Provider value={{ userToken }}>
      {props.children}
    </UserContext.Provider>
  );
}
