import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";

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

export async function getStoreBySlug(namestore, logout) {
  try {
    const url = `${BASE_PATH}/almacenes?slug=${namestore}`;
    const result = await authFetch(url, null, logout);
    if (result.statusCode === 500) throw Error("Error del servidor");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

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
