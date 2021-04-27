import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default () => useContext(AuthContext);

//cracion de hook que utiliza el contexto global del usuario
