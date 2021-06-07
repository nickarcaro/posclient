import { createContext } from "react";

const StoreContext = createContext({
  store: undefined,
  loginStore: () => null,
  logoutStore: () => null,
  setReloadStore: () => null,
});

export default StoreContext;

//contexto global de la tienda que el usuario selecciona  cuando la ingresa en /pos
