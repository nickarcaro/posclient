import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";

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
