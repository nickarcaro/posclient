import { createContext } from "react";

const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
  setReloadUser: () => null,
  store: undefined,
  loginStore: () => null,
  logoutStore: () => null,
  setReloadStore: () => null,
});

export default AuthContext;

//contexto global del usuario que se autentica en el sistema
