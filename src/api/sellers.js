import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";

/**
 * Conexion entre front end y back end para obtener usuarios con permiso para vender
 * @param {String} idAlmacen ID del almacen
 * @param {Function} logout Funcion para cerrar sesion
 * @returns Lista de usuarios con permiso para vender
 */

export async function getSellers(idAlmacen, logout) {
  try {
    const url = `${BASE_PATH}/users?almacen=${idAlmacen}`;
    const result = await authFetch(url, null, logout);
    if (result.statusCode === 500) throw Error("Error del servidor");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}


/**
 * Conexion entre front end y back end para agregar vendedores
 * @param {Object} seller Objeto vendedor
 * @param {Function} logout Funcion para cerrar sesion
 * 
 */

export async function addSeller(seller, logout) {
  console.log(seller, logout);
  try {
    const url = `${BASE_PATH}/users`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(seller),
    };
    const result = await authFetch(url, params, logout);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para actualizar vendedores
 * @param {String} idSeller ID vendedor
 * @param {Object} seller Objeto vendedor
 * @param {Function} logout Funcion para cerrar sesion
 * 
 */

export async function updateSeller(idSeller, seller, logout) {
  try {
    const url = `${BASE_PATH}/vendedores/${idSeller}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(seller),
    };
    const result = await authFetch(url, params, logout);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para crear usuario vendedor
 * @param {Object} user Objeto de usuario
 * @param {Function} logout Funcion para cerrar sesion
 *
 */

export async function createUser(user, logout) {
  try {
    const url = `${BASE_PATH}/users`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const result = await authFetch(url, params, logout);
    return result ? result : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para obtener vendedores
 * @param {String} idAlmacen ID de almacen
 * @param {Function} logout Funcion para cerrar sesion
 * @returns Lista de usuarios vendedores
 */

export async function getUsers(idAlmacen, logout) {
  try {
    const url = `${BASE_PATH}/vendors?almacen=${idAlmacen}`;
    const result = await authFetch(url, null, logout);
    if (result.statusCode === 500) throw Error("Error del servidor");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
