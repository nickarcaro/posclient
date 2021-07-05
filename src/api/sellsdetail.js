import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";

/**
 * Conexion entre front end y back end para obtener el detalle de las ventas
 * @param {String} idVenta ID de la venta
 * @param {Function} logout Funcion para cerrar sesion
 * @returns Detalle de la venta
 */

export async function getSellsDetail(idVenta, logout) {
  try {
    const url = `${BASE_PATH}/detalle-ventas?venta=${idVenta}`;
    const result = await authFetch(url, null, logout);
    if (result.statusCode === 500) throw Error("Error del servidor");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
