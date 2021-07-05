import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";

/**
 * Conexion entre front end y back end para obtener promociones
 * @param {String} idAlmacen ID de un almacen
 * @param {Function} logout Funcion para cerrar sesion
 * @returns Lista de promociones
 */

export async function getPromotions(idAlmacen, logout) {
  try {
    const url = `${BASE_PATH}/promocions?almacen=${idAlmacen}`;
    const result = await authFetch(url, null, logout);
    if (result.statusCode === 500) throw Error("Error del servidor");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para agregar promociones
 * @param {String} promotion Objeto de promocion
 * @param {Function} logout Funcion para cerrar sesion
 * 
 */

export async function addPromotion(promotion, logout) {
  console.log(promotion, logout);
  try {
    const url = `${BASE_PATH}/promocions`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(promotion),
    };
    const result = await authFetch(url, params, logout);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}