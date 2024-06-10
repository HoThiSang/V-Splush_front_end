import React, { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const stringUser = JSON.stringify(localStorage.getItem("user"));
    try {
      const user = JSON.parse(stringUser);
      setCurrentUser(user);
      console.log("User data", user);
    } catch (error) {}
  }, []);
  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
