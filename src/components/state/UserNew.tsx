// useState Type Assertion Version
import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser); // empty  object is of type authuser
  const handleLogin = () => {
    setUser({
      name: "Berkin",
      email: "helloberkin@gmail.com",
    });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div> User name is {user?.name} </div>
      <div> User name is {user?.email} </div>
    </div>
  );
};
