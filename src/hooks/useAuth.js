import { useContext } from "react";
import AuthContext from "../context/AuthContext";

/**
 * @function useAuth
 * @description funcion que almacena contexto de usuario logueado
 */

const useAuth = () => useContext(AuthContext);
export default useAuth;

//cracion de hook que utiliza el contexto global del usuario
