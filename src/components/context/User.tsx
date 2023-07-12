import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "Berkin",
        email: "helloberkin@gmail.com",
      });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <div className="button" onClick={handleLogin}>
        {" "}
        Login{" "}
      </div>
      <div className="button" onClick={handleLogout}>
        {" "}
        Logout{" "}
      </div>
      <div>User name is {userContext?.user?.name}</div>
      <div>User name is {userContext?.user?.name}</div>
    </div>
  );
};
