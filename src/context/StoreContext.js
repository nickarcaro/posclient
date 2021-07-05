import { createContext } from "react";

/**
 * Contexto Global de la aplicación (manejo de credenciales del almacen ingresado)
 * @param {object} store - objeto con datos del almacen
 *  @param {function} loginStore - función para ingresar del almacen
 * @param {function} loginStore - función para salir del almacen
 * @param {function} loginStore - función para recargar información del almacen
 
 */
const StoreContext = createContext({
  store: undefined,
  loginStore: () => null,
  logoutStore: () => null,
  setReloadStore: () => null,
});

export default StoreContext;

//contexto global de la tienda que el usuario selecciona  cuando la ingresa en /pos
