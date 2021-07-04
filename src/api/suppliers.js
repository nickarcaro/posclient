import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";

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
