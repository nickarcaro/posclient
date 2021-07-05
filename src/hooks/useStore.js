import { useContext } from "react";
import StoreContext from "../context/StoreContext";

/**
 * @function useAuth
 * @description funcion que almacena contexto de almacen logueado
 */

const useStore = () => useContext(StoreContext);
export default useStore;
//cracion de hook que utiliza el contexto global del usuario
