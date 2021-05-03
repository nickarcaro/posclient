import React, { useState, useEffect, useMemo } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context/AuthContext";
import { setToken, getToken, removeToken } from "./api/token";

import Navigation from "./config/Navigation";
import { homeRoutes, adminRoutes } from "./config/routes";

import "./less/index.less";

export default function App() {
  const [auth, setAuth] = useState(false);
  const [realoadUser, setReloadUser] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      });
    } else {
      setAuth(null);
    }
    setReloadUser(false);
  }, [realoadUser]);

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id,
    });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
    }
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      {!auth ? (
        <Navigation routes={homeRoutes} />
      ) : (
        <Navigation routes={adminRoutes} />
      )}
    </AuthContext.Provider>
  );
}
