//librerias (react y decodificacion de JWT)
import React, { useState, useEffect, useMemo } from "react";
import jwtDecode from "jwt-decode";
//contexto de la aplicación (globalmente en la app tiene los datos del usuario)
import AuthContext from "./context/AuthContext";
//api de token
import { setToken, getToken, removeToken } from "./api/token";
//sistema de navegación
import Navigation from "./config/Navigation";

//css (less)
import "./less/index.less";

export default function App() {
  //estados de usuario autenticado y de recargar usuario
  const [auth, setAuth] = useState(undefined);
  const [realoadUser, setReloadUser] = useState(false);

  //obtención de token

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

  //login de usuario

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id,
    });
  };
  //cerrar sesión
  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      window.location.replace("/");
    }
  };
  //manejo global del dato de usuario

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
      <Navigation />
    </AuthContext.Provider>
  );
}
