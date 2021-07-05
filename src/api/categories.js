import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";



/**
 * Conexion entre front end y back end para obtener categorias
 * @param {String} idAlmacen ID de un almacen.
 * @param {Function} logout Funcion para cerrar sesion
 * @returns Lista de Categorias
 */

export async function getCategories(idAlmacen, logout) {
  try {
    const url = `${BASE_PATH}/categoria-simples?almacen=${idAlmacen}`;
    const result = await authFetch(url, null, logout);
    if (result.statusCode === 500) throw Error("Error del servidor");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para agregar una categoria
 * @param {Object} category Objeto de categoria
 * @param {Function} logout Funcion para cerrar sesion
 *
 */


export async function addCategory(category, logout) {
  console.log(category, logout);
  try {
    const url = `${BASE_PATH}/categoria-simples`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    };
    const result = await authFetch(url, params, logout);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}