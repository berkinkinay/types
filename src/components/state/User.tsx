import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Berkin",
      email: "helloberkin@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Login</button>
      <div> User name is {user?.name} </div>
      <div> User name is {user?.email} </div>
    </div>
  );
};
