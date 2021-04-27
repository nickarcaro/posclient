import React, { useState, useEffect, useMemo } from "react";
import jwtDecode from "jwt-decode";
import AdminLayout from "./layouts/AdminLayout";
import HomeLayout from "./layouts/HomeLayout"; //importacion del layout de pagina principal

import AuthContext from "./context/AuthContext";

import { setToken, getToken, removeToken } from "./api/token";

import "./less/index.less";

export default function App() {
  const [auth, setAuth] = useState(true);
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
      <div>{auth ? <AdminLayout /> : <HomeLayout />}</div>
    </AuthContext.Provider>
  );
}
