import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";

export async function getProducts(idAlmacen, logout) {
  try {
    const url = `${BASE_PATH}/productos?almacen=${idAlmacen}`;
    const result = await authFetch(url, null, logout);
    if (result.statusCode === 500) throw Error("Error del servidor");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProduct(idProduct, logout) {
  try {
    const url = `${BASE_PATH}/productos/${idProduct}`;
    const result = await authFetch(url, null, logout);
    if (result.statusCode === 500) throw Error("Error del servidor");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function addProduct(product, logout) {
  console.log(product, logout);
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

export async function addStockIn(stockIn, logout) {
  console.log(stockIn, logout);
  try {
    const url = `${BASE_PATH}/entrada-stocks`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stockIn),
    };
    const result = await authFetch(url, params, logout);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateProduct(idProduct, product, logout) {
  try {
    const url = `${BASE_PATH}/productos/${idProduct}`;
    const params = {
      method: "PUT",
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
