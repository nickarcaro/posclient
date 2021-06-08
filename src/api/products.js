import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";

export async function getProducts(idAlmacen, logout) {
  try {
    const url = `${BASE_PATH}/productos?almacen.id=${idAlmacen}`;
    const result = await authFetch(url, null, logout);
    if (result.statusCode === 500) throw Error("Error del servidor");
    console.log("tiro codigo: " + result);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addProduct(product, logout) {
  try {
    const url = `${BASE_PATH}/productos`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };
    const result = await authFetch(url, params, logout);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}