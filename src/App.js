//librerias (react y decodificacion de JWT)
import React, { useState, useEffect, useMemo } from "react";
import jwtDecode from "jwt-decode";
//contexto de la aplicación (globalmente en la app tiene los datos del usuario)
import AuthContext from "./context/AuthContext";
//api de token
import { setToken, getToken, removeToken } from "./api/token";
//sistema de navegación
import Navigation from "./config/Navigation";
import { homeRoutes, adminRoutes } from "./config/routes";
//css (less)
import "./less/index.less";

export default function App() {
  //estados de usuario autenticado y de recargar usuario
  const [auth, setAuth] = useState(false);
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

  //si auth true, usa las rutas de admin. sino el portal comercial
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
