import { BASE_PATH, STORE } from "../utils/constants";
import { authFetch } from "../utils/fetch";

/**
 * Conexion entre front end y back end para obtener los almacenes
 * @param {String} idUser ID de usuario
 * @param {Function} logout Funcion para cerrar sesion
 * @returns Lista de almacenes
 */

export async function getStores(idUser, logout) {
  try {
    const url = `${BASE_PATH}/almacenes?user=${idUser}`;
    const result = await authFetch(url, null, logout);
    if (result.statusCode === 500) throw Error("Error del servidor");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para obtener un almacen en base al slug
 * @param {String} userId ID de usuario
 * @param {String} namestore Nombre del almacen
 * @param {Function} logout Funcion para cerrar sesion 
 * @returns Almacen
 */

export async function getStoreBySlug(userId, namestore, logout) {
  try {
    const url = `${BASE_PATH}/almacenes/slug/${namestore}`;
    const result = await authFetch(url, null, logout);
    if (result.statusCode === 500) throw Error("Error del servidor");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para obtener un almacen en base al ID
 * @param {String} storeId ID del almacen 
 * @param {Function} logout Funcion para cerrar sesion  
 * @returns Almacen
 */

export async function getStoreById(storeId, logout) {
  try {
    const url = `${BASE_PATH}/almacenes/${storeId}`;
    const result = await authFetch(url, null, logout);
    if (result.statusCode === 500) throw Error("Error del servidor");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para para agregar un almacen
 * @param {Object} store Objeto almacen
 * @param {Function} logout Funcion para cerrar sesion  
 * 
 */

export async function addStore(store, logout) {
  try {
    const url = `${BASE_PATH}/almacenes`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(store),
    };
    const result = await authFetch(url, params, logout);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para para actualizar un almacen
 * @param {String} idStore ID del almacen
 * @param {Object} store Objecto almacen
 * @param {Function} logout Funcion para cerrar sesion  
 * 
 */


export async function updateStore(idStore, store, logout) {
  try {
    const url = `${BASE_PATH}/almacenes/${idStore}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(store),
    };
    const result = await authFetch(url, params, logout);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

//storecontext

//setear store em localstorage
export function setShop(store) {
  localStorage.setItem(STORE, store);
}

//obtener token de usuario
export function getShop() {
  return localStorage.getItem(STORE);
}

//eliminar token
export function removeShop() {
  localStorage.removeItem(STORE);
}
