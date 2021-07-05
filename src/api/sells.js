import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";

/**
 * Conexion entre front end y back end para obtener ventas
 * @param {String} idAlmacen ID de almacen
 * @param {Function} logout Funcion para cerrar sesion
 * @returns Lista de ventas
 */

export async function getSells(idAlmacen, logout) {
  try {
    const url = `${BASE_PATH}/ventas?almacen=${idAlmacen}`;
    const result = await authFetch(url, null, logout);
    if (result.statusCode === 500) throw Error("Error del servidor");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
