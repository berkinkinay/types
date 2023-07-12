import React, { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginIn = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLoginIn}>Login</button>
      <button onClick={handleLogout}>Login</button>
    </div>
  );
};
