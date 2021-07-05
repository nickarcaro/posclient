import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";

/**
 * Conexion entre front end y back end para obtener los proveedores
 * @param {String} idAlmacen ID del almacen
 * @param {Function} logout Funcion para cerrar sesion
 * @returns Lista de vendedores
 */

export async function getSuppliers(idAlmacen, logout) {
  try {
    const url = `${BASE_PATH}/proveedors?almacen=${idAlmacen}`;
    const result = await authFetch(url, null, logout);
    if (result.statusCode === 500) throw Error("Error del servidor");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Conexion entre front end y back end para agregar proveedores
 * @param {Object} supplier Objeto de proveedor
 * @param {*} logout Funcion para cerrar sesion
 * 
 */

export async function addSupplier(supplier, logout) {
  try {
    const url = `${BASE_PATH}/proveedors`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(supplier),
    };
    const result = await authFetch(url, params, logout);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * 
 * @param {String} idSupplier ID de proveedor
 * @param {Object} supplier Objeto de proveedor
 * @param {Function} logout Funcion para cerrar sesion
 * 
 */

export async function updateSupplier(idSupplier, supplier, logout) {
  try {
    const url = `${BASE_PATH}/proveedors/${idSupplier}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(supplier),
    };
    const result = await authFetch(url, params, logout);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
