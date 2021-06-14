//librerias (react y decodificacion de JWT)
import React, { useState, useEffect, useMemo, useCallback } from "react";
import jwtDecode from "jwt-decode";
//contexto de la aplicación (globalmente en la app tiene los datos del usuario)
import AuthContext from "./context/AuthContext";
//api de token
import { setToken, getToken, removeToken } from "./api/token";
import { setShop, getShop, removeShop } from "./api/store";
//sistema de navegación
import Navigation from "./config/Navigation";

//css (less)
import "./less/index.less";

export default function App() {
  //estados de usuario autenticado y de recargar usuario
  const [auth, setAuth] = useState(undefined);
  const [realoadUser, setReloadUser] = useState(false);
  const [reloadStore, setReloadStore] = useState(false);
  const [store, setStore] = useState(undefined);

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

  //obtención del almacen cuando se ingresa a su panel (trasforma el string en object)
  useEffect(() => {
    const store = getShop();
    if (store) {
      setStore(JSON.parse(store));
    } else {
      setStore(null);
    }
    setReloadStore(false);
  }, [reloadStore]);

  //login de usuario (guarda los datos del usuario) y luego redirige a url /pos

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id,
    });
    window.location.replace("/pos");
  };

  const loginStore = (almacen) => {
    setShop(JSON.stringify(almacen));
    setStore(almacen);
    window.location.replace(`/pos/${almacen.slug}`);
  };
  //cerrar sesión (remueve token, setea al autenticado y redirige al home del portal comercial)
  const logout = useCallback(() => {
    if (auth) {
      removeToken();
      setAuth(null);
      window.location.replace("/");
    }
  }, [auth, setAuth]);
  const logoutStore = useCallback(() => {
    if (store) {
      removeShop();
      setStore(null);
      window.location.replace("/pos");
    }
  }, [store, setStore]);

  //manejo global del dato de usuario cuando se actualice el auth
  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
      store,
      loginStore,
      logoutStore,
      setReloadStore,
    }),
    [auth, logout, store, logoutStore]
  );

  //cuando se actualiza, auth es undefined y luego tiene el dato
  if (auth === undefined) return null;
  if (store === undefined) return null;

  //authcontext: variable global para los datos del usuario (utilizado e  todos los componentes)
  return (
    <AuthContext.Provider value={authData}>
      <Navigation />
    </AuthContext.Provider>
  );
}
