//librerias (react y decodificacion de JWT)
import React, { useState, useEffect, useMemo, useCallback } from "react";
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

  //obtención de token cuando se actualice la pagina (reload user)
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

  //login de usuario (guarda los datos del usuario) y luego redirige a url /pos

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id,
    });
    window.location.replace("/pos");
  };
  //cerrar sesión (remueve token, setea al autenticado y redirige al home del portal comercial)
  const logout = useCallback(() => {
    if (auth) {
      removeToken();
      setAuth(null);
      window.location.replace("/");
    }
  }, [auth, setAuth]);

  //manejo global del dato de usuario cuando se actualice el auth
  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth, logout]
  );
  //cuando se actualiza, auth es undefined y luego tiene el dato
  if (auth === undefined) return null;

  //authcontext: variable global para los datos del usuario (utilizado e  todos los componentes)
  return (
    <AuthContext.Provider value={authData}>
      <Navigation />
    </AuthContext.Provider>
  );
}
